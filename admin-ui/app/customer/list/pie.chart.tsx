import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Case, Default, Switch } from "react-if";

type customerChartProps = {
  graphView: string;
  statusData: string;
  countryData: string;
  stateData: any;
  cityData: string;
};

const CustomerPieChart = ({
  cityData,
  graphView,
  statusData,
  countryData,
  stateData,
}: customerChartProps) => {
  return (
    <>
      <Grid item xs={12}>
        <Switch>
          <Case condition={graphView === "city"}>
            <Chart
              chartType="PieChart"
              data={cityData}
              width={"100%"}
              height={"320px"}
            />
          </Case>
          <Case condition={graphView === "state"}>
            <Chart
              chartType="PieChart"
              data={stateData}
              width={"100%"}
              height={"320px"}
            />
          </Case>
          <Case condition={graphView === "country"}>
            <Chart
              chartType="PieChart"
              data={countryData}
              width={"100%"}
              height={"320px"}
            />
          </Case>
          <Case condition={graphView === "status"}>
            <Chart
              chartType="PieChart"
              data={statusData}
              width={"100%"}
              height={"320px"}
            />
          </Case>

          <Default>
            <Chart
              chartType="PieChart"
              data={cityData}
              width={"100%"}
              height={"320px"}
            />
          </Default>
        </Switch>
      </Grid>
    </>
  );
};

export default CustomerPieChart;
