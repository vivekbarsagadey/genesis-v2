'use client';

import { makeStyles } from '@mui/styles';
import { InputStyle } from '.';

// const useStyles = makeStyles({
//   ...InputStyle,
//   error: {
//     ...InputStyle.error,
//   },
//   input: {
//     ...InputStyle.input,
//   },
// });

interface ErrorComponentProps {
  message: string;
}

function ErrorComponent({ message }: ErrorComponentProps) {
	return <p style={InputStyle.error.item}>{message}</p>;
}

export { ErrorComponent };
