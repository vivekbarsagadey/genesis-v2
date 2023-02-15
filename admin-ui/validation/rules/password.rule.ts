import { RuleContext } from './';
import { ValidatorType } from '../validator';
import { ValidationError } from '../validation.error';

const PasswordRule = ({ constraint, data, name }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.PASSWORD;
  };

  const action = () => {
    // one lowercase, uppercase, number and min-8 max-10 charchter
    const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,10})/;

    // one lowercase, uppercase, number, special char and min-8 max-10 charchter
    // const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,10})(?=.*[$@$!%*?&])/;

    if (data.length > 8) {
    } else {
      throw new ValidationError(constraint);
    }
    if (!data.match(strongPassword)) {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { PasswordRule };
