import React from "react";
import PieChart from "react-pie-graph-chart";
import Grid from "@mui/material/Grid";

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

const ProjectGraphView = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} px={2}>
          <PieChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectGraphView;
