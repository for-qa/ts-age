import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { topics } from '../../data/static/topics';
import { PrevNextNav } from '../components/navigation/PrevNextNav';
import { ProgressTracker } from '../components/navigation/ProgressTracker';
import { QuizSection } from '../components/quiz/QuizSection';
import { VariablesKeywordsContent } from './topic-content/VariablesKeywordsContent';
import { useSidebar } from '../store/sidebarContext';
import { getQuizQuestionsUseCase } from '../../data/di/container';

export function TopicPage() {
  const { topicFile } = useParams<{ topicFile: string }>();
  const [contentHtml, setContentHtml] = useState<string>('');
  const [heroHtml, setHeroHtml] = useState<string>('');
  const { setSections } = useSidebar();

  const currentTopic = topics.find(t => t.file === topicFile);
  const isMigrated = topicFile === 'variables-keywords.html';

  useEffect(() => {
    // Clear sidebar sections when navigating away
    setSections([]);
    
    if (!topicFile) return;

    fetch(`/content/${topicFile}`)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract the legacy sidebar nav links for the current topic
        const legacyNav = doc.querySelector('nav[id]');
        if (legacyNav) {
          const links: { href: string; label: string; isGroup?: boolean }[] = [];
          legacyNav.querySelectorAll('a, .nav-group').forEach(el => {
            if (el.classList.contains('nav-group')) {
              links.push({ href: '', label: el.textContent || '', isGroup: true });
            } else {
              const a = el as HTMLAnchorElement;
              links.push({ href: a.getAttribute('href') || '#', label: a.textContent || '' });
            }
          });
          // Append quiz link if quiz questions exist for this topic
          const quizQs = getQuizQuestionsUseCase.execute(topicFile);
          if (quizQs.length > 0) {
            links.push({ href: '#self-test', label: `Quick Quiz (${quizQs.length})` });
          }
          setSections(links);
        }

        const contentDiv = doc.querySelector('.content');
        if (contentDiv) {
          // Remove legacy prev/next navs (React renders these)
          contentDiv.querySelectorAll('.pn-nav').forEach(n => n.remove());

          // Extract hero
          const heroDiv = contentDiv.querySelector('.hero');
          if (heroDiv) {
            setHeroHtml(heroDiv.outerHTML);
            heroDiv.remove();
          } else {
            setHeroHtml(`<div class="hero"><h1>${currentTopic?.title || 'Topic'}</h1></div>`);
          }

          setContentHtml(contentDiv.innerHTML);
        } else {
          setContentHtml('<p>Content not found.</p>');
        }
      })
      .catch(err => {
        console.error(err);
        setContentHtml('<p>Failed to load content.</p>');
      });

    window.scrollTo(0, 0);
  }, [topicFile, currentTopic, isMigrated, setSections]);

  if (!topicFile) return <div>Topic not found.</div>;

  if (isMigrated) {
    return (
      <div>
        <div className="hero" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
            <ProgressTracker topicFile={topicFile} />
          </div>
          <div className="hero-tags">
            <span className="hero-tag">TypeScript</span>
            <span className="hero-tag">Variables</span>
            <span className="hero-tag">var / let / const</span>
            <span className="hero-tag">Session Notes</span>
          </div>
          <h1>Variables <span>&amp; Keywords</span></h1>
          <p>Everything about creating, naming, and managing variables in TypeScript — covering comments, the three keywords (var, let, const), and the five key differences between them.</p>
        </div>
        <VariablesKeywordsContent />
        <QuizSection topicFile={topicFile} />
        <PrevNextNav currentFile={topicFile} />
      </div>
    );
  }

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
        <div style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 10 }}>
          <ProgressTracker topicFile={topicFile} />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <QuizSection topicFile={topicFile} />
      <PrevNextNav currentFile={topicFile} />
    </div>
  );
}
