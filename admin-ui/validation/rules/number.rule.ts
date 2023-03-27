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
      else if(data == "e") { 
        debugger;
        throw new ValidationError(constraint);
    }
      
  };

  return { condition, action };
};

export { NumberRule };
