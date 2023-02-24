"use client";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
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
interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [alert, showAlert] = useState(false);
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (userInfo?.email === "faisal@gmail.com" && userInfo.password) {
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });

      if (!res.error) {
        router.push("/");
      }
    } else {
      showAlert(true);
    }
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    showAlert(false);
  };
  return (
    <>
      <Card className={classes.card_style}>
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <Typography fontSize={"1.5rem"} pb={1.5} fontWeight={"bold"}>
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography py={1} style={{ fontSize: "0.9rem" }}>
              {" "}
              Email
            </Typography>
            <TextField
              color="warning"
              size="small"
              fullWidth
              classes={{ root: classes.customTextField }}
              placeholder="User@Genesis.com"
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
              type="email"
            />
          </Grid>
          <Grid item xs={12} py={2}>
            <Typography py={1} style={{ fontSize: "0.9rem" }}>
              {" "}
              Password
            </Typography>
            <TextField
              color="warning"
              size="small"
              fullWidth
              classes={{ root: classes.customTextField }}
              placeholder="Enter Your Password"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
              type="password"
            />
          </Grid>
          <Grid item xs={12} my={2}>
            <Button
              type="submit"
              value="Login"
              variant="contained"
              className={classes.login_button}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} my={1}>
            <Link href={"/register"} style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                value="Login"
                variant="contained"
                className={classes.login_button}
              >
                New User? Register Account
              </Button>
            </Link>
          </Grid>
        </form>
      </Card>
    </>
  );
};

/* SignIn.getLayout = function getLayout(data: Data, component: ReactElement) {
  return (
      <div>
          {component}
      </div>
  )
} */

export default SignIn;
