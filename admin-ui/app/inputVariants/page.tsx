"use client"
import React from 'react'
import {InputVariantOne,InputVariantTwo,InputVariantThree,InputVariantFour,InputVariantFive} from "./"


const InputVariants = () => {
  return (
    <>
        <div style={{margin:'6px'}}>
        <InputVariantOne
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"
         
        />
        </div>
    
        <div style={{margin:'10px'}}>
        <InputVariantTwo
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
        </div>
        
        <div style={{margin:'10px'}}>
        <InputVariantThree
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
        </div>

         <div style={{margin:'10px'}}>
        <InputVariantFour
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
         </div>

         <div style={{margin:'10px'}}>
        <InputVariantFive
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
         </div>
    </>
  )
}
const page = () => {
  return (
    <>
    <InputVariants></InputVariants>
    </>
  );
};

export default page