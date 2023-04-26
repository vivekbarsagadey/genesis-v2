'use client';
import { Box, Button, Grid, Typography } from '@mui/material';
import RowsPage from '../rows/page';
import React, { useState } from 'react';

const CreateTemplate = () => {


  return (
    <Box mt={0.6} mr={2}>
      <Grid container>
        <Typography variant="h5" noWrap>
          Create Rows
          <Button variant="contained" size="small" onClick={() => handleFunction()}>
            <span>+</span>
          </Button>
        </Typography>
      </Grid>
    </Box>
  );
};

export default CreateTemplate;