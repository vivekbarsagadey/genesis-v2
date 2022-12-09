


'use client'
import React from "react";
// import { NextPage } from "next";
// import { signIn } from "next-auth/react";
import LoginForm from "./loginform";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  loginimg : {
   position:'absolute',
   top:'0px',
   left:'0px',
   zIndex:-1
  },
  logincard:{
    position:'relative',
    top:'14rem',
    left:'10rem',
    width:'35%',
    height:'30vh'
  },
  
})
// const SignIn: NextPage = (props): JSX.Element => {
  const LoginComponent = () =>{
  const classes = useStyles();
  
  
  
  return (
    <div>
      <img src='./images/loginbackground1.png' alt='login ' className={classes.loginimg} style={{width:'100%'}}/>
        <div className={classes.logincard}>
        <LoginForm/>  
        </div>
       
    </div>
  
  );
};

export default LoginComponent;


