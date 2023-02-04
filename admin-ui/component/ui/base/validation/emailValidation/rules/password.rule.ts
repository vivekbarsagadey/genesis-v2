import { InputStyle } from "../../../../../../styles/common/input";
import { ValidatationError } from "../../validatation.error";
import { ValidationStatus } from "../validator.context";
import {RuleContext} from "./rule.context";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  ...InputStyle,
  error: {
    ...InputStyle.error,
  }
 
});


const PasswordRule = ({ status, data , name}: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationStatus.PASSWORD;
  };

  const action = () => {
    if (data.length>8) {

    }else{
      throw new ValidatationError(`Minimum 8 Characters are Required`)
    }
  };

  return { condition, action };
};

export { PasswordRule };
