import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Case, Switch } from "react-if";
import { Chip, Paper, Stack } from "@mui/material";

const ScreenSelectComponent = ({ screenToggle }) => {
  return (
    <>
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
    </>
  );
};

export default ScreenSelectComponent;
