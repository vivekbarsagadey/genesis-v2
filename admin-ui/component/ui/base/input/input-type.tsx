"use client";
import {
  InputEmailComponent,
  InputNumberComponent,
  InputPasswordComponent,
  InputProps,
  InputTextComponent
} from "./";


const InputComponent = (props: InputProps) => {
  if (props.type == "email") {
    return <InputEmailComponent {...props} />;
  }
  if (props.type == "password") {
    return <InputPasswordComponent {...props}></InputPasswordComponent>;
  }
  if (props.type == "text") {
    return <InputTextComponent {...props}></InputTextComponent>;
  }
  if (props.type == "number") {
    return <InputNumberComponent {...props}></InputNumberComponent>;
  }

  return <></>;
};

export { InputComponent };

