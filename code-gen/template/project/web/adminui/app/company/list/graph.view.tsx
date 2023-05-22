{% set Info_Cap = app_list['name'].capitalize() -%}
{% set Info_Sm = app_list['name'] -%}


import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import {{Info_Cap}}PieChart from './pie.chart';
import { ListComponentProps } from './props';

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
function CustomerGraphView({ {{Info_Sm}}, myRef }: ListComponentProps) {
  const [graphView, setGraphView] = useState<string>('status');
  const [comparisiongraphView, setComparisionGraphView] = useState<string>('Month');
  const updateGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGraphView(value);
  };

  const keys = Object.keys({{Info_Sm}}[0]);
  const graphTypeVal = keys.filter((element) => {
    if (element === 'country' || element === 'state' || element === 'status') {
      return true;
    }
    return false;
  });
  const statusData = [
    ['Status', 'Users'],
    ['NEW', {{Info_Sm}}.filter((item) => item.status === 'NEW').length],
    ['ACTIVE', {{Info_Sm}}.filter((item) => item.status === 'ACTIVE').length],
    ['INACTIVE', {{Info_Sm}}.filter((item) => item.status === 'INACTIVE').length],
  ];

  const stateData = [
    ['{{Info_Sm}}', 'State'],
    ['Bihar', {{Info_Sm}}.filter((item) => item.state === 'Bihar').length],
    [
      'Madhya Pradesh',
      {{Info_Sm}}.filter((item) => item.state === 'Madhya Pradesh').length,
    ],
    ['UP', {{Info_Sm}}.filter((item) => item.state === 'UP').length],
    [
      'Maharastra',
      {{Info_Sm}}.filter((item) => item.state === 'Maharastra').length,
    ],
    ['Punjab', {{Info_Sm}}.filter((item) => item.state === 'Punjab').length],
    ['UK', {{Info_Sm}}.filter((item) => item.state === 'UK').length],
    ['Gujrat', {{Info_Sm}}.filter((item) => item.state === 'Gujrat').length],
    [
      'Karnataka',
      {{Info_Sm}}.filter((item) => item.state === 'Karnataka').length,
    ],
    [
      'Jammu & Kashmir',
      {{Info_Sm}}.filter((item) => item.state === 'Jammu & Kashmir').length,
    ],
  ];
  const countryData = [
    ['{{Info_Sm}}', 'Country'],
    ['India', {{Info_Sm}}.filter((item) => item.country === 'India').length],
    [
      'Australia',
      {{Info_Sm}}.filter((item) => item.country === 'Australia').length,
    ],
    ['America', {{Info_Sm}}.filter((item) => item.country === 'America').length],
    ['Spain', {{Info_Sm}}.filter((item) => item.country === 'Spain').length],
    ['US', {{Info_Sm}}.filter((item) => item.country === 'US').length],
    ['UK', {{Info_Sm}}.filter((item) => item.country === 'UK').length],
    ['Dubai', {{Info_Sm}}.filter((item) => item.country === 'Dubai').length],
    [
      'Srilanka',
      {{Info_Sm}}.filter((item) => item.country === 'Srilanka').length,
    ],
    [
      'Thailand',
      {{Info_Sm}}.filter((item) => item.country === 'Thailand').length,
    ],
  ];

  const createdDataData = [
    ['Month', 'Count'],
    [
      'JAN',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jan').length,
    ],
    [
      'FEB',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Feb').length,
    ],
    [
      'MAR',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Mar').length,
    ],
    [
      'APR',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Apr').length,
    ],
    [
      'MAY',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'May').length,
    ],
    [
      'JUN',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jun').length,
    ],
    [
      'JUL',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jul').length,
    ],
    [
      'AUG',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Aug').length,
    ],
    [
      'SEP',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Sep').length,
    ],
    [
      'OCT',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Oct').length,
    ],
    [
      'NOV',
      {{Info_Sm}}
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Nov').length,
    ],
    [
      'DEC',
      {{Info_Sm}}

        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Dec').length,
    ],
  ];

  const updateComparisionGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setComparisionGraphView(value);
  };
  return (
    <Box mr={2}>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={1} />
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
                  {# InputProps={{ ...params.InputProps, type: 'search' }}#}
                  placeholder="Select Graph View"
                />
                {# endcomment #}
              )}
            />
          </Stack>
        </Grid>
        <Grid item xs={2.3} />
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
                  InputProps={# {{
                    ...params.InputProps,
                    type: 'search',
                  }} #}
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
          <Grid container>
            <Grid item xs={9}>
              <CompanyPieChart
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
        <Grid item xs={12} />
      </Grid>
    </Box>
  );
}

export default CustomerGraphView;
