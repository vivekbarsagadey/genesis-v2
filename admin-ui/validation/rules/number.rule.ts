import { ValidationError, ValidatorType } from "../engine";
import { RuleContext } from "./rule.context";
import { isLength } from "./length.rule";


const NumberRule = ({ constraint, data }: RuleContext) => {
  const condition = (): boolean => {
    return constraint.validatorType === ValidatorType.NUMBER;
  };

  const action = () => {
     
    if (isNaN(data)) {
      throw new ValidationError(constraint);
    }
     if(isLength(data)){
      console.log(isLength)
      throw new ValidationError(constraint);
     }
      
  }; 

  return { condition, action };
};

export { NumberRule };
