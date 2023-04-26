'use client';
import { Box, Button, Grid, Typography } from '@mui/material';
import RowsPage from '../rows/page';
import React, { useState } from 'react';
import CreateRowsComponent from '../rows';

const CreateTemplate = () => {
  const [rowCount, setRowCount] = useState([]);

  const createRowHandler = (recv: string) => {
    setRowCount([...rowCount, recv]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} display={'flex'}>
          <Typography variant="h5" noWrap>
            Create Row
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => createRowHandler('data')}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={12}>
          {rowCount?.map((data, index) => {
            return <CreateRowsComponent index={index} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateTemplate;
