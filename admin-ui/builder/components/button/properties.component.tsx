import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const ButtonPropertiesComponent = ({ metaData }) => {
  const [background, setBackground] = useState<string>(metaData.background);
  const [borderRadius, setBorderRadius] = useState<string>(
    metaData.borderRadius
  );
  const [height, setHeight] = useState<string>(metaData.height);
  const [overflow, setOverflow] = useState<string>(metaData.overflowY);
  const [position, setPosition] = useState<string>(metaData.position);
  const [width, setWidth] = useState<string>(metaData.width);
  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>background</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={background}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>borderRadius</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={borderRadius}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>height</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={height}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>overflowY</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={overflow}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>position</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={position}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>width</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={width}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12}>
        <Grid
          container
          display="flex"
          justifyContent="flex-end"
          style={{ marginTop: "12.7rem" }}
        >
          <Grid item xs={4}>
            <Button variant="contained" size="small">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size="small">
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ButtonPropertiesComponent;
