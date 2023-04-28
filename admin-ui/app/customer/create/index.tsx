'use client';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { createCustomer } from '../../../services/customer.action';
import {
  citySelect,
  countrySelect,
  stateSelect,
} from '../grpahdata/graph.data';
import { Status } from '../models';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  avtar: {
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
      color: 'black',
    },
    width: '120px',
    height: '125px',
  },
  buttonStyle: {
    width: '73%',
  },
});

const genderType = [
  { title: 'Male' },
  { title: 'Female' },
  { title: 'Others' },
];

const CustomerCreateComponent = () => {
  const classes = useStyles();
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [gender, setGender] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerStatus, setCustomerStatus] = useState('');
  const [customerZipCode, setCustomerZipCode] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [customerCountry, setCustomerCountry] = useState('');
  const [alert, setAlert] = useState(false);

  const router = useRouter();
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  // POST call
  const updateMyCustomerData = async () => {
    try {
      const body = {
        firstName: customerFirstName,
        lastName: customerLastName,
        gender: gender,
        email: customerEmail,
        age: customerAge,
        mobile: customerPhone,
        address: customerAddress,
        status: customerStatus,
        zipCode: customerZipCode,
        city: customerCity,
        state: customerState,
        country: customerCountry,
      };
      await createCustomer(body);
      await router.push('/customer');
    } catch (error) {
      console.error(error);
    }
  };

  const updateCustomerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerFirstName(e.target.value);
  };
  const updateCustomerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerLastName(e.target.value);
  };

  const updateCustomerAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerAge(e.target.value);
  };

  const updateCustomerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerEmail(e.target.value);
  };

  const updateCustomerPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerPhone(e.target.value);
  };
  const updateCustomerAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerAddress(e.target.value);
  };
  const updateCustomerZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerZipCode(e.target.value);
  };

  const updateCustomerChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setGender(value);
  };
  const updateCustomerCountry = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCustomerCountry(value);
  };
  const updateCustomerState = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCustomerState(value);
  };
  const updateCustomerCity = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCustomerCity(value);
  };

  const updateCustomerStatus = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCustomerStatus(value);
  };
  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  const updateHandler = () => {
    handleClick();
    updateMyCustomerData();
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} mt={2} ml={5}>
          <Typography fontSize={'1.2rem'}>Create New Customer</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }} paddingLeft={5}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>First Name</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="first-name"
                      placeholder="First Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerFirstName}
                      onChange={updateCustomerFirstName}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Last Name</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="last-name"
                      placeholder="Last Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerLastName}
                      onChange={updateCustomerLastName}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Gender</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack spacing={2}>
                      <Autocomplete
                        disablePortal
                        value={gender}
                        onChange={updateCustomerChange}
                        id="combo-box-demo"
                        size="small"
                        options={genderType?.map((option) => option.title)}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Select Gender" />
                        )}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Age</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="age"
                      placeholder="Age"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerAge}
                      onChange={updateCustomerAge}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="email"
                      placeholder="Email"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerEmail}
                      onChange={updateCustomerEmail}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Mobile</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="mobile"
                      placeholder="Mobile"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerPhone}
                      onChange={updateCustomerPhone}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      value={customerStatus}
                      onChange={updateCustomerStatus}
                      id="status"
                      size="small"
                      options={statusSet?.map((option: any) => option)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select Status" />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="address"
                      placeholder="Address"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerAddress}
                      onChange={updateCustomerAddress}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Country</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack spacing={2}>
                      <Autocomplete
                        disablePortal
                        value={customerCountry}
                        onChange={updateCustomerCountry}
                        id="country"
                        size="small"
                        options={countrySelect.map((option) => option.country)}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Select Country" />
                        )}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>State</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      disablePortal
                      value={customerState}
                      onChange={updateCustomerState}
                      id="state"
                      size="small"
                      options={stateSelect.map((option) => option.state)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select State" />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>City</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      disablePortal
                      value={customerCity}
                      onChange={updateCustomerCity}
                      id="city"
                      size="small"
                      options={citySelect.map((option) => option.city)}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select City" />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={3}>
                    <Typography>Zip Code</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="zipcode"
                      placeholder="Zip Code"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerZipCode}
                      onChange={updateCustomerZipCode}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container mt={5}>
                <Grid item xs={8.6}></Grid>
                <Grid item xs={3.4}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Link
                        href={'/customer'}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="contained"
                          className={classes.buttonStyle}
                        >
                          Cancel
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        onClick={updateHandler}
                        className={classes.buttonStyle}
                      >
                        Save
                      </Button>
                      <Snackbar
                        open={alert}
                        autoHideDuration={8000}
                        onClose={handleClose}
                      >
                        <Alert onClose={handleClose} sx={{ width: '100%' }}>
                          Customer Created Sucessfully...
                        </Alert>
                      </Snackbar>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerCreateComponent;
