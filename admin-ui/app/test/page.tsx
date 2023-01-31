"use client";
import React, { useState } from "react";
import { useForm } from "../../hooks/from";
import {InputComponent}  from "../../component/ui/base/input/";
import MailIcon from '@mui/icons-material/Mail';

const TestComponent = () => {
  const { formState, register } = useForm();
  return (
    <>
      <InputComponent
            type="email"
            placeHolder="Enter email"
            label="Email"
            id="email"
            icon={<MailIcon/>}
          ></InputComponent>
    </>
  );
};

const page = () => {
  return (
    <>
      <TestComponent></TestComponent>
    </>
  );
};

export default page;
