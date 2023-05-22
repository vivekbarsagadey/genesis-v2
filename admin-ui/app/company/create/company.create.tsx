<<<<<<< HEAD
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
import {countrySelect,genderSelect,stateSelect} from '../graphdata/graph.data';
import { Status } from '../models';
import { baseStyle, colors } from '../../../themes';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const useStyles = makeStyles({
  buttonStyle: { width: '73%' },
  gridContainer: { display: 'flex', alignItems: 'center' },
  mainHeader: { display: 'flex', flexDirection: 'row' },
  headerChild: { color: 'red' },
  root: {
    backgroundColor: colors.white,
    borderRadius: baseStyle.borderRadius.small,
  },
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
  const router = useRouter();

  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickAway') {
      return;
    }
    setAlert(false);
  };

  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
=======
"use client";
import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Autocomplete from "@mui/material/Autocomplete";
import { Status } from "../models";
import { createCompany } from "../../../services/company.action";
const CompanyCreateComponent = () => {
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyStatus, setCompanyStatus] = useState("NEW");
  const router = useRouter();

  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

>>>>>>> dev
  // POST call
  const updateMyCompanyData = async () => {
    try {
      const body = {
        ownerName,
        name: companyName,
        email: companyEmail,
        mobile: companyMobile,
        address: companyAddress,
        website: companyWebsite,
        status: companyStatus,
<<<<<<< HEAD
        state: companyState,
        country: companyCountry,
        pincode: companyPinCode,
        gender: companyGender,
=======
>>>>>>> dev
      };
      await createCompany(body);
      await router.push('/company');
    } catch (error) {
      console.log(error);
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
<<<<<<< HEAD
  const updateCompanyPinCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyPinCode(e.target.value);
  };
  const updateHandler = () => {
    handleClick();
    updateMyCompanyData();
  };
  const updateCompanyCountry = (event: SelectChangeEvent) => {
    setCompanyCountry(event.target.value as string);
  };
  const updateCompanyState = (event: SelectChangeEvent) => {
    setCompanyState(event.target.value as string);
  };
  const updateCompanyGender = (event: SelectChangeEvent) => {
    setCompanyGender(event.target.value as string);
  };
  const getCompanyStatusValue = (event: SelectChangeEvent) => {
    setCompanyStatus(event.target.value as string);
  };
=======
>>>>>>> dev

  const getCompanyStatusValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCompanyStatus(value);
  };
  return (
    <Box ml={1.5} pb={1} mr={2.5} className={classes.root}>
      <Grid container>
        <Grid item xs={12} ml={5} mt={2}>
          <Typography fontSize="1.1rem">Create New Company</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={3} paddingLeft={5}>
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
                id="mobile"
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

<<<<<<< HEAD
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
              <FormControl fullWidth size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={companyCountry}
                  onChange={updateCompanyCountry}
                >
                  {countrySelect.map((f) => {
                    return <MenuItem value={f.lable}>{f.country}</MenuItem>;
                  })}
                </Select>
              </FormControl>
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
              <FormControl fullWidth size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={companyState}
                  onChange={updateCompanyState}
                >
                  {stateSelect.map((f) => {
                    return <MenuItem value={f.lable}>{f.state}</MenuItem>;
                  })}
                </Select>
              </FormControl>
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
              <FormControl fullWidth size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="gender"
                  value={companyGender}
                  onChange={updateCompanyGender}
                >
                  {genderSelect.map((f) => {
                    return <MenuItem value={f.lable}>{f.gender}</MenuItem>;
                  })}
                </Select>
              </FormControl>
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
              <FormControl fullWidth size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={companyStatus}
                  onChange={getCompanyStatusValue}
                >
                  <MenuItem value="NEW">NEW</MenuItem>
                  <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                  <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                </Select>
              </FormControl>
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
=======
          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Company Status</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  value={companyStatus}
                  onChange={getCompanyStatusValue}
                  freeSolo
                  id="company-status"
                  disableClearable
                  size="small"
                  options={statusSet?.map((option: any) => option)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container mt={5}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={7}>
                      <Link href={"/company"}>
                        <Button variant="contained" size="small">
                          Cancel
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={2} ml={1}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={updateMyCompanyData}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
>>>>>>> dev
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompanyCreateComponent;
