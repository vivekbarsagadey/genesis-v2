"use client";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { InputPasswordComponent, InputTextComponent } from "../../components/input";
import ButtonComponent from "../../components/button/ButtonComponent";
import type { NextApiRequest} from 'next';
import { Typography } from "@mui/material";
import Link from "next/link";


const useStyles = makeStyles({
  card_style: {
    position: "relative",
    left: "10rem",
    top: "10rem",
  },
  button_style: {
    background: "#FFC107 !important",
    textTransform: "capitalize !important",
  },
  error_style: {
    color: "#990000",
    margin: "0px",
    fontWeight: "bold",
    fontSize: "15px",
  },
  label_style:{
    fontSize:'1.8rem',
    fontWeight:'bold',
    textTransform:'capitalize'
   },
  input_label:{
    fontSize:'18px',
    textTransform:'capitalize'

  } 
  
});

const page = () => {
   const classes = useStyles();

  

  return (
    <>
      <Grid container>
                <Grid item xs={3.5}>
                    <Card>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputTextComponent lable="User Name" type='text' placeholder='abc@gmail.com'isRequired={ true} />
                </Grid>
                <Grid item xs={12}>
                   <InputPasswordComponent lable="Password" type='password' placeholder='password' isRequired={true}/>
                    
                </Grid>
                <Grid item xs={12}>
                    <ButtonComponent label='Login'/>                   
                </Grid>
                <Grid item xs={12} display='flex'>
                   <Typography>No Account</Typography>    
                   <Link href="/auth/registration">        
                   <Typography>Sign-in</Typography> 
                   </Link>           
                </Grid>
                <Grid item xs={12} display='flex'>
                   <Typography>Forgot Password</Typography>            
                </Grid>
                </Grid>
                </Card>
            </Grid>
            </Grid> 
    </>
  );
};

export default page;
