import { Grid } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Case, Default, Switch } from 'react-if';

type roleChartProps = {
  graphView: any;
  statusData: any;
  countryData: any;
  stateData: any;
};

function RolePieChart({
	graphView,
	statusData,
}: roleChartProps) {
	return (
  <Grid item xs={12}>
			<Switch>
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

export default RolePieChart;
