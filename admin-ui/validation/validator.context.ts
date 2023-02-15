import { Constraint } from "./constrain";

interface ValidationContext {
  data: any;
  name?: string;
  constraints: Array<Constraint>;
}

export type { ValidationContext };
