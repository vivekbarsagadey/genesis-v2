import { isBlank } from "../../utils/string.util";
import { ValidationError } from "../validation.error";
import { ValidatorType } from '../validator';

import { RuleContext } from './';

const RequiredRule = ({ constraint, data, name }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.REQUIRED;
  };

  const action = () => {
    if (isBlank(data)) {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { RequiredRule };
