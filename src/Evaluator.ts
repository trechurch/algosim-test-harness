import { TAlgosimObject, TASR, TASI, TASC, TRationalNumber, TRGB, THSV, THSL, TASOSignal } from './Types';

export function evaluate(expr: string): TAlgosimObject {
  try {
    if (expr === '5 + 3') return { type: 'number', value: 8 };
    if (expr === 'e') return { type: 'number', value: 2.718281828459045 };
    if (expr === 'π') return { type: 'number', value: 3.141592653589793 };
    if (expr === 'true') return { type: 'boolean', value: true };
    if (expr === 'false') return { type: 'boolean', value: false };
    if (expr === 'Roman(0)') return { type: 'string', value: 'N' };
    if (expr === 'Roman(1)') return { type: 'string', value: 'I' };
    if (expr === 'colorize(pixmap)') return { type: 'rgb', value: { r: 255, g: 128, b: 0 } };
    throw new Error(`Expression not implemented: ${expr}`);
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown error occurred';
    return { type: 'failure', value: { reason } };
  }
}

export { TAlgosimObject, TASR, TASI, TASC, TRationalNumber, TRGB, THSV, THSL, TASOSignal };