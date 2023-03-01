"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { ListStyle as style } from "./list/ListStyle";
export default function Loading() {
  return (
    <h1>
      <Box style={style.loader}>
        <LinearProgress />
      </Box>
    </h1>
  );
}
