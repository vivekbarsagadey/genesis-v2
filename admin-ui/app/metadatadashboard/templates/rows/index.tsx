'use client';

import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

function CreateRowsComponent({
  index,
}: // setCellDb,
// cellDb,
// setRowDb,
// rowDb,
any) {
  const [colCount, setColCount] = useState('');
  const [ind] = useState(index + 1);

  const column = [
    { id: 1, count: 1 },
    { id: 2, count: 2 },
    { id: 3, count: 3 },
    { id: 4, count: 4 },
  ];

  const setCell = (value: string) => {
    setColCount(value);
  };

  return (
    <Box mt={0.6} mr={2}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5">
            Row
            {index + 1}
          </Typography>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={colCount}
            label={`Select column ${index + 1}`}
            onChange={setCell}
          >
            {column &&
              column.map((col) => {
                return (
                  <MenuItem key={col.id} value={col.count}>
                    {col.count}
                  </MenuItem>
                );
              })}

            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          {/* <Autocomplete
            key={index}
            value={colCount}
            onChange={setCell}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={column.map((option) => option.count)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`Select column ${index + 1}`}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateRowsComponent;
