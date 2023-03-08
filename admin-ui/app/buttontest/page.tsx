"use client"
import React,{useState} from 'react'
import { ButtonComponent } from '../../component/ui/base';


const ButtonTestComponent = () => {
  const[counter,setCounter] = useState(0)
  return (
    <>
       <ButtonComponent
        label="next"
        counter={counter}
        setCounter={setCounter}
      ></ButtonComponent>

       <ButtonComponent
        label="previous"
        counter={counter}
        setCounter={setCounter}
      ></ButtonComponent>

       <ButtonComponent
        label="save"
      ></ButtonComponent>
      
    </>
  )
}
const page = () => {
    return (
      <>
        <ButtonTestComponent></ButtonTestComponent>
      </>
    );
  };
  
  export default page;
  
