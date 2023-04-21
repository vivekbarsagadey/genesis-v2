"use client";
import AssignmentIcon from '@mui/icons-material/Assignment';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const SignIn = ({}): JSX.Element => {
  const classes = useStyles();

  const router = useRouter();
  const [errorState,setErrorState] = useState(" ")
  
  return (
    <>
      <Grid container className={classes.background_style}>
        <Grid item xs={12}>
          <InputComponent
            type="email"
            placeHolder="Enter email"
            label="Email"
            id="email"
            // getData={setErrorState}
            icon={<MailIcon/>}
            
          />
          <InputComponent
            type="password"
            placeHolder="Enter password"
            label="Password"
            id="password"
            // getData={setErrorState}
            icon={<LockIcon/>} 
          />
          <InputComponent
            type="text"
            placeHolder="Enter Text"
            label="Text"
            id="text"
            // getData={setErrorState}
            icon={<AssignmentIcon/>}
          />
          <InputComponent
            type="number"
            placeHolder="Enter Number"
            label="Number"
            id="number"
            // getData={setErrorState}
            icon={<CallIcon/>}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
