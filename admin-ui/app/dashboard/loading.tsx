"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { DashboardStyle as style } from "./DashboardStyle";

export default function Loading() {
  return (
    <h1>
      <Box style={style.loading}>
        <LinearProgress />
      </Box>
    </h1>
  );
}
