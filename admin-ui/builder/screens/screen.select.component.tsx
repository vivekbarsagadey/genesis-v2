import { Box, Grid } from "@material-ui/core";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Case, Switch } from "react-if";
import { ProjectContext } from "..";
import genisys from "../../data/genisys.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ScreenSelectComponent = ({ screenToggle, gridVal }) => {
  const value = React.useContext(ProjectContext);
  // console.log("gridVal >>", gridVal);

  return (
    <>
      <Switch>
        <Case condition={screenToggle === "screen1"}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={9}>
              <Box mt={2}>
                <Paper
                  variant="outlined"
                  style={{ height: "75vh", overflowY: "scroll" }}
                >
                  <Grid container spacing={1}>
                    {gridVal?.map((val, index) => {
                      return (
                        <Switch key={index}>
                          <Case condition={val === "grid_1x12"}>
                            <Grid item xs={12}>
                              <Item>xs=12</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_2x6"}>
                            <Grid item xs={6}>
                              <Item>xs=6</Item>
                            </Grid>
                            <Grid item xs={6}>
                              <Item>xs=6</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_3x4"}>
                            <Grid item xs={3}>
                              <Item>xs=3</Item>
                            </Grid>
                            <Grid item xs={3}>
                              <Item>xs=3</Item>
                            </Grid>
                            <Grid item xs={3}>
                              <Item>xs=3</Item>
                            </Grid>
                            <Grid item xs={3}>
                              <Item>xs=3</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_4x3"}>
                            <Grid item xs={4}>
                              <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={4}>
                              <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={4}>
                              <Item>xs=4</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_6x1"}>
                            <Grid item xs={6}>
                              <Item>xs=6x1</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_4x1"}>
                            <Grid item xs={4}>
                              <Item>xs=4x1</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_3x1"}>
                            <Grid item xs={3}>
                              <Item>xs=2x1</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_2x1"}>
                            <Grid item xs={2}>
                              <Item>xs=1x1</Item>
                            </Grid>
                          </Case>
                          <Case condition={val === "grid_1x1"}>
                            <Grid item xs={1}>
                              <Item>xs=1x1</Item>
                            </Grid>
                          </Case>
                        </Switch>
                      );
                    })}
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Case>

        {/* <Case condition={screenToggle === "screen2"}>
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
        </Case> */}
      </Switch>
    </>
  );
};

export default ScreenSelectComponent;
