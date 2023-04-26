import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import CompanyPieChart from './pie.chart';
import { ListComponentProps } from './props';
import RolePieChart from './pie.chart';

const options = {
  vAxis: { title: 'Customer Created' },
  hAxis: { title: 'Month' },
  seriesType: 'bars',
  series: { type: 'line' },
};
const comparisionType = [
  { title: 'Today' },
  { title: 'Last 7 days' },
  { title: 'Month' },
];
const RoleGraphView = ({ roles }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>('status');
  const [comparisiongraphView, setComparisionGraphView] =
    useState<string>('Month');
  const updateGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setGraphView(value);
  };

  let keys = Object.keys(roles[0]);
  const graphTypeVal = keys.filter((element) => {
    if (element === 'country' || element === 'state' || element === 'status') {
      return true;
    }
    return false;
  });
  const statusData = [
    ['Status', 'Users'],
    ['NEW', roles.filter((item) => item.status === 'NEW').length],
    ['ACTIVE', roles.filter((item) => item.status === 'ACTIVE').length],
    ['INACTIVE', roles.filter((item) => item.status === 'INACTIVE').length],
  ];

  const stateData = [
    ['roles', 'State'],
    ['Bihar', roles.filter((item) => item.state === 'Bihar').length],
    [
      'Madhya Pradesh',
      roles.filter((item) => item.state === 'Madhya Pradesh').length,
    ],
    ['UP', roles.filter((item) => item.state === 'UP').length],
    [
      'Maharastra',
      roles.filter((item) => item.state === 'Maharastra').length,
    ],
    ['Punjab', roles.filter((item) => item.state === 'Punjab').length],
    ['UK', roles.filter((item) => item.state === 'UK').length],
    ['Gujrat', roles.filter((item) => item.state === 'Gujrat').length],
    [
      'Karnataka',
      roles.filter((item) => item.state === 'Karnataka').length,
    ],
    [
      'Jammu & Kashmir',
      roles.filter((item) => item.state === 'Jammu & Kashmir').length,
    ],
  ];
  const countryData = [
    ['roles', 'Country'],
    ['India', roles.filter((item) => item.country === 'India').length],
    [
      'Australia',
      roles.filter((item) => item.country === 'Australia').length,
    ],
    ['America', roles.filter((item) => item.country === 'America').length],
    ['Spain', roles.filter((item) => item.country === 'Spain').length],
    ['US', roles.filter((item) => item.country === 'US').length],
    ['UK', roles.filter((item) => item.country === 'UK').length],
    ['Dubai', roles.filter((item) => item.country === 'Dubai').length],
    [
      'Srilanka',
      roles.filter((item) => item.country === 'Srilanka').length,
    ],
    [
      'Thailand',
      roles.filter((item) => item.country === 'Thailand').length,
    ],
  ];

  const createdDataData = [
    ['Month', 'Count'],
    [
      'JAN',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jan').length,
    ],
    [
      'FEB',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Feb').length,
    ],
    [
      'MAR',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Mar').length,
    ],
    [
      'APR',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Apr').length,
    ],
    [
      'MAY',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'May').length,
    ],
    [
      'JUN',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jun').length,
    ],
    [
      'JUL',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jul').length,
    ],
    [
      'AUG',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Aug').length,
    ],
    [
      'SEP',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Sep').length,
    ],
    [
      'OCT',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Oct').length,
    ],
    [
      'NOV',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Nov').length,
    ],
    [
      'DEC',
      roles
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Dec').length,
    ],
  ];

  const updateComparisionGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setComparisionGraphView(value);
  };
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
        <Grid item xs={2.3}></Grid>
        <Grid item xs={3.5}>
          <Stack>
            <Autocomplete
              freeSolo
              value={comparisiongraphView}
              onChange={updateComparisionGrpahView}
              id="free-solo-2-demo"
              disableClearable
              size="small"
              options={comparisionType.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  placeholder="Select Graph View"
                  fullWidth
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
                stateData={stateData}
                graphView={graphView}
                statusData={statusData}
                countryData={countryData}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={createdDataData}
            options={options}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default RoleGraphView;
