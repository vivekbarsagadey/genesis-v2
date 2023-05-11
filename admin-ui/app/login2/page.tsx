/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { InputComponent } from '../../component/ui/base/input';

const useStyles = makeStyles({
  login_button: {
    background: '#FFC107',
    width: '100%',
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': {
      background: '#FFC107',
    },
  },
  background_style: {
    backgroundImage: `url(${'./images/loginbackground1.png'})`,
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center',
  },
  card_style: {
    padding: '1.5rem',
    width: '20rem',
    marginTop: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '5px',
  },
  customTextField: {
    '& input::placeholder': {
      fontSize: '0.7rem',
    },
  },
});

function SignIn({}): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.background_style}>
      <Grid item xs={12}>
        <InputComponent
          type="email"
          placeHolder="Enter email"
          label="Email"
          id="email"
        />
        <InputComponent
          type="password"
          placeHolder="Enter password"
          label="Password"
          id="password"
        />
        <InputComponent
          type="text"
          placeHolder="Enter Text"
          label="Text"
          id="text"
        />
        <InputComponent
          type="number"
          placeHolder="Enter Number"
          label="Number"
          id="number"
        />
      </Grid>
    </Grid>
  );
}

export default SignIn;
