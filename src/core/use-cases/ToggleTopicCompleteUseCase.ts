import type { IProgressRepository } from '../repositories/IProgressRepository';

export class ToggleTopicCompleteUseCase {
  private progressRepo: IProgressRepository;
  constructor(progressRepo: IProgressRepository) {
    this.progressRepo = progressRepo;
  }

  execute(topicFile: string, isComplete: boolean): void {
    if (isComplete) {
      this.progressRepo.markComplete(topicFile);
    } else {
      this.progressRepo.markIncomplete(topicFile);
    }
  }
}
