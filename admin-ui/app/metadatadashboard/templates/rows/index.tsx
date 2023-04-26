import { Autocomplete, Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import React from 'react';

const CreateRowsComponent = () => {
  const [rowCount, setRowCount] = useState([]);
  const [colCount, setColCount] = useState()

  // const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const column = [
    { id: 1, count: 1 },
    { id: 2, count: 2 },
    { id: 3, count: 3 },
    { id: 4, count: 4 },
    { id: 5, count: 5 },
    { id: 6, count: 6 },
    { id: 7, count: 7 },
    { id: 8, count: 8 },
    { id: 9, count: 9 },
    { id: 10, count: 10 },
    { id: 11, count: 11 },
    { id: 12, count: 12 },
  ]

  const setCol = (e: React.SyntheticEvent<Element, Event>, value: string) => {
    setColCount(value)
  }
  return (
    <Box mt={0.6} mr={2}>
      <Grid container>
        <Typography variant="h5" >
          Rows
        </Typography>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          style={{ width: '20%', height: '10%' }}
          disableClearable
          options={column.map((item) => item.count)}
          value={colCount}
          onChange={setCol}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Grid>
    </Box>
  );
};

export default CreateRowsComponent;