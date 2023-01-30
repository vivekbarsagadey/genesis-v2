import { InputEmailComponent } from "./email";
import { InputNumberComponent } from "./number";
import { InputPasswordComponent } from "./password";
import InputProps from "./props";
import {InputTextComponent} from './text';

const InputComponent = (props: InputProps) => {
  if (props.type == "email") {
    return <InputEmailComponent {...props}></InputEmailComponent>;
  }
 if (props.type == "password") {
    return <InputPasswordComponent {...props}></InputPasswordComponent>
  }
 if(props.type == "text"){
   return <InputTextComponent {...props}></InputTextComponent>
 }
 if(props.type == "number"){
   return <InputNumberComponent {...props}></InputNumberComponent>
 }


 
};

export { InputComponent};
