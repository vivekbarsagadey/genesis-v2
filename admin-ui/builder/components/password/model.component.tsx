import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const PasswordModelComponent = ({ metaData }) => {
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
    </>
  );
};

export default PasswordModelComponent;
