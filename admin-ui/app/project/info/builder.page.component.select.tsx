import React, { useEffect } from "react";
import { Button, Card, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { createPage } from "../../../services/screen.action";

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

const BuilderPageSelectComponent = ({ handleClose }) => {
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
    if (pageRecv === "Blank") {
      setBlankPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Login In") {
      setLoginPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Profile") {
      setProfilePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Home Page") {
      setHomePagePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Edit Profile") {
      setEditProfilePage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Sign Up") {
      setSignupPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Side Menu") {
      setSideMenuPage((s) => !s);
      setCount([...count, pageRecv]);
    }
    if (pageRecv === "Setting") {
      setSettingPage((s) => !s);
      setCount([...count, pageRecv]);
    }
  };
  const savePages = async () => {
    // post call to save json
    var jsonData = {
      name: "vijay-enterprise-apps",
      path: "E:/projects/genesis-v2/code/generated-client-project",
      version: "0.0.1-B-01",
      app: {
        type: "MOBILE",
        project: "customer",
        name: "astrocare",
        theme: "",
      },
      credential: {
        auth: {
          url: "http://10.0.0.10:5000/v3",
          application_credential_id: "6d141f23732b498e99db8186136c611b",
          application_credential_secret: "whiz",
        },
        api: {
          url: "http://10.0.0.10:5000/v3",
          version: "3",
        },
      },

      client: {
        name: "",
        email: "",
        phone: "",
      },
      pages: count,
      //  [
      //   {
      //     "name": "splash",
      //     "label": "Splash Screen",
      //     "title": "Agro",
      //     "type": "",
      //     "img": "",
      //     "pipeline": [],
      //     "template": {
      //       "type": "flat",
      //       "custome": ""
      //     },
      //     "components": [
      //       {
      //         "name": "splash",
      //         "type": "screen",
      //         "tpPosition": "m1",
      //         "fieldtype": "",
      //         "required": "true",
      //         "label": "Agro Pvt",
      //         "error": "",
      //         "ui": {
      //           "extra_small_devices": "12",
      //           "small_devices": "12",
      //           "medium_devices": "6",
      //           "large_devices": "4",
      //           "xlarge_devices": "3",
      //           "css": "",
      //           "clz": ""
      //         },
      //         "componentId": "buttons",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "emails",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "passwords",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "cnfrmpasswords",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "numbers",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "checkboxes",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "dropdowns",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       },
      //       {
      //         "componentId": "text",
      //         "property": {
      //           "background": "",
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "position": "",
      //           "width": ""
      //         },
      //         "css": {
      //           "borderRadius": "",
      //           "height": "",
      //           "overflowY": "",
      //           "width": ""
      //         },
      //         "model": {
      //           "width": ""
      //         },
      //         "api": {
      //           "url": ""
      //         }
      //       }
      //     ]
      //   }
      // ]
    };

    createPage(jsonData);

    handleClose();
  };

  // console.log("count >>>", count);

  // console.log("pages>>>", pages);

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
