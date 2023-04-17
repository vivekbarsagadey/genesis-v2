import { Button, Card, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

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

const BuilderScreenSelectComponent = ({ handleClose }) => {
  const classes = useStyles();
  const [blankScreen, setBlankScreen] = useState("blank");
  const [loginScreen, setLoginScreen] = useState("login");
  const [profileScreen, setProfileScreen] = useState("profile");
  const [homePageScreen, setHomePageScreen] = useState("homePage");
  const [editProfileScreen, setEditProfileScreen] = useState("editProfile");
  const [signupScreen, setSignupScreen] = useState("signup");
  const [sideMenuScreen, setSideMenuScreen] = useState("sideMenu");
  const [settingScreen, setSettingScreen] = useState("setting");

  return (
    <div>
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
                  <Checkbox style={{ color: "white" }} size="small" value={blankScreen} />
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
                  <Checkbox style={{ color: "white" }} size="small" value={loginScreen}/>
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
                  <Checkbox style={{ color: "white" }} size="small" value={profileScreen}/>
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
                  <Checkbox style={{ color: "white" }} size="small" value={homePageScreen} />
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
                  <Checkbox style={{ color: "white" }} size="small" value={editProfileScreen}/>
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
                  <Checkbox style={{ color: "white" }} size="small" value={signupScreen}/>
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
                  <Checkbox style={{ color: "white" }} size="small" value={sideMenuScreen} />
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
                  <Checkbox style={{ color: "white" }} size="small" value={settingScreen}/>
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
                  <Button variant="contained" size="large">
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BuilderScreenSelectComponent;
