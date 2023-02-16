"use client";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import {
    Box,
    Grid,
    Card,
    Button,
    InputBase,
    Typography,
    Snackbar,
    TextField,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import Link from "next/link";
  import Alert from "@mui/material/Alert";

  
  const useStyles = makeStyles({
    login_button: {
      background: "#FFC107",
      width: "100%",
      color: "black",
      textTransform: "capitalize",
      "&:hover": {
        background: "#FFC107",
      },
    },
    background_style: {
      backgroundImage: `url(${"./images/loginbackground1.png"})`,
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      backgroundPosition: "center",
    },
    card_style: {
      padding: "1.5rem",
      width: "20rem",
      marginTop: "1rem",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "5px",
    },
    customTextField: {
      "& input::placeholder": {
        fontSize: "0.7rem",
      },
    },
  });

export default function RootLayout({ children, ...props}: {  children: React.ReactNode;}) {

    const classes = useStyles();

  return (
    <>
      <Grid container className={classes.background_style}>
        <Grid item style={{ position: "absolute", top: "5%" }} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item lg={6} sm={4} xs={4} md={5.6}></Grid>
                <Grid item xs={5}>
                  <img
                    src="./images/genesislogo.png"
                    alt="LoginImage"
                    style={{ height: "7vh" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} lg={4} sm={2} xs={0}></Grid>
            <Grid item px={2} md={8} lg={8} sm={10} xs={12}>
        
                {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </>
    
  );
}
