"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ProjectContext } from "../app/project/info";
import Logo from "../component/common/Sidebar/logo";
import genisys from "../data/genisys.json";
import BuilderHeaderComponent from "./header/header";
import BuilderSidebarComponent from "./menu/sidebar/builder.sidebar.component";
import ScreenHeader from "./screens/screen.header";
import MainPageComponent from "./screens/main.page";
import Properties from "./screens/properties";
import { Grid, Typography } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { Case, Switch } from "react-if";
const BuilderHome = () => {
  const value = React.useContext(ProjectContext); // id value is inside value for fetch call 
  const [show, setShow] = useState(true);
  const [screenToggle, setScreenToggle] = useState<string>("");
  const handleMenu = () => {
    setShow(!show);
  };

  const updateScreen = (typeRec: string) => {
    setScreenToggle(typeRec);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={2} >
          <Logo handleMenu={handleMenu} show={show} />
          <BuilderSidebarComponent show={show} />
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12}>
            <BuilderHeaderComponent />
          </Grid>
          <Grid item xs={12}  ml={1} >
            <Grid container spacing={0}  >
              <Grid item xs={12} style={{ display: "flex" }}>
                <Typography
                  variant="subtitle2"
                  onClick={() => updateScreen("screen1")}
                >
                  Screen 1{" "}
                </Typography>
                <CloseIcon fontSize="small" />
                <Typography
                  variant="subtitle2"
                  onClick={() => updateScreen("screen2")}
                >
                  Screen 2{" "}
                </Typography>
                <CloseIcon fontSize="small" />
              </Grid>

              <Grid item xs={8} style={{  background:'grey', height:'80vh' }}>
                  <Switch>
                    <Case condition={screenToggle === "screen1"}>
                      <Grid item xs={12}   style={{ background:'white' , marginTop:'1rem'}}   >
                        <Typography>1 data</Typography>
                      </Grid>
                    </Case>

                    <Case condition={screenToggle === "screen2"}>
                      <Grid item xs={12}>
                        <Typography>2 Data</Typography>
                      </Grid>
                    </Case>
                  </Switch>
                
              </Grid>
              <Grid item xs={4}>
                <Properties />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuilderHome;
