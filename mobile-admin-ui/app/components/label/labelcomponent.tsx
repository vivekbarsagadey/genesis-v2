import { Typography } from '@material-ui/core'
import React from 'react'

interface labelProps{
  labelText:string
 
}

const LabelComponent = ({labelText}:labelProps) => {
  return (
    <>
    <span >{labelText}</span>
    
    
    </>
  )
}

export default LabelComponent