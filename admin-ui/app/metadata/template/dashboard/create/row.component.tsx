'use client';

import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function CreateRowsComponent({ index, setCellDb, cellDb, setRowDb, rowDb }: any) {

  const [colCount, setColCount] = useState('');

  const [ind] = useState(index + 1);
  const column = [
    { id: 1, count: '1' },
    { id: 2, count: '2' },
    { id: 3, count: '3' },
    { id: 4, count: '4' },
    // { id: 5, count: '5' },
    // { id: 6, count: '6' },
    // { id: 7, count: '7' },
    // { id: 8, count: '8' },
    // { id: 9, count: '9' },
    // { id: 10, count: '10' },
    // { id: 11, count: '11' },
    // { id: 12, count: '12' },
  ];

  const setCell = (e: React.SyntheticEvent<Element, Event>, value: string) => {
    setColCount(value);
    setCellDb([...colCount, value])
  };

  return (
    <Box mt={0.6} mr={2}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5">
            Row
            {index + 1}
          </Typography>
          <Autocomplete
            value={colCount}
            onChange={setCell}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={column.map((option) => option.count)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select column"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateRowsComponent;
