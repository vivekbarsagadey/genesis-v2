import { ValidationError, ValidatorType } from '../engine';
import { RuleContext } from './rule.context';

const NumberRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean =>
    constraint.validatorType === ValidatorType.NUMBER;

  const action = () => {
    if (isNaN(data)) {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { NumberRule };
