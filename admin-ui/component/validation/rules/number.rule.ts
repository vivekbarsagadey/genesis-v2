import { ValidationError } from "../engine";
import {ValidatorType} from "../engine/validator"
import { RuleContext } from "./rule.context";

const NumberRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.NUMBER;
  };

  const action = () => {
    if (isNaN(data)) {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { NumberRule };
