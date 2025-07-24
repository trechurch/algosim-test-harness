import { evaluate, TAlgosimObject, TASR, TASI, TASC, TRationalNumber, TRGB, THSV, THSL, TASOSignal } from './Evaluator';
import { compareNumber, compareString, compareArray, compareRGB, compareHSV, compareHSL, compareSignal, compareRational } from './Comparators';
import { log, updateProgress, failList } from './Logger';

export interface TestOptions {
  line: number;
  expr: string;
  expected: any;
  testSL?: boolean;
  sl?: string;
}
//--- test change
export function test({ line, expr, expected, testSL = false, sl = '' }: TestOptions): void {
  try {
    const result = evaluate(expr);
    const success = getComparator(expected)(result, expected, testSL, sl);

    log({ line, expr, expected, result, success });
    updateProgress(success);

    if (!success) {
      failList.push({
        line,
        expr,
        expected: JSON.stringify(expected),
        actual: result.toString(),
        toString: () => `Test failed at line ${line}:\n  Expr: ${expr}\n  Expected: ${expected}\n  Actual: ${result.toString()}`,
      });
    }
  } catch (error) {
    failList.push({
      line,
      expr,
      expected: JSON.stringify(expected),
      actual: error.message,
      toString: () => `Test failed at line ${line}:\n  Expr: ${expr}\n  Expected: ${expected}\n  Actual: ${error.message}`,
    });
    log({ line, expr, expected, result: { type: 'error', value: error.message }, success: false });
    updateProgress(false);
  }
}

function getComparator(expected: any): (result: TAlgosimObject, expected: any, testSL: boolean, sl: string) => boolean {
  if (expected === null) return () => true;
  if (Array.isArray(expected)) return compareArray;
  if (typeof expected === 'string') return compareString;
  if (typeof expected === 'number') return compareNumber;
  if (expected?.type === 'rgb') return compareRGB;
  if (expected?.type === 'hsv') return compareHSV;
  if (expected?.type === 'hsl') return compareHSL;
  if (expected?.type === 'signal') return compareSignal;
  if (expected?.type === 'rational') return compareRational;
  return () => false;
}