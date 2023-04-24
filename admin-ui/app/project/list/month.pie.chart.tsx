import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Case, Default, Switch } from "react-if";

type projectChartProps = {
    options: any;
    graphViewTitle: any;
    createdDataData: any;
    comparisiongraphView: any;
    createdTodaysData: any;
  };

const MonthPieChart = ({options,graphViewTitle , createdDataData,comparisiongraphView,createdTodaysData}:projectChartProps) => {
  return (
    <>

<Grid item xs={12}>
        <Switch>
          <Case condition={comparisiongraphView === "today"}>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={createdTodaysData}
              options={graphViewTitle}
            />
          </Case>
          {/* <Case condition={graphView === "country"}>
            <Chart
              chartType="PieChart"
              data={countryData}
              width={"100%"}
              height={"320px"}
            />
          </Case> */}
          {/* <Case condition={graphView === "status"}>
            <Chart
              chartType="PieChart"
              data={statusData}
              width={"100%"}
              height={"320px"}
            />
          </Case> */}
          {/* <Case condition={graphView === "application"}>
            <Chart
              chartType="PieChart"
              data={applicationData}
              width={"100%"}
              height={"320px"}
            />
          </Case> */}

          <Default>
          <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={createdDataData}
              options={options}
            />
          </Default>
        </Switch>
      </Grid>


    </>
  )
}

export default MonthPieChart