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
import { countrySelect, genderSelect, stateSelect } from '../graphdata/graph.data';
import { Status } from '../models';
import { FormInput, FormSelectComponent } from '../../../component/ui/form';

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
  const [ownerName, setOwnerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyMobile, setCompanyMobile] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyStatus, setCompanyStatus] = useState('');
  const [companyState, setCompanyState] = useState('');
  const [companyGender, setCompanyGender] = useState('');
  const [companyCountry, setCompanyCountry] = useState('');
  const [companyPinCode, setCompanyPinCode] = useState('');
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState('');

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
        ownerName: ownerName,
        name: companyName,
        email: companyEmail,
        mobile: companyMobile,
        address: companyAddress,
        website: companyWebsite,
        status: companyStatus,
        state: companyState,
        country: companyCountry,
        pincode: companyPinCode,
        gender: companyGender
      };
      await createCompany(body);
      await router.push('/company');
    } catch (error) {
    }
  };

  const updateOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerName(e.target.value);
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
  const updateCompanyPinCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyPinCode(e.target.value);
  };
  const updateCompanyState = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCompanyState(value);
  };
  const updateCompanyGender = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCompanyGender(value);
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

          {/* <Grid item xs={6}>
            <FormInput value={data} header='Name' size='small' onChange={setData} placeholder='Select Name' />
          </Grid> */}
          
          {/* <Grid item xs={6} mt={1}>
            <FormSelectComponent mainData={statusSet} onChange={setData} value={data} header='Quantity' size='small' placeholder='Select Quantity' disablePortal={true} />
          </Grid> */}


          <Grid item xs={6} mt={1}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.mainHeader}>
                <Typography>Name</Typography>
                <span className={classes.headerChild}>*</span>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="owner-name"
                  placeholder="Owner Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={ownerName}
                  onChange={updateOwnerName}
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
                <Typography>Gender</Typography>
                <span className={classes.headerChild}>*</span>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  value={companyGender}
                  onChange={updateCompanyGender}
                  id="gender"
                  size="small"
                  options={genderSelect.map((option) => option.gender)}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select gender" />
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
                <TextField
                  id="pincode"
                  placeholder="Pin Code"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyPinCode}
                  onChange={updateCompanyPinCode}
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
