import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { PieChart } from "react-minimal-pie-chart";
import Grid from "@mui/material/Grid";
// import { Chart } from "react-google-charts";






export const options = {
  title: "My Daily Activities",
  is3D: true,
};



const TestingGraphView = ({ project }: any) => {
  // const example = [
  //   {
  //     type: "India",
  //     value: project?.filter((item) => item.country === "India")?.length,
  //     color: "#E97D30",
  //   },
  //   {
  //     type: "Australia",
  //     value: project.filter((item) => item.country === "Australia").length,
  //     color: "#62B170",
  //   },
  //   {
  //     type: "America",
  //     value: project.filter((item) => item.country === "America").length,
  //     color: "#F1AF13",
  //   },
  //   {
  //     type: "Spain",
  //     value: project.filter((item) => item.country === "Spain").length,
  //     color: "#4BA2DA",
  //   },
  //   {
  //     type: "US",
  //     value: project.filter((item) => item.country === "US").length,
  //     color: "#F1AF13",
  //   },
  //   {
  //     type: "UK",
  //     value: project.filter((item) => item.country === "UK").length,
  //     color: "#F1AF13",
  //   },
  // ];

  return (
    <div>
      <Grid container>
        <Grid item xs={12} px={2}>
          {/* <PieChart data={example} /> */}
          {/* <PieChart data={example} /> */}

          {/* <Chart
            chartType="PieChart"
            data={example}
            options={options}
            width={"100%"}
            height={"400px"}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default TestingGraphView;
