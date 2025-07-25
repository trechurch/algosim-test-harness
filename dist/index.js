import { TestRunner } from './TestRunner';
const kernel = {};
const runner = new TestRunner(kernel);
runner.setProgressEvent((total, performed, succeeded, failed) => {
    console.log(`Progress: ${performed}/${total}, ${succeeded} passed, ${failed} failed`);
});
runner.setChapterEvent((number, name) => {
    console.log(`Chapter ${number}: ${name}`);
});
runner.chapter('Mathematical Constants');
const tests = [
    { line: 574, expr: 'e', expected: 2.718281828459045 },
    { line: 575, expr: 'π', expected: 3.141592653589793 },
    { line: 579, expr: 'true', expected: true },
    { line: 67412, expr: 'Roman(0)', expected: 'N', testSL: true, sl: 'N' },
    { line: 67413, expr: 'Roman(1)', expected: 'I', testSL: true, sl: 'I' },
    { line: 67414, expr: 'Roman(2)', expected: 'II', testSL: true, sl: 'II' },
    { line: 67415, expr: 'Roman(3)', expected: 'III', testSL: true, sl: 'III' },
    { line: 67416, expr: 'Roman(4)', expected: 'IV', testSL: true, sl: 'IV' },
];
runner.runTests(tests);
