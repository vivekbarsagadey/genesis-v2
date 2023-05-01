import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function TextModelComponent({ metaData }) {
  const [width, setWidth] = useState<string>(metaData.width);
  const updateWidth = (e) => {
    setWidth(e.target.value);
  };
  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography fontWeight="600">width</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                    id="standard-basic"
                    variant="standard"
                    value={width}
                    onChange={updateWidth}
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
          style={{ marginTop: '22rem' }}
        >
          <Grid item xs={4}>
            <Button variant="contained" size="small">
              Reset
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
}

export default TextModelComponent;
