"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <h1>
      <Box >
        <LinearProgress />
      </Box>
    </h1>
  );
}
