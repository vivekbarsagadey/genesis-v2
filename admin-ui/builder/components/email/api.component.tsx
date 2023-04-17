import React, { useState } from "react";
import { Box, Grid, Typography,Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const EmailApiComponent = ({ metaData }) => {
  const [url, setUrl] = useState<string>(metaData.url);
  const updatedUrl = (e) => {
    setUrl(e.target.value);
  };
  console.log("urlurl>>>>", url);

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
                      onChange={updatedUrl}
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
          style={{ marginTop: "22rem" }}
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

export default EmailApiComponent;
