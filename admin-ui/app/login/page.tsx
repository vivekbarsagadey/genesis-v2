"use client";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "../../hooks/from";
import { InputComponent } from "../../component/ui/base/input";

const useStyles = makeStyles({
  login_button: {
    background: "#FFC107",
    width: "100%",
    color: "white",
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
interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const classes = useStyles();

  const router = useRouter();
  const [errorState,setErrorState] = useState("fdgfgdh")
  const [childData,setChildData] = useState()
  // const handleCallBack = () =>{
  //   // setChildData()
  //   setErrorState()
  // }
  console.log(errorState);
  

  return (
    <>
      <Grid container className={classes.background_style}>
        <Grid item xs={12}>
          <InputComponent
            type="email"
            placeHolder="enter email"
            label="Email"
            id="email"
            getData={setErrorState}
          />
          <InputComponent
            type="password"
            placeHolder="enter password"
            label="Password"
            id="password"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
