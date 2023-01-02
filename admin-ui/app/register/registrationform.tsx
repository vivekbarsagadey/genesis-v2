import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Grid, InputBase, Typography, IconButton, Card} from "@mui/material";
import { makeStyles } from "@mui/styles";
 import VisibilityIcon from "@mui/icons-material/Visibility";
 import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";


const useStyles = makeStyles({
  textfield: {
    border: "2px groove",
    width: "100%",
    paddingLeft: "0.5rem",
    marginBottom: "0.4rem",
    borderRadius: "5px"
  },
  registerbutton: {
    textTransform: "capitalize !important",
    background: "#FFC107 !important"
  },
  errormessage: {
    margin: "0",
    color: "red",
    fontWeight: "lighter",
    fontSize: "15px"
  },
  register:{
    fontWeight:'bold',
    fontSize:'180%'
  }
});

const SignupSchema = yup
  .object().shape({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .required("Email is Required")
      .email("Enter Valid Email"),
    phone: yup.string()
    .required("Mobile Number is Required")
    .min(10, "Enter 10-digit Mobile Number")
    .max(10, "Enter Number that's 10 or Less"),
    password: yup.string()
      .required("Password is Required  ")
      .min(8,'Password must be 8 characters'),
    confirmpassword: yup.string()
      .required("Password is Required ")
      .oneOf([yup.ref('password'),'Password Does Not Match'])
  })
  .required();

const Registrationform = () => {
  const classes = useStyles();
   const[showPassword,setShowPassword]= useState("")
   const[showCfrmPassword,setShowCfrmPassword] =useState("")
   const[isPassword,setIsPassword]= useState(true)
   const[isCfrmPassword,setIsCfrmPassword] = useState('')

   const openPassword = (e) =>{
       setShowPassword(e.target.value)
   }
   
   const showIsPassword = () =>{
    setIsPassword(!isPassword)
   }

   const openCfrmPassword = (e) =>{
       setShowCfrmPassword(e.target.value)
   }
  
    const showIsCfrmPassword =()=>{
         setIsCfrmPassword(!isCfrmPassword)
    }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
    <div style={{width:'60%'}} >
      <Card style={{padding:'20px'}}>
        <Box sx={{ flexGrow: 1 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <Typography className={classes.register} pb={3}>Register</Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={12}>
                <Typography> User Name</Typography>
                <InputBase
                  {...register("name")}
                  type="text"
                  placeholder="User Name"
                  className={classes.textfield}
                />
                {errors.name && (
                  <p className={classes.errormessage}>{errors.name.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography>Email</Typography>
                <InputBase
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  className={classes.textfield}
                />
                {errors.email && (
                  <p className={classes.errormessage}>{errors.email.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography>Phone</Typography>
                <InputBase
                  {...register("phone")}
                  type="text"
                  placeholder="Phone"
                  className={classes.textfield}
                />
                {errors.phone && (
                  <p className={classes.errormessage}>{errors.phone.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography noWrap >Password</Typography>
                    <InputBase
                      {...register("password")}
                      type={isPassword ? 'password': 'text'}
                      placeholder="Password"
                      className={classes.textfield}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={showIsPassword}>
                            {isPassword?
                            <VisibilityIcon />
                            :
                            <VisibilityOffIcon/>
                            }
                          </IconButton>
                        </InputAdornment>
                      }
                      onChange={openPassword}
                      value={showPassword}
                    
                    />
                    {errors.password && (
                      <p className={classes.errormessage}>
                        {errors.password.message}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <Typography noWrap>Confirm Password</Typography>
                    <InputBase
                      {...register("confirmpassword")}
                      type={isCfrmPassword?"password":"text"}
                      placeholder="Confirm Password"
                      className={classes.textfield}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={showIsCfrmPassword}>
                            {isCfrmPassword?
                            <VisibilityOffIcon/>
                            :
                            <VisibilityIcon />
                            }
                          </IconButton>
                        </InputAdornment>
                       
                      }
                      onChange={openCfrmPassword}
                      value={showCfrmPassword}
                    />
                    {errors.confirmpassword && (
                      <p className={classes.errormessage}>
                        {errors.confirmpassword.message}
                      </p>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                      <Checkbox />
                    </Grid>
                    <Grid item xs={10.5}>
                      <Typography pt={1}>
                        I accept the terms and privacy policy{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={classes.registerbutton}
                >
                  register account
                </Button>
              </Grid>
              <Grid item xs={12} >
                <Typography>Already Registered ? <Link href={'/'} > <span>Sign in</span> </Link></Typography>
              </Grid>
            </Grid>
          </form>
        
        </Box>
      </Card>
    </div>
    </>
  );
}
export default Registrationform 