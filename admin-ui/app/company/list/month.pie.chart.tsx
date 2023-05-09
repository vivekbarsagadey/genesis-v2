import { Grid } from '@mui/material';
import moment from 'moment';
import { Chart } from 'react-google-charts';
import { Case, Default, Switch } from 'react-if';

type projectChartProps = {
  comparisiongraphView: any;
  createdTodayData: any;
  createdDataData: any;
};

export const options = {
  hAxis: {
    title: 'Today Date',
  },
  series: {
    1: { curveType: 'function' },
  },
};

export const graphViewTitle = {
  seriesType: 'bars',
  series: { type: 'line' },
};

const MonthPieChart = ({
  comparisiongraphView,
  createdTodayData,
  createdDataData,
}: projectChartProps) => {
  return (
    <div>
      <Grid item xs={12}>
        <Switch>
          <Case condition={comparisiongraphView === 'Today'}>
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={createdTodayData}
              options={options}
            />
          </Case>

          <Case condition={comparisiongraphView === 'Last 7 days'}>
            {/* <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={sevenDays}
            options={graphViewTitle}
          /> */}
            Last 7 days
          </Case>
          <Case condition={comparisiongraphView === 'Month'}>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={createdDataData}
              options={graphViewTitle}
            />
          </Case>
          <Default>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={createdDataData}
              options={graphViewTitle}
            />
          </Default>
        </Switch>
      </Grid>
    </div>
  );
};

export default MonthPieChart;
