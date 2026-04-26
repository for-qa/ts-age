import { useState } from 'react';
import type { Question } from '../../../core/entities/Question';
import { submitQuizAnswerUseCase } from '../../../data/di/container';

interface QuizCardProps {
  question: Question;
  index: number;
}

export function QuizCard({ question, index }: QuizCardProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const [shuffledOptions] = useState(() => {
    const opts = question.options.map((opt, i) => ({ opt, originalIndex: i }));
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return opts;
  });

  const handleSelect = (originalIdx: number) => {
    if (selectedIdx !== null) return; // Prevent changing answer
    setSelectedIdx(originalIdx);
  };

  const isAnswered = selectedIdx !== null;
  const isCorrect = isAnswered && submitQuizAnswerUseCase.execute(question, selectedIdx);

  return (
    <div className="quiz-card" data-answer={question.answerIndex}>
      <div className="quiz-q">
        <span className="quiz-num">Q{index + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>
      
      <div className="quiz-opts">
        {shuffledOptions.map((item, oi) => {
          let btnClass = 'quiz-opt';
          if (isAnswered) {
            if (item.originalIndex === question.answerIndex) btnClass += ' quiz-correct';
            else if (item.originalIndex === selectedIdx) btnClass += ' quiz-wrong';
          }

          return (
            <button 
              key={oi} 
              className={btnClass} 
              onClick={() => handleSelect(item.originalIndex)}
              disabled={isAnswered}
            >
              <span className="quiz-letter">{"ABCD"[oi]}</span>
              <span dangerouslySetInnerHTML={{ __html: item.opt }} />
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`quiz-fb ${isCorrect ? 'quiz-fb-correct' : 'quiz-fb-wrong'}`}>
          {isCorrect ? '✅ Correct! ' : '❌ The answer is '}
          <span className="quiz-ans">
            {"ABCD"[shuffledOptions.findIndex(o => o.originalIndex === question.answerIndex)]}: {question.options[question.answerIndex].replace(/<[^>]*>?/gm, '')}
          </span>
          
          {question.explanation && (
            <div className="quiz-example">
              <span className="quiz-example-label">💡 Explanation:</span>
              <span className="quiz-exp-text" dangerouslySetInnerHTML={{ __html: question.explanation }} />
              {question.section && (
                <div style={{ marginTop: '0.75rem', fontSize: '13px' }}>
                  <a 
                    href={`#${question.section}`} 
                    style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}
                  >
                    📖 Read full topic →
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
