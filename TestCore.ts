import { TAlgosimObject } from './Types';

export interface TestOptions {
  line: number;
  expr: string;
  expected: TAlgosimObject | boolean | number | string;
  testSL?: boolean;
  sl?: string;
}

export class TestCore {
  // Placeholder: Add actual test core logic here
}