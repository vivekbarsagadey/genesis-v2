import { ValidationError, ValidationContext } from '.';
import { validate as _validate } from './rules';

const ValidationEngine = {
  validate(context: ValidationContext): ValidationError[] {
    return _validate(context);
  },
};

export { ValidationEngine };
