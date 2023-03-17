import { ValidationError, ValidatorType } from "../engine";
import { RuleContext } from "./rule.context";


const PasswordRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.PASSWORD;
  };

  const action = () => {
    // one lowercase, uppercase, number and min-8 max-10 character
    const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,10})/;

    // one lowercase, uppercase, number, special char and min-8 max-10 character
    // const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,10})(?=.*[$@$!%*?&])/;

    if (data.indexOf(' ') >= 0) {
      throw new ValidationError(constraint);
    } if (!strongPassword.test(data)) {
      throw new ValidationError(constraint);
    }
  };

  return { condition, action };
};

export { PasswordRule };
