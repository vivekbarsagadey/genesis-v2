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
  seriesType: 'bars',
  series: { type: 'line' },
};

type projectChartProps = {
  customer: any;
  comparisiongraphView: any;
};

const MonthPieChart = ({
  customer,
  comparisiongraphView,
}: projectChartProps) => {
  const month = [
    ['Month', 'Count'],
    [
      'JAN',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jan').length,
    ],
    [
      'FEB',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Feb').length,
    ],
    [
      'MAR',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Mar').length,
    ],
    [
      'APR',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Apr').length,
    ],
    [
      'MAY',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'May').length,
    ],
    [
      'JUN',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jun').length,
    ],
    [
      'JUL',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Jul').length,
    ],
    [
      'AUG',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Aug').length,
    ],
    [
      'SEP',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Sep').length,
    ],
    [
      'OCT',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Oct').length,
    ],
    [
      'NOV',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Nov').length,
    ],
    [
      'DEC',
      customer
        .map((ele) => moment(ele.updatedAt).format('MMM'))
        .filter((d) => d === 'Dec').length,
    ],
  ];

  // let todayDate = new Date().toISOString().slice(0, 10);
  let todayDate = moment(new Date()).format('Do MMM YY');

  console.log(
    'nnn',
    customer
      .map((ele) => moment(ele.createdAt).format('Do MMM YY'))
      .filter((d) => d == todayDate).length
  );
  const today = [
    ['Month', 'Count'],
    [
      `${todayDate}`,

      customer
        .map((ele) => moment(ele.createdAt).format('Do MMM YY'))
        .filter((d) => d == todayDate).length,
    ],
  ];

  var timeFrom = (X:any) => {
    var dates = [];
    for (let I = 0; I < Math.abs(X); I++) {
      dates.push(
        new Date(
          new Date() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
        ).toLocaleString()
      );
    }
    return dates;
  };

  console.log(timeFrom(8));

  const sevenDays = [
    ['Month', 'Count'],

    [
      'sssjk',
      customer
        .map((ele) => moment(ele.updatedAt).format('DDD'))
        .filter((d) => d === 'Sun').length,
    ],
  ];
  return (
    <>
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
    </>
  );
};

export default MonthPieChart;
