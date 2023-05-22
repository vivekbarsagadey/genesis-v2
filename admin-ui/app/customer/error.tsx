'use client';

<<<<<<< HEAD
import { Typography } from '@mui/material';
=======
>>>>>>> dev
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
<<<<<<< HEAD
    <>
      <Typography>Something went wrong!</Typography>
      <button onClick={() => reset()}>Reset error boundary</button>
    </>
  );
}
=======
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
>>>>>>> dev
