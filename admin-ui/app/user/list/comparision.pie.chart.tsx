import { Grid } from '@mui/material';
import { Chart } from 'react-google-charts';
import { Case, Switch } from 'react-if';

function UserComparisionPieChart({
	CompariosnCountryData, comparisionGraphView,
} : any) {
	return (
  <Grid item xs={12}>
			<Switch>
				<Case condition={comparisionGraphView === 'country'}>
					<Chart
						chartType="PieChart"
						data={CompariosnCountryData}
						width="100%"
						height="320px"
  />
  </Case>
    </Switch>
		</Grid>
	);
}
export default UserComparisionPieChart;
