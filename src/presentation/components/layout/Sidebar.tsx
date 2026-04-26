import { useEffect, useState } from 'react';
import { useSidebar } from '../../store/sidebarContext';
import { useParams } from 'react-router-dom';
import { topics } from '../../../data/static/topics';

export function Sidebar() {
  const { sections } = useSidebar();
  const { topicFile } = useParams<{ topicFile: string }>();
  const currentTopic = topics.find(t => t.file === topicFile);
  const [activeHref, setActiveHref] = useState<string>('');

  // IntersectionObserver: highlight the nav link matching the visible section
  useEffect(() => {
    if (sections.length === 0) return;

    let observer: IntersectionObserver;
    const timer = setTimeout(() => {
      const sectionEls = document.querySelectorAll('[id]');
      if (sectionEls.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.target.id) {
              setActiveHref(`#${entry.target.id}`);
            }
          }
        },
        { rootMargin: '-15% 0px -75% 0px' }
      );

      sectionEls.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [sections]);

  return (
    <nav id={`nav-${topicFile?.replace('.html', '') ?? 'sidebar'}`}>
      <div className="nav-logo">
        <div className="v">{currentTopic?.category ?? 'Topic'}</div>
        <h2>{currentTopic?.title ?? 'TypeScript'}</h2>
      </div>

      {sections.map((sec, i) =>
        sec.isGroup ? (
          <div key={i} className="nav-group">{sec.label}</div>
        ) : (
          <a
            key={i}
            href={sec.href}
            className={activeHref === sec.href ? 'on' : ''}
            onClick={() => setActiveHref(sec.href)}
          >
            {sec.label}
          </a>
        )
      )}
    </nav>
  );
}
