import React, { useEffect } from "react";
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
    height: "120vh",
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
    left: "45%",
    margin: "-50px 0 0 -50px",
  },
});

const BuilderPageSelectComponent = ({ handleClose, getScreenDataSet }) => {
  const classes = useStyles();
  const [blankPage, setBlankPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [homePagePage, setHomePagePage] = useState(false);
  const [editProfilePage, setEditProfilePage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [sideMenuPage, setSideMenuPage] = useState(false);
  const [settingPage, setSettingPage] = useState(false);
  const [pages, setPages] = React.useState([]);

  const [count, setCount] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`);
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setPages(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const updatePage = (pageRecv: string) => {
    if (pageRecv === "blank") {
      setBlankPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "login") {
      setLoginPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "profile") {
      setProfilePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "homepage") {
      setHomePagePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "editprofile") {
      setEditProfilePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "signup") {
      setSignupPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "sidemenu") {
      setSideMenuPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "setting") {
      setSettingPage((s) => !s);
      setCount([...count, pageRecv]);
    }
  };
  const savePages = async () => {
    // getPageDataSet(count);
    handleClose();
  };

  console.log("pages>>>", pages);

  return (
    <>
      <Grid container>
        <Grid item xs={3} className={classes.background_genesis1}>
          <Grid container className={classes.genesislogo}>
            <Grid item xs={12} className={classes.genesislogo1}>
              <img src="./images/genesislogo.png" alt="image not found" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9} style={{ background: "#0f172a", height: "120vh" }}>
          <Grid container spacing={4} padding={3}>
            {pages?.map((page, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <Grid container display="flex" justifyContent="space-around">
                    <Grid item xs={9}>
                      <Typography variant="body2" color={"white"}>
                        {page.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Checkbox
                        onClick={() => updatePage(page.name)}
                        style={{ color: "white" }}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="260"
                          image={page.image}
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}

            {/* <Grid item xs={3}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={9}>
                  <Typography variant="body2" color={"white"}>
                    Login In
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    onClick={() => updatePage("login")}
                    style={{ color: "white" }}
                    size="small"
                    value={loginScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="260"
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
                    onClick={() => updatePage("profile")}
                    style={{ color: "white" }}
                    size="small"
                    value={profileScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="260"
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
                    onClick={() => updatePage("homepage")}
                    style={{ color: "white" }}
                    size="small"
                    value={homePageScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="260"
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
                    onClick={() => updatePage("editprofile")}
                    style={{ color: "white" }}
                    size="small"
                    value={editProfileScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="260"
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
                    onClick={() => updatePage("signup")}
                    style={{ color: "white" }}
                    size="small"
                    value={signupScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="260"
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
                    onClick={() => updatePage("sidemenu")}
                    style={{ color: "white" }}
                    size="small"
                    value={sideMenuScreen}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="image not found"
                      height="260"
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
                    onClick={() => updatePage("setting")}
                    style={{ color: "white" }}
                    size="small"
                    value={settingScreen}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="image not found"
                    height="260"
                    image="./images/Setting.png"
                  />
                </Card>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid item xs={12}>
            <Grid container display="flex" justifyContent={"flex-end"}>
              <Grid item xs={2}>
                <Button variant="contained" size="large" onClick={handleClose}>
                  Cancel
                </Button>
              </Grid>

              <Grid item xs={1} mr={1}>
                <Button variant="contained" size="large" onClick={savePages}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BuilderPageSelectComponent;
