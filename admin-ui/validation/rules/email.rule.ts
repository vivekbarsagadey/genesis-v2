import { ValidationError, ValidatorType } from '../engine';
import { RuleContext } from './rule.context';

const EmailRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean =>
    constraint.validatorType === ValidatorType.EMAIL;

  const action = () => {
    if (data.indexOf(' ') >= 0) {
      throw new ValidationError(constraint);
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
    } else {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { EmailRule };
