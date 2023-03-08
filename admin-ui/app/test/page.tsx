"use client";
import React from "react";
import { useForm } from "../../hooks/from";
import { InputComponent } from "../../component/ui/base/input/";
import { SearchComponent } from "../../component/ui/base";



const TestComponent = () => {
  
 
  const { register } = useForm();
  return (
    <>
      <InputComponent
        type="email"
        placeHolder="Enter email"
        label="Email"
        id="email"
        register={register}
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

      

      <SearchComponent
        placeHolder="Search"
        type="text"
       
      ></SearchComponent>
   

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
