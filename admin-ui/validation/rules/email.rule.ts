import { RuleContext } from './';
import { ValidatorType } from '../validator';
import { ValidationError } from '../validation.error';

const EmailRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.EMAIL;
  };

  const action = () => {
    if (data.indexOf(' ') >= 0) {
      throw new ValidationError(constraint);
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
    } else {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { EmailRule };
