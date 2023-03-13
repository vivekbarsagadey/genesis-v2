import { RuleContext } from './';
import { ValidatorType } from '../validator';
import { ValidationError } from '../validation.error';

const TextRule = ({  constraint, data, name }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.TEXT;
  };

  const action = () => {
    if (!data.includes(' ')) {
    } else {
      throw new ValidationError(constraint);
    }
  };
  return { condition, action };
};

export { TextRule };
