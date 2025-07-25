import { TestRunner } from './TestRunner';
import { TestOptions } from './TestCore';

const kernel = {};
const runner = new TestRunner(kernel);

runner.setProgressEvent((total: number, performed: number, succeeded: number, failed: number) => {
  console.log(`Progress: ${performed}/${total}, ${succeeded} passed, ${failed} failed`);
});

runner.setChapterEvent((number: number, name: string) => {
  console.log(`Chapter ${number}: ${name}`);
});

runner.chapter('Mathematical Constants');

const tests: TestOptions[] = [
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