import { Constraint } from "../engine";

interface RuleContext {
  data: any;
  name?: string;
  constraint: Constraint;
}

export type{ RuleContext };
