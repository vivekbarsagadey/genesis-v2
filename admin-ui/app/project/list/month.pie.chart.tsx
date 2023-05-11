/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@mui/material';
import moment from 'moment';
import { Chart } from 'react-google-charts';
import { Case, Default, Switch } from 'react-if';

const options = {
  hAxis: { title: 'Month' },
  seriesType: 'bars',
  series: { type: 'line' },
};
const graphViewTitle = {
  // hAxis: { title: 'Day' },
  seriesType: 'bars',
  series: { type: 'line' },
};

type projectChartProps = {
  projects: any;
  comparisiongraphView: any;
};

function MonthPieChart({ projects, comparisiongraphView }: projectChartProps) {
  const month = [
    ['Month', 'Count'],
    [
      'JAN',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Jan').length,
    ],
    [
      'FEB',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Feb').length,
    ],
    [
      'MAR',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Mar').length,
    ],
    [
      'APR',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Apr').length,
    ],
    [
      'MAY',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'May').length,
    ],
    [
      'JUN',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Jun').length,
    ],
    [
      'JUL',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Jul').length,
    ],
    [
      'AUG',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Aug').length,
    ],
    [
      'SEP',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Sep').length,
    ],
    [
      'OCT',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Oct').length,
    ],
    [
      'NOV',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Nov').length,
    ],
    [
      'DEC',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('MMM'))
        .filter((d:any) => d === 'Dec').length,
    ],
  ];

  // let todayDate = new Date().toISOString().slice(0, 10);
  const todayDate = moment(new Date()).format('Do MMM YY');

  console.log(
    'nnn',
    projects
      .map((ele:any) => moment(ele.createdAt).format('Do MMM YY'))
      .filter((d:any) => d === todayDate).length,
  );
  const today = [
    ['Month', 'Count'],
    [
      `${todayDate}`,

      projects
        .map((ele:any) => moment(ele.createdAt).format('Do MMM YY'))
        .filter((d:any) => d === todayDate).length,
    ],
  ];

  const timeFrom = (X:any) => {
    const dates = [];
    for (let I = 0; I < Math.abs(X); I++) {
      dates.push(
        new Date(
          new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000,
        ).toLocaleString(),
      );
    }
    return dates;
  };

  console.log(timeFrom(8));

  const sevenDays = [
    ['Month', 'Count'],

    [
      'sssjk',
      projects
        .map((ele:any) => moment(ele.updatedAt).format('DDD'))
        .filter((d:any) => d === 'Sun').length,
    ],
  ];
  return (
    <Grid item xs={12}>
      <Switch>
        <Case condition={comparisiongraphView === 'Today'}>
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={today}
            options={graphViewTitle}
          />
        </Case>

        <Case condition={comparisiongraphView === 'Last 7 days'}>
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={sevenDays}
            options={graphViewTitle}
          />
        </Case>
        <Default>
          <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={month}
            options={options}
          />
        </Default>
      </Switch>
    </Grid>
  );
}

export default MonthPieChart;
