import { Grid } from "@mui/material";
import { Chart } from "react-google-charts";
import { Case, Default, Switch } from "react-if";

type projectChartProps = {
    options: any;
    graphViewTitle: any;
    createdDataData: any;
    comparisiongraphView: any;
    createdTodaysData: any;
    createdDaysData: any;
  };

const MonthPieChart = ({createdDaysData,options,graphViewTitle , createdDataData,
    comparisiongraphView,createdTodaysData}:projectChartProps) => {
        const date = new Date().toLocaleDateString();
  
    return (
    <>
    <Grid item xs={12}>
        <Switch>
          <Case condition={comparisiongraphView === "Today"}>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={createdTodaysData}
              options={graphViewTitle}
            />
           {`Todays Date is ${date}`}
          </Case>
          
          <Case condition={comparisiongraphView === "Last 7 days"}>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={createdDaysData}
              options={graphViewTitle}
            />
          </Case>
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