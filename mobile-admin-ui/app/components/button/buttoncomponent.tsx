import { Button } from '@mui/material'
import React from 'react'

interface buttonProps{
  label:string
}

const ButtonComponent = ({label}:buttonProps) => {
  return (
    <>
    <Button
    variant='contained'
    fullWidth
    >{label}</Button>
    </>
  )
}

export default ButtonComponent