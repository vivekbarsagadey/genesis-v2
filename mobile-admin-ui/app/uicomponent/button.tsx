import { Button } from '@mui/material'
import React from 'react'
// import type { NextApiRequest from 'next'};

interface ButtonProps{
    name:string,
    className:any,
    type:any,
    onClick:any
   
}

const ButtonComponent = ({name,className,type,onClick}:ButtonProps) => {
  return (
    <div>
        <Button variant="contained" className={className} type={type} onClick={onClick} fullWidth>
            {name}</Button>
    </div>
  )
}

export default ButtonComponent