import { Box, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import CompanyPieChart from './pie.chart';
// import { ListComponentProps } from './props';
import { ICompany } from '../models';
import MonthPieChart from './month.pie.chart';

type ListComponentProps = {
  companies: Array<ICompany>;
  myRef: any;
};

export const options = {
  hAxis: {
    title: 'Today Date',
  },
  series: {
    1: { curveType: 'function' },
  },
};

const comparisionType = [
  { title: 'Today' },
  { title: 'Last 7 days' },
  { title: 'Month' },
];

function CustomerGraphView({ companies, myRef }: ListComponentProps) {
  const [graphView, setGraphView] = useState<string>('Status');
  const [comparisiongraphView, setComparisionGraphView] = useState<string>('Month');

  const keys = Object.keys(companies[0]);
  const graphTypeVal = keys.filter((element) => {
    if (element === 'country' || element === 'state' || element === 'status') {
      return true;
    }
    return false;
  });
  const statusData = [
    ['Status', 'Users'],
    ['NEW', companies.filter((item) => item.status === 'NEW').length],
    ['ACTIVE', companies.filter((item) => item.status === 'ACTIVE').length],
    ['INACTIVE', companies.filter((item) => item.status === 'INACTIVE').length],
  ];

  const stateData = [
    ['companies', 'State'],
    ['Bihar', companies.filter((item) => item.state === 'Bihar').length],
    [
      'Madhya Pradesh',
      companies.filter((item) => item.state === 'Madhya Pradesh').length,
    ],
    ['UP', companies.filter((item) => item.state === 'UP').length],
    [
      'Maharastra',
      companies.filter((item) => item.state === 'Maharastra').length,
    ],
    ['Punjab', companies.filter((item) => item.state === 'Punjab').length],
    ['UK', companies.filter((item) => item.state === 'UK').length],
    ['Gujrat', companies.filter((item) => item.state === 'Gujrat').length],
    [
      'Karnataka',
      companies.filter((item) => item.state === 'Karnataka').length,
    ],
    [
      'Jammu & Kashmir',
      companies.filter((item) => item.state === 'Jammu & Kashmir').length,
    ],
  ];
  const countryData = [
    ['companies', 'Country'],
    ['India', companies.filter((item) => item.country === 'India').length],
    [
      'Australia',
      companies.filter((item) => item.country === 'Australia').length,
    ],
    ['America', companies.filter((item) => item.country === 'America').length],
    ['Spain', companies.filter((item) => item.country === 'Spain').length],
    ['US', companies.filter((item) => item.country === 'US').length],
    ['UK', companies.filter((item) => item.country === 'UK').length],
    ['Dubai', companies.filter((item) => item.country === 'Dubai').length],
    [
      'Srilanka',
      companies.filter((item) => item.country === 'Srilanka').length,
    ],
    [
      'Thailand',
      companies.filter((item) => item.country === 'Thailand').length,
    ],
  ];

  const createdDataData = [
    ['Month', 'Count'],
    [
      'JAN',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jan').length,
    ],
    [
      'FEB',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Feb').length,
    ],
    [
      'MAR',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Mar').length,
    ],
    [
      'APR',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Apr').length,
    ],
    [
      'MAY',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'May').length,
    ],
    [
      'JUN',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jun').length,
    ],
    [
      'JUL',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jul').length,
    ],
    [
      'AUG',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Aug').length,
    ],
    [
      'SEP',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Sep').length,
    ],
    [
      'OCT',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Oct').length,
    ],
    [
      'NOV',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Nov').length,
    ],
    [
      'DEC',
      companies
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Dec').length,
    ],
  ];
  const updateGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGraphView(value);
  };

  const updateComparisionGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setComparisionGraphView(value);
  };

  const todayDate = moment(new Date()).format('DD MMM YY');
  const createdTodayData = [
    ['Day', 'Count'],
    [
      `${todayDate}`,
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === todayDate).length,
    ],
  ];

  const first = moment().subtract(1, 'day').toDate();

  const second = moment().subtract(2, 'day').toDate();
  const third = moment().subtract(3, 'day').toDate();
  const fourth = moment().subtract(4, 'day').toDate();
  const fifth = moment().subtract(5, 'day').toDate();
  const sixth = moment().subtract(6, 'day').toDate();
  const seventh = moment().subtract(7, 'day').toDate();
  const pastDays = [
    ['Date', 'Count'],
    [
      moment(first).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === first).length,
    ],
    [
      moment(second).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === second).length,
    ],
    [
      moment(third).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === third).length,
    ],
    [
      moment(fourth).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === fourth).length,
    ],
    [
      moment(fifth).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === fifth).length,
    ],
    [
      moment(sixth).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === sixth).length,
    ],
    [
      moment(seventh).format('DD MMM YY'),
      companies
        .map((ele) => moment(ele.updatedAt).format('DD MMM YY'))
        .filter((d) => d === seventh).length,
    ],
  ];

  return (
    <Box mr={2}>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={3.1}>
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
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                  placeholder="Select Graph View"
                />
              )}
            />
          </Stack>
        </Grid>
        <Grid item xs={3.6} />
        <Grid item xs={3.1}>
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
                  // eslint-disable-next-line react/jsx-props-no-spreading
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
          <MonthPieChart
            createdTodayData={createdTodayData}
            comparisiongraphView={comparisiongraphView}
            createdDataData={createdDataData}
            pastDays={pastDays}
          />
        </Grid>
        <Grid />
      </Grid>
    </Box>
  );
}

export default CustomerGraphView;
