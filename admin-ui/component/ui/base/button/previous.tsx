import React from 'react'
import { Button } from '@mui/material'
import { ButtonProps } from './props'

const PreviousButtonComponent = ({label,counter,setCounter}:ButtonProps) => { 
    const previousHandler = () =>{
      if(counter>0)
      setCounter(counter-1)
    }
    console.log("previous",counter)
  return (
    <>
    <Button onClick={previousHandler}>
            {label}
        </Button>
    </>
  )
}

export {PreviousButtonComponent}