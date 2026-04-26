import { create } from 'zustand';
import { progressRepository, toggleTopicCompleteUseCase } from '../../data/di/container';
import type { UserProgress } from '../../core/entities/UserProgress';

interface ProgressState {
  progress: UserProgress;
  toggleComplete: (topicFile: string, isComplete: boolean) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progress: progressRepository.getProgress(),
  toggleComplete: (topicFile, isComplete) => {
    toggleTopicCompleteUseCase.execute(topicFile, isComplete);
    set({ progress: progressRepository.getProgress() });
  },
}));
