import { InputStyle } from "../../../../../../styles/common/input";
import { ValidatationError } from "../../validatation.error";
import { ValidationEmailStatus } from "../validator.context";
import RuleContext from "./rule.context";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  }
 
});


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
