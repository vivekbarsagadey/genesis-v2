'use client';

import { Typography } from '@mui/material';
import { useEffect } from 'react';

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
    <>
      <Typography>Something went wrong!</Typography>
      <button onClick={() => reset()}>Reset error boundary</button>
    </>
  );
}
