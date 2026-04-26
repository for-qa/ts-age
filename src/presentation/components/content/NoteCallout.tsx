import type { ReactNode } from 'react';

type NoteType = 'tip' | 'info' | 'warn';

interface NoteCalloutProps {
  type: NoteType;
  children: ReactNode;
  icon?: string;
}

export function NoteCallout({ type, children, icon }: NoteCalloutProps) {
  const iconMap: Record<NoteType, string> = {
    tip: '✓',
    info: 'i',
    warn: '⚠'
  };

  return (
    <div className={`note note-${type}`}>
      <span className="note-i">{icon || iconMap[type]}</span>
      <p>{children}</p>
    </div>
  );
}
