import React from 'react'
import { Button } from '@mui/material'

interface buttonProps{
    label:string
  }
const ButtonComponent = ({label}:buttonProps) => {
  return (
    <div>
        <Button
    type='submit'
    variant='contained'
    fullWidth
    >{label}</Button>
    </div>
  )
}

export {ButtonComponent}