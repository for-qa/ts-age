import { Link } from 'react-router-dom';
import { topics } from '../../../data/static/topics';

interface PrevNextNavProps {
  currentFile: string;
}

export function PrevNextNav({ currentFile }: PrevNextNavProps) {
  const idx = topics.findIndex(t => t.file === currentFile);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;

  return (
    <div className="pn-nav">
      {prev ? (
        <Link to={`/pages/${prev.file}`} className="pn-link pn-prev">
          <span className="pn-dir">← Previous</span>
          <span className="pn-title"><span className="pn-badge">{prev.number}</span> {prev.title}</span>
        </Link>
      ) : <div />}

      {next ? (
        <Link to={`/pages/${next.file}`} className="pn-link pn-next">
          <span className="pn-dir">Next →</span>
          <span className="pn-title"><span className="pn-badge">{next.number}</span> {next.title}</span>
        </Link>
      ) : (
        <Link to="/" className="pn-link pn-next">
          <span className="pn-dir">Finish →</span>
          <span className="pn-title">Back to Index</span>
        </Link>
      )}
    </div>
  );
}
