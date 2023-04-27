import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import RolePieChart from './pie.chart';
import { ListComponentProps } from './props';

const RoleGraphView = ({ roles }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>('status');
  const updateGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setGraphView(value);
  };

  let keys = Object.keys(roles[0]);
  const graphTypeVal = keys.filter((element) => {
    if (element === 'status' || element === 'state' || element === 'status') {
      return true;
    }
    return false;
  });
  const statusData = [
    ['Status', 'Roles'],
    ['NEW', roles.filter((item) => item.status === 'NEW').length],
    ['ACTIVE', roles.filter((item) => item.status === 'ACTIVE').length],
    ['INACTIVE', roles.filter((item) => item.status === 'INACTIVE').length],
  ];

  return (
    <Box mr={2}>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Stack>
            <Autocomplete
              value={graphView}
              onChange={updateGrpahView}
              freeSolo
              id="customer-select-type"
              disableClearable
              size="small"
              options={graphTypeVal?.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                  placeholder="Select Graph View"
                />
              )}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={9}>
              <RolePieChart
                graphView={graphView}
                statusData={statusData}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoleGraphView;
