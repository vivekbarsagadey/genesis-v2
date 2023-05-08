import React from 'react';
import { Grid } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Case, Default, Switch } from 'react-if';

type companyChartProps = {
  graphView: any;
  statusData: any;
  countryData: any;
  stateData: any;
};

function CompanyPieChart({
  graphView,
  statusData,
  countryData,
  stateData,
}: companyChartProps) {
  return (
    <Grid item xs={12}>
      <Switch>
        <Case condition={graphView === 'state'}>
          <Chart
            chartType="PieChart"
            data={stateData}
            width="120%"
            height="450px"
          />
        </Case>
        <Case condition={graphView === 'country'}>
          <Chart
            chartType="PieChart"
            data={countryData}
            width="120%"
            height="450px"
          />
        </Case>
        <Case condition={graphView === 'status'}>
          <Chart
            chartType="PieChart"
            data={statusData}
            width="120%"
            height="450px"
          />
        </Case>

        <Default>
          <Chart
            chartType="PieChart"
            data={statusData}
            width="120%"
            height="450px"
          />
        </Default>
      </Switch>
    </Grid>
  );
}

export default CompanyPieChart;