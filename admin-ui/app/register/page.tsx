"use client"
import React from 'react'
import Registrationform from './registrationform'
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  loginimg : {
   position:'absolute',
   top:'0px',
   left:'0px',
   zIndex:-1,
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   height: "100vh",
   backgroundPosition: "center",
  },
  registercard:{
    position:'relative',
    top:'5rem',
    left:'11rem',
    width:'45%',
    
  },
  logo:{
    position:'absolute',
   top:'1.2rem',
   left:'16.5rem',
   width:'10%',
   height:'7vh'
  //  zIndex:1
  }
    
})
const Registration = () => {
    const classes = useStyles();

  return (
    <div>
        <img src='./images/loginbackground1.png' alt='login ' className={classes.loginimg} style={{width:'100%'}}/>
        <div className={classes.registercard}>
        <Registrationform />  
        </div>
        <div>
          <img src="./images/genesislogo.png" alt="logo" className={classes.logo} />
        </div>
    </div>
  )
}

export default Registration