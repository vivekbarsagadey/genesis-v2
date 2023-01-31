"use client";
import React from "react";
import { InputEmailComponent } from "./email";
import { InputNumberComponent } from "./number";
import { InputPasswordComponent } from "./password";
import { InputTextComponent } from "./text";

import InputProps from "./props";

const InputComponent = (props: InputProps) => {
  if (props.type == "email") {
    return <InputEmailComponent {...props}/>
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

  return <></>
};

export { InputComponent };
