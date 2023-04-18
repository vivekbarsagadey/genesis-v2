"use client"
import { Typography } from '@material-ui/core'
import React from 'react'
import {InputVariantOne,InputVariantTwo,InputVariantThree,InputVariantFour,InputVariantFive} from "."


const InputVariants = () => {
  return (
    <>
        <Typography style={{margin:'6px'}}>
        <InputVariantOne
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"
         
        />
        </Typography>
    
        <Typography style={{margin:'10px'}}>
        <InputVariantTwo
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
        </Typography>
        
        <Typography style={{margin:'10px'}}>
        <InputVariantThree
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
        </Typography>

         <Typography style={{margin:'10px'}}>
        <InputVariantFour
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
         </Typography>

         <Typography style={{margin:'10px'}}>
        <InputVariantFive
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"/>
         </Typography>
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