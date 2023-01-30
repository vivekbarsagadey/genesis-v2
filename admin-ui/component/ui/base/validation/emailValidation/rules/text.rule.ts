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


const TextRule = ({ status, data , name}: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationEmailStatus.TEXT;
  };

  const action = () => {
    if (data.trim().length !== " ") {
      console.log("password data is correct.....")
    }else{
      throw new ValidatationError(`White Space is not allowed`)
    }
  };

  return { condition, action };
};

export { TextRule };
