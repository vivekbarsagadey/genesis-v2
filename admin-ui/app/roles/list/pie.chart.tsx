import React from "react";
import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Case, Default, Switch } from "react-if";

type roleChartProps = {
  graphView: any;
  statusData: any;
  countryData: any;
  stateData: any;
};

const RolePieChart = ({
  graphView,
  statusData,
  countryData,
  stateData,
}: roleChartProps) => {

  return (
    <>
      <Grid item xs={12}>
        <Switch>
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
              data={statusData}
              width={"100%"}
              height={"320px"}
            />
          </Default>
        </Switch>
      </Grid>
    </>
  );
};

export default RolePieChart;
