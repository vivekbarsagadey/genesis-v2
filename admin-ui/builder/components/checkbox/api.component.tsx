import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const CheckboxApiComponent = ({ metaData }) => {
  const [url, setUrl] = useState<string>(metaData.url);
  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={3}>
                    <Typography fontWeight={"600"}>Url</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={url}
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

export default CheckboxApiComponent;
