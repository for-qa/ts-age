import { Link, useParams } from 'react-router-dom';
import { topics } from '../../../data/static/topics';
import { useThemeStore } from '../../store/themeStore';

interface TopBarProps {
  mode?: 'home' | 'topic';
}

export function TopBar({ mode = 'home' }: TopBarProps) {
  const { theme, toggleTheme } = useThemeStore();
  const { topicFile } = useParams<{ topicFile: string }>();
  const currentTopic = topics.find(t => t.file === topicFile);

  return (
    <div id="topbar">
      {/* Brand  --  always shown */}
      <div className="tb-brand">
        <div className="tb-brand-icon">TS</div>
        <div>
          <div className="tb-brand-name">TypeScript Learning Path</div>
          <div className="tb-brand-sub">Session Notes</div>
        </div>
      </div>

      {mode === 'topic' ? (
        <>
          {/* ← Back to Index */}
          <Link to="/" className="tb-back">← Back to Index</Link>
          {/* Current topic title on the right */}
          <div className="tb-topic-title">{currentTopic?.title ?? ''}</div>
        </>
      ) : null}

      {/* Theme toggle  --  always on the far right */}
      <button
        className="tb-theme-btn"
        title="Toggle dark/light mode"
        onClick={toggleTheme}
        style={mode === 'home' ? { marginLeft: 'auto' } : {}}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}
