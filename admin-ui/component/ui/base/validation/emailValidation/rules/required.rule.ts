import { isBlank } from "../../../../../../utils/string.util";
import { ValidatationError } from "../../validatation.error";
import { ValidationStatus } from "../validator.context";
import {RuleContext} from "./rule.context";

const RequiredRule = ({ status, data, name }: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationStatus.REQUIRED;
  };
  
  const action = () => {
    if(isBlank(data)){
      throw new ValidatationError(` ${name} is Required `);
    }
  };

  return { condition, action };
};

export { RequiredRule };
