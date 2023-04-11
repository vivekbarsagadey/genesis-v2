"use client";
import { Grid } from "@material-ui/core";
import { Chip, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Case, Switch } from "react-if";
import { ProjectContext } from "../app/project/info";
import Logo from "../component/common/Sidebar/logo";
import BuilderHeaderComponent from "./header/header";
import BuilderSidebarComponent from "./menu/sidebar/builder.sidebar.component";
import Properties from "./screens/properties";
const BuilderHome = () => {
  const value = React.useContext(ProjectContext); // id value is inside value for fetch call
  const [show, setShow] = useState(true);
  const [screenToggle, setScreenToggle] = useState<string>("");
  const handleMenu = () => {
    setShow(!show);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const updateScreen = (typeRec: string) => {
    setScreenToggle(typeRec);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={2}>
          <Logo handleMenu={handleMenu} show={show} />
          <BuilderSidebarComponent show={show} />
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12}>
            <BuilderHeaderComponent />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={12} style={{ display: "flex" }}>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Screen 1"
                    variant="outlined"
                    onClick={() => updateScreen("screen1")}
                    onDelete={handleDelete}
                  />
                  <Chip
                    label="Screen 2"
                    variant="outlined"
                    onClick={() => updateScreen("screen2")}
                    onDelete={handleDelete}
                  />
                </Stack>
              </Grid>

              <Grid
                item
                xs={9}
                style={{ background: "#e2e8f0", height: "85vh" }}
              >
                <Switch>
                  <Case condition={screenToggle === "screen1"}>
                    <Grid container>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={6}>
                        <Box mt={2}>
                          <Paper variant="outlined">Screen 1</Paper>
                        </Box>
                      </Grid>
                    </Grid>
                  </Case>

                  <Case condition={screenToggle === "screen2"}>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                          <Box mt={2}>
                            <Paper variant="outlined">Screen 2</Paper>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Case>
                </Switch>
              </Grid>
              <Grid item xs={3}>
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
