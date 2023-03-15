import { ValidationError } from "../engine";
import {ValidatorType} from "../engine/validator"
import { RuleContext } from "./rule.context";

const TextRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.TEXT;
  };

  const action = () => {
    if (data.includes(' ')) {
    } else {
      throw new ValidationError(constraint);
    }
  };
  return { condition, action };
};

export { TextRule };
