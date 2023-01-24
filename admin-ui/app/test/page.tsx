"use client";
import React, { useState } from "react";
import { useForm } from "../../hooks/from";
import {InputComponent}  from "../../component/ui/base/input/";

const TestComponent = () => {
  const { formState, register } = useForm();
  return (
    <>
      {/* <InputComponent
        type="email"
        label="User Email"
        id="emaasdasdil"
        register={register}
      ></InputComponent> */}
      Emai details {formState("email")?.value}
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
