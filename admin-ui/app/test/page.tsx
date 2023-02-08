"use client";
import React, { useState } from "react";
import { useForm } from "../../hooks/from";
import {InputComponent}  from "../../component/ui/base/input/";
const TestComponent = () => {
  const { formState, register } = useForm();
  return (
    <>
      <InputComponent
            type="email"
            placeHolder="Enter email"
            label="Email"
            id="email"
          ></InputComponent>
      <InputComponent
            type="number"
            placeHolder="Enter number"
            label="Number"
            id="number"
          ></InputComponent>
    
      <InputComponent
            type="password"
            placeHolder="Enter Password"
            label="Password"
            id="password"
          ></InputComponent>

      <InputComponent
            type="text"
            placeHolder="Enter Text"
            label="Text"
            id="text"
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
