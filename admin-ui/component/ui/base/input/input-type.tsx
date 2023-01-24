import { InputEmailComponent } from "./email";
import { InputPasswordComponent } from "./password";
import InputProps from "./props";
import InputTextComponent from './text';

const InputComponent = (props: InputProps) => {
  if (props.type == "email") {
    return <InputEmailComponent {...props}></InputEmailComponent>;
  }
  else if (props.type == "password") {
    return <InputPasswordComponent {...props}/>
  }
 else{
   return <InputTextComponent {...props}/>
 }

 
};

export { InputComponent,InputPasswordComponent,InputTextComponent};
