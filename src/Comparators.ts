import { TAlgosimObject, TASR, TASI, TASC, TRationalNumber, TRGB, THSV, THSL, TASOSignal } from './Types';

export function compareNumber(result: TAlgosimObject, expected: TASR, testSL: boolean, sl: string): boolean {
  if (result.type !== 'number') return false;
  const epsilon = 1e-10;
  const pass = Math.abs(result.value - expected) < epsilon;
  if (testSL && pass) return result.getAsSingleLineText?.() === sl;
  return pass;
}

export function compareString(result: TAlgosimObject, expected: string, testSL: boolean, sl: string): boolean {
  if (result.type !== 'string') return false;
  const pass = result.value === expected;
  if (testSL && pass) return result.getAsSingleLineText?.() === sl;
  return pass;
}

export function compareArray(result: TAlgosimObject, expected: any[], testSL: boolean, sl: string): boolean {
  if (result.type !== 'array') return false;
  return true; // Stub
}

export function compareRGB(result: TAlgosimObject, expected: TRGB, testSL: boolean, sl: string): boolean {
  if (result.type !== 'rgb') return false;
  const { r, g, b } = result.value as TRGB;
  return r === expected.r && g === expected.g && b === expected.b;
}

export function compareHSV(result: TAlgosimObject, expected: THSV, testSL: boolean, sl: string): boolean {
  if (result.type !== 'hsv') return false;
  const { h, s, v } = result.value as THSV;
  return h === expected.h && s === expected.s && v === expected.v;
}

export function compareHSL(result: TAlgosimObject, expected: THSL, testSL: boolean, sl: string): boolean {
  if (result.type !== 'hsl') return false;
  const { h, s, l } = result.value as THSL;
  return h === expected.h && s === expected.s && l === expected.l;
}

export function compareSignal(result: TAlgosimObject, expected: TASOSignal, testSL: boolean, sl: string): boolean {
  if (result.type !== 'signal') return false;
  return result.value === expected;
}

export function compareRational(result: TAlgosimObject, expected: TRationalNumber, testSL: boolean, sl: string): boolean {
  if (result.type !== 'rational') return false;
  const { num, den } = result.value as TRationalNumber;
  return num === expected.num && den === expected.den;
}