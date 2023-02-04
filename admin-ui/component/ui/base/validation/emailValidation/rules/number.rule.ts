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


const NumberRule = ({ status, data , name}: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationStatus.NUMBER;
  };

  const action = () => {
    if (data.length>9) {
    }else{
      throw new ValidatationError(`${name} Should be 10 digit `)
    }
  };

  return { condition, action };
};

export { NumberRule };
