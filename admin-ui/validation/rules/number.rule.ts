import { ValidationError, ValidatorType } from "../engine";
import { RuleContext } from "./rule.context";


const NumberRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.NUMBER;
  };

  const action = () => {
    if (isNaN(data)) {
      throw new ValidationError(constraint);
    }
    else if(data.length>10 || data.length<10){
      throw new ValidationError(constraint);
    }
   
  };

  return { condition, action };
};

export { NumberRule };
