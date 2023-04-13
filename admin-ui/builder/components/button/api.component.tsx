import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ButtonApiComponent = () => {
  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>url</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>https://www.google.com/</Typography>
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ButtonApiComponent;
