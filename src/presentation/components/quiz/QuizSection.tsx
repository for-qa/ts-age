import { useMemo } from 'react';
import { getQuizQuestionsUseCase } from '../../../data/di/container';
import { QuizCard } from './QuizCard';

interface QuizSectionProps {
  topicFile: string;
}

export function QuizSection({ topicFile }: QuizSectionProps) {
  const questions = getQuizQuestionsUseCase.execute(topicFile);

  const shuffledQuestions = useMemo(() => {
    if (!questions) return [];
    const arr = [...questions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [questions]);

  if (shuffledQuestions.length === 0) return null;

  return (
    <div className="sec quiz-sec" id="self-test">
      <div className="sec-label">Self Test</div>
      <h2>🧪 Quick Quiz ({shuffledQuestions.length} Questions)</h2>
      <p>Test your understanding of every topic on this page. Click an option to check.</p>
      <div className="quiz-grid">
        {shuffledQuestions.map((q, idx) => (
          <QuizCard key={idx} question={q} index={idx} />
        ))}
      </div>
    </div>
  );
}
