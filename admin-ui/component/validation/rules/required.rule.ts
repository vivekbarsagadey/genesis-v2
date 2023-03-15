import { ValidationError } from "../engine";
import {ValidatorType} from "../engine/validator"
import { RuleContext } from "./rule.context";
import { isBlank } from "./string.utils";

const RequiredRule = ({ constraint, data }: RuleContext) => {
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
