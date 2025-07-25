import { TestCore, TestOptions } from './TestCore';
import { TAlgosimObject } from './Types';

export class TestRunner {
  private kernel: any;
  private progressCallback?: (total: number, performed: number, succeeded: number, failed: number) => void;
  private chapterCallback?: (number: number, name: string) => void;

  constructor(kernel: any) {
    this.kernel = kernel;
  }

  setProgressEvent(callback: (total: number, performed: number, succeeded: number, failed: number) => void): void {
    this.progressCallback = callback;
  }

  setChapterEvent(callback: (number: number, name: string) => void): void {
    this.chapterCallback = callback;
  }

  chapter(name: string): void {
    if (this.chapterCallback) {
      this.chapterCallback(1, name); // Placeholder chapter number
    }
  }

  runTests(tests: TestOptions[]): void {
    let performed = 0, succeeded = 0, failed = 0;
    const total = tests.length;

    tests.forEach(test => {
      performed++;
      // Placeholder evaluation
      const result: TAlgosimObject = { type: 'number', value: 0, toString: () => '0' };
      const passed = result.toString() === String(test.expected);
      if (passed) succeeded++; else failed++;
      if (this.progressCallback) {
        this.progressCallback(total, performed, succeeded, failed);
      }
    });
  }
}