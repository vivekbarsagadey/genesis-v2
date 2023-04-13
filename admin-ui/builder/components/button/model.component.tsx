import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ButtonModelComponent = () => {
  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={6}>
            <Grid container>
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
                <Typography>90vh</Typography>
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

export default ButtonModelComponent;
