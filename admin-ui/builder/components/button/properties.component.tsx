import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const ButtonPropertiesComponent = ({ metaData }) => {
  const [background, setBackground] = useState<string>(metaData.background);
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
                <Typography>{background}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  value={metaData.borderRadius}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>{metaData.height}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{metaData.overflowY}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{metaData.position}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{metaData.width}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ButtonPropertiesComponent;
