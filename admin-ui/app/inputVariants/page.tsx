"use client"
import React from 'react'
import { InputVariantFive } from './input.variantfive'
import { InputVariantFour } from './input.variantfour'
import { InputVariantOne } from './input.variantone'
import { InputVariantThree } from './input.variantthree'
import { InputVariantTwo } from './input.varianttwo'
import PersonIcon from '@mui/icons-material/Person';

const page = () => {
  return (
    <>
        <div style={{margin:'6px'}}>
        <InputVariantOne
         type="text"
         placeHolder="Enter text"
         label=" Text"
         id="text"
          // variant="outlined"
        />
        </div>
 
        <div style={{margin:'10px'}}>
        <InputVariantTwo
         type="text"
         placeHolder="Enter text"
         label=" Text"
         variant="standard"
         id="text"/>
        </div>
        
        <div style={{margin:'10px'}}>
        <InputVariantThree
         type="text"
         placeHolder="Enter text"
         label=" Text"
         variant="outlined"

         id="text"/>
        </div>

         <div style={{margin:'10px'}}>
        <InputVariantFour
         type="text"
         placeHolder="Enter text"
         label=" Text"
         variant="standard"
         id="text"/>
         </div>

         <div style={{margin:'10px'}}>
        <InputVariantFive
         type="text"
         placeHolder="Enter text"
         label=" Text"
         variant="standard"
         id="text"/>
         </div>
    </>
  )
}

export default page