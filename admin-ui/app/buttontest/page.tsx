"use client"
import React,{useState} from 'react'
import { ButtonComponent } from '../../component/ui/base';

const dummydata = [
  { id: 1, content: "alpha" },
  { id: 2, content: "beta" },
  { id: 3, content: "gyama" },
  { id: 4, content: "delta" },
  { id: 5, content: "theta" },
];
const counterLength = dummydata.length;
const ButtonTestComponent = () => {
  const[counter,setCounter] = useState(0)
  const Urldata = {
    name:'abc',
    surname:'xyz'
  }
  return (
    <>
       <ButtonComponent
        label="next"
        counter={counter}
        setCounter={setCounter}
        counterLength={counterLength}
        dummydata={dummydata}
      ></ButtonComponent>

       <ButtonComponent
        label="previous"
        counter={counter}
        setCounter={setCounter}
      ></ButtonComponent>

       <ButtonComponent
        label="save"
        baseUrl = "https://jsonplaceholder.typicode.com/users"
        Urldata={Urldata}
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
  
