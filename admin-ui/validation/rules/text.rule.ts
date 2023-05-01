import { ValidationError, ValidatorType } from '../engine';
import { RuleContext } from './rule.context';

const TextRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => constraint.validatorType === ValidatorType.TEXT;

  const action = () => {
    if (data.includes(' ')) {
    } else {
      throw new ValidationError(constraint);
    }
  };
  return { condition, action };
};

export { TextRule };
