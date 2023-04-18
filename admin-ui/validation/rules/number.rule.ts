import { RuleContext } from './';
import { ValidatorType } from '../validator';
import { ValidationError } from '../validation.error';

const NumberRule = ({constraint,data, name }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.NUMBER;
  };

  const action = () => {
    var format = /[!@#$%^&*()_+-=[]{};':"\|,.<>]/;
    if (data.indexOf(' ') >= 0) {
      throw new ValidationError(constraint);
    }
    if (data.length >= 8) {
    } else {
      throw new ValidationError(constraint);
    }
    if(format.test(data)){ 
      throw new ValidationError(constraint);
    }

  };

  return { condition, action };
};

export { NumberRule };
