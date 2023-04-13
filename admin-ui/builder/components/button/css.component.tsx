import React from "react";
import { Box, Grid, Typography } from "@mui/material";


const ButtonCssComponent = () => {
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
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>yellow css</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>40px</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>30vh</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>overflowY</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>absolute</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ButtonCssComponent;
