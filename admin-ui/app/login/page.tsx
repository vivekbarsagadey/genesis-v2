"use client";
import {
  Button,
  Card,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { LoginStyle as style } from "./login.style";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [alert, showAlert] = useState(false);
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
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
      <Grid container style={style.background_style}>
        <Grid item style={style.grid} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item lg={5.84} sm={4} xs={2.5} md={5.6}></Grid>
                <Grid item xs={5}>
                  <img
                    src="./images/genesisloginlogo.png"
                    alt="LoginImage"
                    style={{ height: "9vh" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} lg={4} sm={2} xs={0}></Grid>
            <Grid item px={2} md={8} lg={8} sm={10} xs={12}>
              <Card style={style.card_style}>
                <form onSubmit={handleSubmit}>
                  <Grid item xs={12}>
                    <Typography
                      fontSize={"1.5rem"}
                      pb={1.5}
                      fontWeight={"bold"}
                    >
                      Login
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography py={1} style={{ fontSize: "0.9rem" }}>
                      {" "}
                      User Name or Email Address*{" "}
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
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
                      size="small"
                      fullWidth
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
                      style={style.login_button}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <Button
                      type="submit"
                      value="Login"
                      variant="contained"
                      style={style.login_button}
                    >
                      New User? Register Account
                    </Button>
                  </Grid>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          <Typography style={{ fontWeight: "bold", fontSize: "0.8rem" }}>
            Invalid username and password !
          </Typography>
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignIn;
