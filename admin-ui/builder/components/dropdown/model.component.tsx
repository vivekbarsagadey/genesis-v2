import React, { useState } from "react";
import { Box, Grid, Typography,Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const DropdownModelComponent = ({ metaData }) => {
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

export default DropdownModelComponent;
