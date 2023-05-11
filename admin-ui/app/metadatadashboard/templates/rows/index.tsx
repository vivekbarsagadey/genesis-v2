'use client';

import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

function CreateRowsComponent({ index, setColumn, column, row, setRow }: any) {
  const [colCount, setColCount] = useState('');
  const [ind] = useState(index + 1);

  const columnSet = [
    { id: 1, count: 1 },
    { id: 2, count: 2 },
    { id: 3, count: 3 },
    { id: 4, count: 4 },
  ];

  const createCell = (event) => {
    const selectedCol = event.target.value;
    setColCount(selectedCol);
    setRow([...row, index + 1]);
    
    setColumn([...column, selectedCol]);
  };
  // console.log('column :::', column);
  // console.log('row :::', row);

  return (
    <Box mt={0.6} mr={2}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* <Typography variant="h5">
            Row
            {index + 1}
          </Typography> */}
          <InputLabel htmlFor="name-multiple">{`Select column ${
            index + 1
          }`}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={colCount}
            onChange={createCell}
            fullWidth
          >
            {columnSet &&
              columnSet.map((col) => (
                <MenuItem key={col.id} value={col.count}>
                  {col.count}
                </MenuItem>
              ))}

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
