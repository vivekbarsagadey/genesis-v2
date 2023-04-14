import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Case, Switch } from "react-if";
import { Chip, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ScreenSelectComponent = ({ screenToggle }) => {
  return (
    <>
      <Switch>
        <Case condition={screenToggle === "screen1"}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box mt={2}>
                <Paper variant="outlined" style={{ height: "75vh" }}>
                  {/* grid layout  */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item>xs=12</Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item>xs=6</Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item>xs=6</Item>
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
                      <Grid item xs={3}>
                        <Item>xs=3</Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>xs=4</Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>xs=4</Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>xs=4</Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>xs=4x1</Item>
                      </Grid>
                     
                    </Grid>
                    <Grid item xs={2}>
                        <Item>xs=2x1</Item>
                      </Grid>
                    <Grid item xs={1}>
                        <Item>xs=1x1</Item>
                      </Grid>
                  </Box>
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
