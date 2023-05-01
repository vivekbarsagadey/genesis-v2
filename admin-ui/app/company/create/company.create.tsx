'use client';

import {
  Box, Button, Grid, TextField, Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { createCompany } from '../../../services/company.action';
import { countrySelect, stateSelect } from '../graphdata/graph.data';
import { Status } from '../models';

const useStyles = makeStyles({
  buttonStyle: {
    width: '73%',
  },
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function CompanyCreateComponent() {
  const classes = useStyles();
  const [ownerFirstName, setOwnerFirstName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyStatus, setCompanyStatus] = useState('');
  const [companyState, setCompanyState] = useState('');
  const [companyCountry, setCompanyCountry] = useState('');
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  // POST call
  const updateMyCompanyData = async () => {
    try {
      const body = {
        firstName: ownerFirstName,
        lastName: ownerLastName,
        name: companyName,
        email: companyEmail,
        mobile: companyPhone,
        address: companyAddress,
        website: companyWebsite,
        status: companyStatus,
        state: companyState,
        country: companyCountry,
      };
      //  console.log("this is body", body)
      await createCompany(body);
      await router.push('/company');
    } catch (error) {
      console.error(error);
    }
  };

  const updateOwnerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerFirstName(e.target.value);
  };
  const updateOwnerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerLastName(e.target.value);
  };
  const updateCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };
  const updateCompanyEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyEmail(e.target.value);
  };
  const updateCompanyPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyPhone(e.target.value);
  };
  const updateCompanyAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyAddress(e.target.value);
  };
  const updateCompanyWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyWebsite(e.target.value);
  };
  const updateCompanyState = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCompanyState(value);
  };
  const updateCompanyCountry = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCompanyCountry(value);
  };
  const getCompanyStatusValue = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCompanyStatus(value);
  };

  const updateHandler = () => {
    handleClick();
    updateMyCompanyData();
  };
  return (
    <Box padding={4}>
      <Grid container>
        <Grid item xs={12} ml={5}>
          <Typography fontSize="1.1rem">Create New Company</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={3} paddingLeft={5}>
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
                value={ownerFirstName}
                onChange={updateOwnerFirstName}
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
                value={ownerLastName}
                onChange={updateOwnerLastName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={3}>
              <Typography>Company Name</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="company-name"
                placeholder="Company Name"
                variant="outlined"
                size="small"
                fullWidth
                value={companyName}
                onChange={updateCompanyName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
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
                value={companyEmail}
                onChange={updateCompanyEmail}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={3}>
              <Typography>Phone</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone"
                placeholder="Phone"
                variant="outlined"
                size="small"
                fullWidth
                value={companyPhone}
                onChange={updateCompanyPhone}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
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
                value={companyAddress}
                onChange={updateCompanyAdress}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1}>
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
                value={companyState}
                onChange={updateCompanyState}
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

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={3}>
              <Typography>Country</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                value={companyCountry}
                onChange={updateCompanyCountry}
                id="country"
                size="small"
                options={countrySelect.map((option) => option.country)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Country" />
                )}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={3}>
              <Typography>Website</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="website"
                placeholder="Website"
                variant="outlined"
                size="small"
                fullWidth
                value={companyWebsite}
                onChange={updateCompanyWebsite}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={3}>
              <Typography>Company Status</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                value={companyStatus}
                onChange={getCompanyStatusValue}
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
        <Grid container mt={5}>
          <Grid item xs={8.6} />
          <Grid item xs={3.4}>
            <Grid container>
              <Grid item xs={6}>
                <Link href="/company" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" style={{ width: '73%' }}>
                    Cancel
                </Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={updateHandler}
                  style={{ width: '73%' }}
                >
                  Save
                </Button>
                <Snackbar
                  open={alert}
                  autoHideDuration={8000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} sx={{ width: '100%' }}>
                    Company Created Sucessfully...
                </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompanyCreateComponent;
