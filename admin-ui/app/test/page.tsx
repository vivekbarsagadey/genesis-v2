"use client";
import { InputComponent } from "../../component/ui/base/input/";
import { useForm } from "../../hooks";


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
        maxLength={10}
        register={register}
      ></InputComponent>

      <InputComponent
        type="password"
        placeHolder="Enter Password"
        label="Password"
        id="password"
        register={register}
      ></InputComponent>

      <InputComponent
        type="text"
        placeHolder="Enter Text"
        label="Text"
        id="text"
        register={register}
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
