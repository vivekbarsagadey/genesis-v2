import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import UserPieChart from './pie.chart';

const options = {
  vAxis: { title: 'User Created' },
  hAxis: { title: 'Month' },
  seriesType: 'bars',
  series: { type: 'line' },
};
const comparisonGraphDataVal = [
  { id: 1, label: 'Active' },
  { id: 2, label: 'Inactive' },
  { id: 3, label: 'Male' },
  { id: 4, label: 'Female' },
];
const comparisionType = [
  { title: 'Today' },
  { title: 'Last 7 days' },
  { title: 'Month' },
];
function UserGraphView({ user, myRef }: any) {
  const [graphView, setGraphView] = useState<string>('status');
  const [graphBase, setGrpahBase] = useState<string>('');
  const [graph1, setGrpah1] = useState<string>('');
  const [graph2, setGraph2] = useState<string>('');
  const keys = Object.keys(user[0]);
  const graphTypeVal = keys.filter((element) => {
    if (
      element === 'country'
      || element === 'state'
      || element === 'city'
      || element === 'status'
    ) {
      return true;
    }
    return false;
  });
  const graphTypeBaseVal = keys.filter((element) => {
    if (
      element === 'country'
      || element === 'state'
      || element === 'city'
      || element === 'status'
      || element === 'gender'
    ) {
      return true;
    }
    return false;
  });
  const updateGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGraphView(value);
  };
  const statusData = [
    ['Status', 'user'],
    ['ACTIVE', user.filter((item:any) => item.status === 'ACTIVE').length],
    ['INACTIVE', user.filter((item:any) => item.status === 'INACTIVE').length],
  ];
  const stateData = [
    ['user', 'State'],
    ['Bihar', user.filter((item:any) => item.state === 'Bihar').length],
    [
      'Madhya Pradesh',
      user.filter((item:any) => item.state === 'Madhya Pradesh').length,
    ],
    ['UP', user.filter((item:any) => item.state === 'UP').length],
    ['Maharastra', user.filter((item:any) => item.state === 'Maharastra').length],
    ['Punjab', user.filter((item:any) => item.state === 'Punjab').length],
    ['UK', user.filter((item:any) => item.state === 'UK').length],
    ['Gujrat', user.filter((item:any) => item.state === 'Gujrat').length],
    ['Karnataka', user.filter((item:any) => item.state === 'Karnataka').length],
    [
      'Jammu & Kashmir',
      user.filter((item:any) => item.state === 'Jammu & Kashmir').length,
    ],
  ];
  const countryData = [
    ['user', 'Country'],
    ['India', user.filter((item:any) => item.country === 'India').length],
    ['Australia', user.filter((item:any) => item.country === 'Australia').length],
    ['America', user.filter((item:any) => item.country === 'America').length],
    ['Spain', user.filter((item:any) => item.country === 'Spain').length],
    ['US', user.filter((item:any) => item.country === 'US').length],
    ['UK', user.filter((item:any) => item.country === 'UK').length],
    ['Dubai', user.filter((item:any) => item.country === 'Dubai').length],
    ['Srilanka', user.filter((item:any) => item.country === 'Srilanka').length],
    ['Thailand', user.filter((item:any) => item.country === 'Thailand').length],
  ];
  const cityData = [
    ['user', 'City'],
    ['Patna', user.filter((item:any) => item.city === 'Patna').length],
    ['Mumbai', user.filter((item:any) => item.city === 'Mumbai').length],
    ['Pune', user.filter((item:any) => item.city === 'Pune').length],
    ['Banglore', user.filter((item:any) => item.city === 'Banglore').length],
    ['Ahmedabad', user.filter((item:any) => item.city === 'Ahmedabad').length],
    ['Kolkata', user.filter((item:any) => item.city === 'Kolkata').length],
    ['Rajasthan', user.filter((item:any) => item.city === 'Rajasthan').length],
    ['Hyderabad', user.filter((item:any) => item.city === 'Hyderabad').length],
    ['Lucknow', user.filter((item:any) => item.city === 'Lucknow').length],
  ];
  const createdDataData = [
    ['Month', 'Count'],
    [
      'JAN',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Jan').length,
    ],
    [
      'FEB',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Feb').length,
    ],
    [
      'MAR',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Mar').length,
    ],
    [
      'APR',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Apr').length,
    ],
    [
      'MAY',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'May').length,
    ],
    [
      'JUN',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Jun').length,
    ],
    [
      'JUL',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Jul').length,
    ],
    [
      'AUG',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Aug').length,
    ],
    [
      'SEP',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Sep').length,
    ],
    [
      'OCT',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Oct').length,
    ],
    [
      'NOV',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Nov').length,
    ],
    [
      'DEC',
      user
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:string) => d === 'Dec').length,
    ],
  ];
  // Base Value
  const updateGraphBase = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGrpahBase(value);
  };
  // First graph value
  const updateFirstGraph = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGrpah1(value);
  };
  const updateSecondGraph = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGraph2(value);
  };
  const CompariosnCountryData = [
    ['Country', 'ACTIVE', 'INACTIVE'],
    [
      'India',
      user
        .filter((ele:any) => ele.country === 'India')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'India')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'Australia',
      user
        .filter((ele:any) => ele.country === 'Australia')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'Australia')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'America',
      user
        .filter((ele:any) => ele.country === 'America')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'America')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'Spain',
      user
        .filter((ele:any) => ele.country === 'Spain')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'Spain')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'US',
      user
        .filter((ele:any) => ele.country === 'US')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'US')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'UK',
      user
        .filter((ele:any) => ele.country === 'UK')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'UK')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'Dubai',
      user
        .filter((ele:any) => ele.country === 'Dubai')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'Dubai')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'Srilanka',
      user
        .filter((ele:any) => ele.country === 'Srilanka')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'Srilanka')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
    [
      'Thailand',
      user
        .filter((ele:any) => ele.country === 'Thailand')
        .filter((ele:any) => ele.status === 'ACTIVE').length,
      user
        .filter((ele:any) => ele.country === 'Thailand')
        .filter((ele:any) => ele.status === 'INACTIVE').length,
    ],
  ];
  const CompariosnData = [[graphBase, graph1, graph2]];
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={1} />
          <Grid item xs={3.5}>
            <Stack>
              <Autocomplete
                value={graphView}
                onChange={updateGrpahView}
                freeSolo
                id="user-select-type"
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
          <Grid item xs={2.3} />
          <Grid item xs={3.5}>
            <Stack>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                size="small"
                options={comparisionType.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{ ...params.InputProps, type: 'search' }}
                    placeholder="Select Graph View"
                    fullWidth
                  />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container ref={myRef}>
          <Grid item xs={6}>
            <Grid container mt={2}>
              <Grid item xs={9}>
                <UserPieChart
                  stateData={stateData}
                  cityData={cityData}
                  graphView={graphView}
                  statusData={statusData}
                  countryData={countryData}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <>
              <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={createdDataData}
                options={options}
              />
            </>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Stack>
                  <Autocomplete
                    value={graphBase}
                    onChange={updateGraphBase}
                    freeSolo
                    id="graph-base"
                    disableClearable
                    size="small"
                    options={graphTypeBaseVal?.map((option) => option)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder="Select Base"
                      />
                    )}
                  />
                </Stack>
              </Grid>

              <Grid item xs={3}>
                <Stack>
                  <Autocomplete
                    value={graph1}
                    onChange={updateFirstGraph}
                    freeSolo
                    id="graph-1"
                    disableClearable
                    size="small"
                    options={comparisonGraphDataVal?.map(
                      (option) => option.label
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder="Select Graph 1"
                      />
                    )}
                  />
                </Stack>
              </Grid>

              <Grid item xs={3}>
                <Stack>
                  <Autocomplete
                    value={graph2}
                    onChange={updateSecondGraph}
                    freeSolo
                    id="graph-2"
                    disableClearable
                    size="small"
                    options={comparisonGraphDataVal?.map(
                      (option) => option.label
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder="Select Graph 2"
                      />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
            <>
              <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={CompariosnCountryData}
              />
              comparison data graph
              <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={CompariosnData}
              />
            </>
          </Grid> */}
      </Grid>
    </Box>
  );
}
// const CountryChart = ({ countryData }) => {
//   return <PieChart data={countryData} />;
// };
// const StateChart = ({ stateData }) => {
//   return <PieChart data={stateData} />;
// };
// const CityChart = ({ cityData }) => {
//   return <PieChart data={cityData} />;
// };
export default UserGraphView;
