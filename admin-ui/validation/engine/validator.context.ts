import { Constraint } from './constraint';

interface ValidationContext {
  data: any;
  name?: string;
  constraints: Constraint[];
}

export type{ ValidationContext };
