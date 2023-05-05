'use client';

import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
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
  buttonStyle: { width: '73%', },
  gridContainer: { display: "flex", alignItems: "center" },
  mainHeader: { display: 'flex', flexDirection: 'row' },
  headerChild: { color: 'red' }
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
  const [companyMobile, setCompanyMobile] = useState('');
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
    reason?: string
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
        mobile: companyMobile,
        address: companyAddress,
        website: companyWebsite,
        status: companyStatus,
        state: companyState,
        country: companyCountry,
      };
      await createCompany(body);
      await router.push('/company');
    } catch (error) {
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
  const updateCompanyMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyMobile(e.target.value);
  };
  const updateCompanyAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyAddress(e.target.value);
  };
  const updateCompanyWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyWebsite(e.target.value);
  };
  const updateCompanyState = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCompanyState(value);
  };
  const updateCompanyCountry = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCompanyCountry(value);
  };
  const getCompanyStatusValue = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCompanyStatus(value);
  };

  const updateHandler = () => {
    handleClick();
    updateMyCompanyData();
  };
  return (
    <Box padding={3}>
      <Card elevation={0}>
        <Grid container>
          <Grid item xs={12} ml={5} mt={2}>
            <Typography fontSize="1.1rem">Create New Company</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3} paddingLeft={5}>
          <Grid item xs={6}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>First Name</Typography>
                <span className={classes.headerChild}>*</span>
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} >
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Company Name</Typography>
                <span className={classes.headerChild}>*</span>
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Email</Typography>
                <span className={classes.headerChild}>*</span>
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Mobile</Typography>
                <span className={classes.headerChild}>*</span>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="Mobile"
                  placeholder="Mobile"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyMobile}
                  onChange={updateCompanyMobile}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={1}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Address</Typography>
                <span className={classes.headerChild}>*</span>
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Country</Typography>
                <span className={classes.headerChild}>*</span>
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>State</Typography>
                <span className={classes.headerChild}>*</span>
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>PinCode</Typography>
                <span className={classes.headerChild}>*</span>
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
                    <TextField {...params} placeholder="Select PinCode" />
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
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Company Status</Typography>
                <span className={classes.headerChild}>*</span>
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

          <Grid container my={5}>
            <Grid item xs={8.6} />
            <Grid item xs={3.4}>
              <Grid container>
                <Grid item xs={5.3}>
                  <Link href="/company" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{ width: '92%' }}>
                      Cancel
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={updateHandler}
                    style={{ width: '83%' }}
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
      </Card>
    </Box>
  );
}

export default CompanyCreateComponent;
