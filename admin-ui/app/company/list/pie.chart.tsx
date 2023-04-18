import React from "react";
import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Case, Default, Switch } from "react-if";

const CompanyPieChart = ({ graphView, statusData, countryData, stateData }) => {
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
              data={countryData}
              width={"100%"}
              height={"320px"}
            />
          </Default>
        </Switch>
      </Grid>
    </>
  );
};

export default CompanyPieChart;
