"use client"
import { Button } from '@mui/material'
import React from 'react'
import { ButtonProps } from './props'

const NextButtonComponent = ({label,counter,setCounter}:ButtonProps) => {
    
    const nextHandler = () =>{
      setCounter(counter + 1)
    }
    console.log("next",counter)
  return (
    <>
        <Button onClick={nextHandler}>
            {label}
        </Button>

    </>
  )
}

export {NextButtonComponent}