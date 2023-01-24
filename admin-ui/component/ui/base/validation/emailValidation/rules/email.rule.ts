import { ValidatationError } from "../../validatation.error";
import { ValidationEmailStatus } from "../validator.context";
import RuleContext from "./rule.context";

const EmailRule = ({ status, data , name}: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationEmailStatus.EMAIL;
  };

  const action = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
      console.log("email data is correct.....")
    }else{
      throw new ValidatationError(`Please entire valid ${name} `)
    }
  };

  return { condition, action };
};

export { EmailRule };
