import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Case, Default, Switch } from "react-if";

const CustomerComparisionPieChart = ({
    CompariosnCountryData,comarisionGraphView
}) => {
  return (
    <>
      <Grid item xs={12}>
        <Switch>
          <Case condition={comarisionGraphView === "country"}>
            <Chart
              chartType="PieChart"
              data={CompariosnCountryData}
              width={"100%"}
              height={"320px"}
            />
          </Case>
         

          <Default>
            {/* <Chart
              chartType="PieChart"
              data={cityData}
              width={"100%"}
              height={"320px"}
            /> */}
          </Default>
        </Switch>
      </Grid>
    </>
  );
};

export default CustomerComparisionPieChart;
