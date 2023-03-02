import React from "react";
import PieChart from "react-pie-graph-chart";
import Grid from "@mui/material/Grid";

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

const ProjectGraphView = ({ projectData }: any) => {
  const example = [
    {
      type: "India",
      value: projectData?.filter(items=>items.country==="India")?.length,
      color: "#E97D30",
    },
    {
      type: "Australia",
      value: projectData.filter(items=>items.country==="Australia").length,
      color: "#62B170",
    },
    {
      type: "America",
      value: projectData.filter(items=>items.country==="America").length,
      color: "#F1AF13",
    },
    {
      type: "Spain",
      value: projectData.filter(items=>items.country==="Spain").length,
      color: "#4BA2DA",
    },
    {
      type: "US",
      value: projectData.filter(items=>items.country==="US").length,
      color: "#F1AF13",
    },
    {
      type: "UK",
      value: projectData.filter(items=>items.country==="UK").length,
      color: "#F1AF13",
    },
  ];
  return (
    <div>
      <Grid container >
      <Grid item xs={12} px={2} >
      <PieChart data={example} />
      </Grid>
    </Grid>
    </div>
  );
};

export default ProjectGraphView;
