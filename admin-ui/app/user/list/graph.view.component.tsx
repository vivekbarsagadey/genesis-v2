import React, { useEffect, useState } from "react";
import IUserComponentProps from "../user.props";
import PieChart from "react-pie-graph-chart";
import Grid from "@mui/material/Grid";

interface GraphComponentProps extends IUserComponentProps {}
const GraphViewComponent = ({ items }: GraphComponentProps) => {

  const example = [
    {
      type: "India",
      value: items?.filter(item=>item.country==="India")?.length,
      color: "#E97D30",
    },
    {
      type: "Australia",
      value: items.filter(item=>item.country==="Australia").length,
      color: "#62B170",
    },
    {
      type: "America",
      value: items.filter(item=>item.country==="America").length,
      color: "#F1AF13",
    },
    {
      type: "Spain",
      value: items.filter(item=>item.country==="Spain").length,
      color: "#4BA2DA",
    },
    {
      type: "US",
      value: items.filter(item=>item.country==="US").length,
      color: "#F1AF13",
    },
    {
      type: "UK",
      value: items.filter(item=>item.country==="UK").length,
      color: "#F1AF13",
    },
  ];

  return (
    <Grid container >
      <Grid item xs={12}  >
      <PieChart data={example} />
      </Grid>
    </Grid>
  );
};

export default GraphViewComponent;
