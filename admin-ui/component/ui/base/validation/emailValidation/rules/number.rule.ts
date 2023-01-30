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


const NumberRule = ({ status, data , name}: RuleContext) => {
  
  const condition = (): boolean => {
    return status === ValidationEmailStatus.NUMBER;
  };

  const action = () => {
    if (data.length>10) {
      console.log("email data is correct.....")
    }else{
      throw new ValidatationError(`${name} Should be 10 digit `)
    }
  };

  return { condition, action };
};

export { NumberRule };
