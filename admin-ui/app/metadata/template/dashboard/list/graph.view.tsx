import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import MonthPieChart from './month.pie.chart';
import CustomerPieChart from './pie.chart';
import { DashbaordTemplateListComponentProps } from './props';

const options = {
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
function DashBoardTemplateGraphView({ dashboard }: DashbaordTemplateListComponentProps) {
  const [graphView, setGraphView] = useState<string>('status');
  const [graphBase, setGrpahBase] = useState<string>('');
  const [graph1, setGrpah1] = useState<string>('');
  const [graph2, setGraph2] = useState<string>('');
  const [comparisiongraphView, setComparisionGraphView] = useState<string>('Month');

  const keys = Object.keys(dashboard[0]);
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
    ['Status', 'Users'],
    ['ACTIVE', dashboard.filter((item) => item.status === 'ACTIVE').length],
    ['INACTIVE', dashboard.filter((item) => item.status === 'INACTIVE').length],
  ];


  // Base Value
  const updateGraphBase = (
    e: React.ChangeEvent<HTMLInputElement>,
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
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setGraph2(value);
  };

  const updateComparisionGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setComparisionGraphView(value);
  };

  const CompariosnData = [[graphBase, graph1, graph2]];
  return (
    <Box>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={1} />
        <Grid item xs={3.5}>
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
        <Grid item xs={2.3} />
        <Grid item xs={3.5}>
          <Stack>
            <Autocomplete
              value={comparisiongraphView}
              onChange={updateComparisionGrpahView}
              freeSolo
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <CustomerPieChart
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
            <MonthPieChart
              customer={customer}
              comparisiongraphView={comparisiongraphView}
            />
          </>
        </Grid>
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

export default DashBoardTemplateGraphView;
