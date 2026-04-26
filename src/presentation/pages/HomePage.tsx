import { Link } from 'react-router-dom';
import { topics } from '../../data/static/topics';
import { useProgressStore } from '../store/progressStore';
import { useThemeStore } from '../store/themeStore';

export function HomePage() {
  const { progress } = useProgressStore();
  const { theme, toggleTheme } = useThemeStore();
  const completedCount = Object.keys(progress.completedTopics).length;
  const totalCount = topics.length;
  const pct = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  // Special badge styles for bonus items
  const badgeStyle = (num: string) => {
    if (num === '★') return { background: 'var(--amber)', color: '#000' };
    if (num === '🧠') return { background: 'var(--green)', color: '#fff' };
    return {};
  };

  return (
    <>
      <div id="topbar">
        <div className="tb-brand">
          <div className="tb-brand-icon">TS</div>
          <div>
            <div className="tb-brand-name">TypeScript Learning Path</div>
            <div className="tb-brand-sub">Session Notes</div>
          </div>
        </div>
        <button
          className="tb-theme-btn"
          title="Toggle dark/light mode"
          onClick={toggleTheme}
          style={{ marginLeft: 'auto' }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="page-wrap">
        <div className="home-wrap animate-page-enter">
          <h1>TypeScript <em style={{ fontWeight: 400, color: 'var(--ink3)' }}>Learning Path</em></h1>
          <p>Beginner-friendly notes with real-life examples. Each topic builds on the previous one — start from the top and work your way down. Click any topic to open its full notes.</p>

          {totalCount > 0 && (
            <div style={{ marginBottom: '1.5rem', padding: '1rem 1.2rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--card-bg, #fff)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap' }}>📊 Progress</span>
              <span style={{ flex: 1, height: '6px', background: 'var(--surface2)', borderRadius: '3px', overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: `${pct}%`, background: 'var(--green)', borderRadius: '3px', transition: 'width .3s' }} />
              </span>
              <span style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--ink3)', whiteSpace: 'nowrap' }}>{completedCount}/{totalCount} ({pct}%)</span>
            </div>
          )}

          <div className="topic-grid">
            {topics.map(topic => {
              const isCompleted = !!progress.completedTopics[topic.file];
              return (
                <Link
                  key={topic.file}
                  to={`/pages/${topic.file}`}
                  className="topic-card"
                  style={{ position: 'relative' }}
                >
                  <div className="tc-num">
                    <span className="tc-num-badge" style={badgeStyle(topic.number)}>{topic.number}</span>
                    {' '}{topic.category || 'Topic'}
                  </div>
                  <div className="tc-title">{topic.title}</div>
                  {topic.desc && <div className="tc-desc">{topic.desc}</div>}
                  {topic.tags && topic.tags.length > 0 && (
                    <div className="tc-tags">
                      {topic.tags.map((tag, i) => (
                        <span key={i} className="tc-tag" style={{ background: tag.bg, color: tag.color }}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                  {isCompleted && (
                    <div style={{ position: 'absolute', top: '8px', right: '10px', fontSize: '16px' }}>✅</div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
