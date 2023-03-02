"use client";
import React from 'react'
import { Button } from '@mui/material'
import {InputProps} from '../input/props'


const ButtonComponent = ({label, onClick}:InputProps) => {
  return (
    <div>
        <Button
        variant="contained"
        onClick={onClick}
    >{label}</Button>
    </div>
  )
}

export {ButtonComponent}