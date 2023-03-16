import { ValidatorType } from './';

const Pattern = {
  DOMAIN_NAME: new RegExp(
    /^\s*(?:(?:\w+(?:-+\w+)*\.)+[a-z]+)\s*(?:,\s*(?:(?:\w+(?:-+\w+)*\.)+[a-z]+)\s*)*$/
  ),
};
interface Constraint {
  field: string;
  dependents?: string[];
  validatorType: ValidatorType;
  message?: string;
  pattern?: RegExp;
}

export type{ Constraint, Pattern };
