"use client"
import React from 'react'
import Registrationform from './registrationform'
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  loginimg : {
   position:'absolute',
   top:'0px',
   left:'0px',
   zIndex:-1
  },
  registercard:{
    position:'relative',
    top:'16rem',
    left:'13rem',
    width:'50%'
  },
  logo:{
    position:'absolute',
   top:'6rem',
   left:'17rem',
  //  zIndex:1
  }
    
})
const Registration = () => {
    const classes = useStyles();

  return (
    <div>
        <img src='./images/login.png' alt='login ' className={classes.loginimg} style={{width:'100%'}}/>
        <div className={classes.registercard}>
        <Registrationform />  
        </div>
        <div>
          <img src="./images/comfortzone.png" alt="logo" className={classes.logo} />
        </div>
    </div>
  )
}

export default Registration