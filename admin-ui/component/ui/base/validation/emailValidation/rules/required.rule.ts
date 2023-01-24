import { isBlank } from "../../../../../../utils/string.util";
import { ValidatationError } from "../../validatation.error";
import { ValidationEmailStatus } from "../validator.context";
import RuleContext from "./rule.context";

const RequiredRule = ({ status, data, name }: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationEmailStatus.REQUIRED;
  };
  
  const action = () => {
    if(isBlank(data)){
      throw new ValidatationError(` ${name} Is required `);
    }
  };

  return { condition, action };
};

export { RequiredRule };
