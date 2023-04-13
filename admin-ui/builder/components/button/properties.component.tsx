import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ButtonPropertiesComponent = () => {
  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>background</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>borderRadius</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>height</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>overflowY</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>position</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>width</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>red</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>20px</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>80vh</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>overflowY</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>absolute</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>80%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ButtonPropertiesComponent;
