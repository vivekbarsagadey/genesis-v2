'use client'
import { IconButton, Tooltip } from '@mui/material';
import React from 'react'
import IUser from '../user.model';
import PrintIcon from '@mui/icons-material/Print';


interface UserExportComponentProps {
    user: Array<IUser>;
}   

const PrintComponent = ({user}:UserExportComponentProps) => {
   
   
  return (
    <>
        <Tooltip title='Print'>
        <IconButton  onClick={() => window.print()}   >
        <PrintIcon fontSize='small'/>
        </IconButton>
        </Tooltip>
        
    </>
  )
}

export default PrintComponent