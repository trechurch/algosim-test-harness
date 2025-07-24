import { test, TestOptions } from './TestCore';
import { resetProgress, updateProgress, testCount, successCount, failCount } from './Logger';

export interface ChapterEvent {
  (chapterNumber: number, chapterName: string): void;
}

export interface ProgressEvent {
  (total: number, performed: number, succeeded: number, failed: number): void;
}

export class TestRunner {
  private kernel: any;
  private chapterNumber = 0;
  private progressEvent?: ProgressEvent;
  private chapterEvent?: ChapterEvent;
  private totalCount = 1_496_146;

  constructor(kernel: any) {
    this.kernel = kernel;
    resetProgress();
  }

  setProgressEvent(event: ProgressEvent): void {
    this.progressEvent = event;
  }

  setChapterEvent(event: ChapterEvent): void {
    this.chapterEvent = event;
  }

  chapter(name: string): void {
    this.chapterNumber++;
    this.chapterEvent?.(this.chapterNumber, name);
  }

  runTests(tests: TestOptions[]): void {
    resetProgress();
    for (const testCase of tests) {
      test(testCase);
      this.progressEvent?.(this.totalCount, testCount, successCount, failCount);
    }
  }
}