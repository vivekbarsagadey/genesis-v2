import { Button, Card, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { createScreen } from "../../../services/screen.action";

const useStyles = makeStyles({
  background_genesis1: {
    backgroundImage: `url(${"./images/genesis1.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "134vh",
    backgroundPosition: "center",
    position: "relative",
  },
  genesislogo: {
    height: "300px",
    width: "290px",
    position: "relative",
  },
  genesislogo1: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-50px 0 0 -50px",
  },
});

const BuilderScreenSelectComponent = ({ handleClose, getScreenDataSet }) => {
  const classes = useStyles();
  const [blankScreen, setBlankScreen] = useState(false);
  const [loginScreen, setLoginScreen] = useState(false);
  const [profileScreen, setProfileScreen] = useState(false);
  const [homePageScreen, setHomePageScreen] = useState(false);
  const [editProfileScreen, setEditProfileScreen] = useState(false);
  const [signupScreen, setSignupScreen] = useState(false);
  const [sideMenuScreen, setSideMenuScreen] = useState(false);
  const [settingScreen, setSettingScreen] = useState(false);
  const [count, setCount] = useState([]);
  const updateScreen = (screenRecv: string) => {
    if (screenRecv === "blank") {
      setBlankScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "login") {
      setLoginScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "profile") {
      setProfileScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "homepage") {
      setHomePageScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "editprofile") {
      setEditProfileScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "signup") {
      setSignupScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "sidemenu") {
      setSideMenuScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
    if (screenRecv === "setting") {
      setSettingScreen((s) => !s);
      setCount([...count, screenRecv]);
    }
  };
  console.log("count >>", count);

  const saveScreens = async () => {
    // for (var i = 0; i < count.length; i++) {
    //   createScreen(count[i]);
    // }
    getScreenDataSet(count);
    handleClose();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={4} className={classes.background_genesis1}>
          <Grid container className={classes.genesislogo}>
            <Grid item xs={12} className={classes.genesislogo1}>
              <img src="./images/genesislogo.png" alt="image not found" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ background: "#0f172a", height: "134vh" }}>
          <Grid container spacing={4} padding={3}>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("blank")}
                    style={{ color: "white" }}
                    size="small"
                    value={blankScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia component="img" height="300" />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Login In
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("login")}
                    style={{ color: "white" }}
                    size="small"
                    value={loginScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Loginwithemail.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Profile
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("profile")}
                    style={{ color: "white" }}
                    size="small"
                    value={profileScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Profile.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Home Page
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("homepage")}
                    style={{ color: "white" }}
                    size="small"
                    value={homePageScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Home.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Edit Profile
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("editprofile")}
                    style={{ color: "white" }}
                    size="small"
                    value={editProfileScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Editprofile.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("signup")}
                    style={{ color: "white" }}
                    size="small"
                    value={signupScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Signin.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Side Menu
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("sidemenu")}
                    style={{ color: "white" }}
                    size="small"
                    value={sideMenuScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Sidemenu.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Setting
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updateScreen("setting")}
                    style={{ color: "white" }}
                    size="small"
                    value={settingScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="300"
                      image="./images/Setting.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container display="flex" justifyContent={"flex-end"}>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Grid>

                <Grid item xs={1} mr={1}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={saveScreens}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BuilderScreenSelectComponent;
