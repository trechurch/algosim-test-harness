export type TASR = number; // Real number
export type TASI = number; // Integer
export type TASC = { re: number; im: number }; // Complex number
export type TRationalNumber = { num: number; den: number }; // Rational number
export type TRGB = { r: number; g: number; b: number }; // RGB color
export type THSV = { h: number; s: number; v: number }; // HSV color
export type THSL = { h: number; s: number; l: number }; // HSL color
export type TASOSignal = 'success' | 'failure'; // Signal type

export interface TAlgosimObject {
  type: string;
  value: any;
  toString(): string;
  getAsSingleLineText?(formatOptions?: FormatOptions): string;
}

export interface TTestItem {
  line: number;
  expr: string;
  expected: string;
  actual: string;
  toString(): string;
}

export interface FormatOptions {
  numberFormat?: 'default' | 'fraction' | 'fixed' | 'scientific' | 'power';
  digits?: number;
  prettyExp?: boolean;
  digitGrouping?: number;
}