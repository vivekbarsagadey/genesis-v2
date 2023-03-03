"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { CompanyStyle as style } from "./companystyle";

export default function Loading() {
  return (
    <h1>
      <Box style={style.loading}>
        <LinearProgress />
      </Box>
    </h1>
  );
}
