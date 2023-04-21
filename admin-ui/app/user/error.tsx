<<<<<<< HEAD
'use client';
import {Typography} from "@mui/material";
import { useEffect } from 'react';
=======
"use client";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

import { useEffect } from "react";

>>>>>>> 5ea9868b9c91d9d66c81f7ce7ff5573ea14de14d
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
<<<<<<< HEAD
    <>
      <Typography>Something went wrong!</Typography>
      <button onClick={() => reset()}>Reset error boundary</button>
    </>
=======
    <Grid>
      <Typography>Something went wrong!</Typography>
      <button onClick={() => reset()}>Reset error boundary</button>
    </Grid>
>>>>>>> 5ea9868b9c91d9d66c81f7ce7ff5573ea14de14d
  );
}
