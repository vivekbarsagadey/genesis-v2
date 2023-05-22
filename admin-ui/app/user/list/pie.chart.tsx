import { Grid } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Case, Default, Switch } from 'react-if';

type userChartProps = {
  graphView: any;
  statusData: any;
  countryData: any;
  stateData: any;
  cityData: any;
};
function UserPieChart({
  cityData,
  graphView,
  statusData,
  countryData,
  stateData,
}: userChartProps) {
  return (
    <Grid item xs={12}>
      <Switch>
        <Case condition={graphView === 'city'}>
          <Chart
            chartType="PieChart"
            data={cityData}
            width="120%"
            height="450px"
          />
        </Case>
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
export default UserPieChart;
