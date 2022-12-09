import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { InputBase } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEventHandler, useState } from "react"
import * as yup from "yup";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

const useStyles = makeStyles({
 
  textfield: {
    border: "2px groove",
    width: "100%",
    paddingLeft: "0.5rem",
    marginBottom: "0.4rem",
    borderRadius: "5px",
  },
  registerbutton: {
    textTransform: "capitalize !important",
    background: "#FFC107 !important",
  },
  errormessage: {
    margin: "0",
    color: "red",
    fontWeight: "lighter",
    fontSize: "15px",
  },
  register: {
    fontWeight: "bold",
    fontSize: "180%",
  },
});

const SignupSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Email is Required")
      .email("Enter Valid Email"),

    password: yup
      .string()
      .required("Password is Required  ")
      .min(8, "Password must be 8 characters"),
  })
  .required();

const LoginForm = ({signIn}) => {
 const classes = useStyles();

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <Card style={{ padding: "20px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <Typography className={classes.register} pb={3}>
                Login
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={12}>
                <Typography>Email</Typography>
                <InputBase
                  {...register("email")}
                  type="email"
                
                  className={classes.textfield}
                  placeholder="Email"
                     
                />
                {errors.email && (
                  <p className={classes.errormessage}>{errors.email.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography>Password</Typography>
                <InputBase
                  {...register("password")}
                  type="text"
                  placeholder=" Enter Your Password"
                  className={classes.textfield}
                    
                />
                {errors.password && (
                  <p className={classes.errormessage}>
                    {errors.password.message}
                  </p>
                )}
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={classes.registerbutton}
                >
                  LOGIN
                </Button>
              </Grid>
              <Grid item xs={12} textAlign='center'>
                      <Button
                        type="submit"
                        value="Login"
                      >
                        New User? Register Account
                      </Button>
                  </Grid>
            </Grid>
          </form>
        </Box>
      </Card>
    </div>
  );
};

export default LoginForm;
