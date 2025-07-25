export class TestRunner {
    constructor(kernel) {
        this.kernel = kernel;
    }
    setProgressEvent(callback) {
        this.progressCallback = callback;
    }
    setChapterEvent(callback) {
        this.chapterCallback = callback;
    }
    chapter(name) {
        if (this.chapterCallback) {
            this.chapterCallback(1, name); // Placeholder chapter number
        }
    }
    runTests(tests) {
        let performed = 0, succeeded = 0, failed = 0;
        const total = tests.length;
        tests.forEach(test => {
            performed++;
            // Placeholder evaluation
            const result = { type: 'number', value: 0, toString: () => '0' };
            const passed = result.toString() === String(test.expected);
            if (passed)
                succeeded++;
            else
                failed++;
            if (this.progressCallback) {
                this.progressCallback(total, performed, succeeded, failed);
            }
        });
    }
}
