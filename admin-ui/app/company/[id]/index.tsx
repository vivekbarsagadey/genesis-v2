"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Grid, Typography, TextField, Box, Button, FormControl, Select, MenuItem } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ICompany from "../company.model";
import { createCompany, updateCompany } from "../services/CompanyServices";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";



const useStyles = makeStyles({
  errormessage: {
    marginTop: "0",
    color: "red",
    fontWeight: "lighter",
    fontSize: "15px",
  },
  buttons: {
    textDecoration: "none !important",
  },
  box: {
    // background:'#E5E5E5',
  },
});

        
const country = [
  { id: 1, name: "India", label: "India" },
  { id: 2, name: "Australia", label: "Australia" },
  { id: 3, name: "America", label: "America" },
  { id: 4, name: "Spain", label: "Spain" },
  { id: 5, name: "US", label: "US" },
  { id: 5, name: "UK", label: "UK" },
];


const state = [
  { id: 1, name: "Maharastra", label: "Maharastra" },
  { id: 2, name: "Rajasthan", label: "Rajasthan" },
  { id: 3, name: "Madhya Pradesh", label: "Madhya Pradesh" },
  { id: 4, name: "Uttar Pradesh", label: "Uttar Pradesh" },
  { id: 5, name: "GOA", label: "GOA" },
  { id: 6, name: "Assam", label: "Assam" },
  { id: 7, name: "Kerala", label: "Kerala" },
];

interface ICompanyProp {
  company: ICompany | undefined;
}

const schema = yup
  .object({
    name: yup.string().required("Comapany Name is required"),
    mobile: yup
    .string()
    .required("Mobile Number is Required")
    .min(10, "Enter 10-digit Mobile Number")
    .max(10, "Enter Number that's 10 or Less"),
    address: yup.string().required("Address is required"),
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email is required"),
    country: yup.string().required("Country Name is required"),
    state: yup.string().required("State Name is required"),
    city: yup.string().required("City Name is required"),
    pincode: yup.string().required("Pincode is required"),
  })
  .required();

const CompanyComponent = ({ company }: ICompanyProp) => {
  const classes = useStyles();

  const [create, setCreate] = React.useState(false);

  const handleCreate = () => {
    setCreate(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCreate(false);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: company?.name,
      mobile: company?.mobile,
      address: company?.address,
      email: company?.email,
      country: company?.country,
      state: company?.state,
      city: company?.city,
      pincode: company?.pincode,
    },
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
   
    if (company?._id) {
      try {
        const newCompany = {
          _id: company?._id,
          name: data?.name,
          address: data?.address,
          email: data?.email,
          mobile: data?.mobile,
          country: data?.country,
          state: data?.state,
          city: data?.city,
          pinCode: data?.pincode,
        };
        await updateCompany(newCompany);
        router.push("/company");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const _company = {
          name: data?.name,
          mobile: data?.mobile,
          address: data?.address,
          email: data?.email,
          country: data?.country,
          state: data?.state,
          city: data?.city,
          pinCode: data?.pincode,
        };
        await createCompany(_company);
        router.push("/company");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.box}>
          
          <Grid container spacing={2} p={3} >
          <Grid item xs={12} pb={3}>
          <Typography fontWeight='bold' fontSize='30px' noWrap>Create Company</Typography>
          </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Company Name:</Typography>
              <TextField
                {...register("name")}
                size="small"
                placeholder="Company Name"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.name?.message}</p>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Email:</Typography>
              <TextField
                {...register("email")}
                size="small"
                placeholder="Email"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.email?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Phone:</Typography>
              <TextField
                {...register("mobile")}
                size="small"
                placeholder="Mobile"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.mobile?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Address:</Typography>
              <TextField
                {...register("address")}
                placeholder="Address"
                size="small"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Country:</Typography>
              <FormControl fullWidth size="small">
              <Select
                onChange={(e) =>
                  setValue("country", e.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                {country.map((c) => {
                  return (
                    <MenuItem key={c.id} value={c.name}>
                      {c.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
              <p className={classes.errormessage}>{errors.country?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>State:</Typography>
             
                <FormControl fullWidth size="small">
              <Select
                onChange={(event) =>
                  setValue("state", event.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                {state.map((c) => {
                  return (
                    <MenuItem key={c.id} value={c.name}>
                      {c.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>City:</Typography>
              <TextField
                {...register("city")}
                placeholder="City"
                size="small"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography>Pincode:</Typography>
              <TextField
                {...register("pincode")}
                placeholder="Pincode"
                size="small"
                fullWidth
              />
              <p className={classes.errormessage}>{errors.address?.message}</p>
            </Grid>
           

            <Grid item xs={12} textAlign="right">
              <Link href={"/company"} className={classes.buttons}>
                <Button variant="contained" style={{ marginRight: "4px",background:'#FFC107' }}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="contained" onClick={handleCreate} style={{background:'#FFC107'}}>
                Submit
              </Button>

              <Snackbar
                    open={create}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                       Sucessfully...
                    </Alert>
                  </Snackbar>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default CompanyComponent;
<<<<<<< HEAD
'use client';
import { Button, Grid, TextField, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { updateCompany } from '../../../services/company.action';
import { baseStyle, colors } from '../../../themes';
import { countrySelect, genderSelect, stateSelect, } from '../graphdata/graph.data';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
const useStyles = makeStyles({
  buttonStyle: { width: '73%' },
  gridContainer: { display: 'flex', alignItems: 'center' },
  root: { backgroundColor: colors.white, borderRadius: baseStyle.borderRadius.small },
  headerChild: { color: 'red' },
  mainHeader: { display: 'flex', flexDirection: 'row' },
});
=======
"use client";
import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box/Box";
import { Status } from "../models";
import Autocomplete from "@mui/material/Autocomplete";
import { updateCompany } from "../../../services/company.action";
>>>>>>> dev

type CompanyComponentProps = {
  company: any;
  id: string;
};



function CompanyEditComponent({ company, id }: CompanyComponentProps) {
  const classes = useStyles();
  const router = useRouter();
  const [ownerName, setOwnerName] = useState(company.ownerName);
  const [companyName, setCompanyName] = useState(company.name);
  const [companyEmail, setCompanyEmail] = useState(company.email);
  const [companyMobile, setCompanyMobile] = useState(company.mobile);
  const [companyAddress, setCompanyAddress] = useState(company.address);
  const [companyWebsite, setCompanyWebsite] = useState(company.website);
  const [companyStatus, setCompanyStatus] = useState(company.status);
<<<<<<< HEAD
  const [companyGender, setCompanyGender] = useState(company.gender);
  const [companyState, setCompanyState] = useState(company.state);
  const [companyCountry, setCompanyCountry] = useState(company.country);
  const [companyPinCode, setCompanyPinCode] = useState(company.pincode);
  const [alert, setAlert] = useState(false);
=======

  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
>>>>>>> dev

  const updateCompanyEditedData = async () => {
    try {
      const body = {
        ownerName,
        name: companyName,
        email: companyEmail,
        mobile: companyMobile,
        address: companyAddress,
        website: companyWebsite,
        status: companyStatus,
        state: companyState,
        country: companyCountry,
        gender: companyGender,
      };
      await updateCompany(id, body);
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
  const updateCompanyPinCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyPinCode(e.target.value);
  };
  const updateCompanyAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyAddress(e.target.value);
  };
  const updateCompanyWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyWebsite(e.target.value);
  };
<<<<<<< HEAD
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
    updateCompanyEditedData();
  };
  return (
    <Box ml={1.5} pb={1} mr={2.5} className={classes.root}>
      <Grid container>
        <Grid item xs={12} ml={5} mt={2}>
          <Typography fontSize="1.1rem">Edit Company</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={3} paddingLeft={5}>
        <Grid item xs={6}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={3} className={classes.mainHeader}>
              <Typography>Name</Typography>
              <span className={classes.headerChild}>*</span>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField id="owner-name" placeholder="Owner Name" variant="outlined"
                size="small" fullWidth value={ownerName} onChange={updateOwnerName} />
            </Grid>
=======

  const getCompanyStatusValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCompanyStatus(value);
  };

  const updateCompanyEditedData = async () => {
    try {
      const body = {
        firstName: firstName,
        lastName: lastName,
        name: companyName,
        email: companyEmail,
        mobile: companyPhone,
        address: companyAddress,
        website: companyWebsite,
        status:companyStatus,
      };
      await updateCompany(id, body);
      await router.push("/company");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Edit Company Details</Typography>
>>>>>>> dev
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
              <TextField id="company-name" placeholder="Company Name"
                variant="outlined" size="small" fullWidth value={companyName} onChange={updateCompanyName} />
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
              <TextField id="email" placeholder="Email"
                variant="outlined" size="small" fullWidth value={companyEmail} onChange={updateCompanyEmail} />
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
              <TextField id="Mobile" placeholder="Mobile" variant="outlined"
                size="small" fullWidth value={companyMobile} onChange={updateCompanyMobile} />
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
              <TextField id="address" placeholder="Address" variant="outlined"
                size="small" fullWidth value={companyAddress} onChange={updateCompanyAdress} />
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
              <TextField id="pincode" placeholder="Pin Code" variant="outlined"
                size="small" fullWidth value={companyPinCode} onChange={updateCompanyPinCode}
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
                  labelId="select-label"
                  id="country"
                  value={companyCountry}
                  onChange={updateCompanyCountry}
                >
                  {countrySelect.map((f) => {
                    return <MenuItem value={f.lable}>{f.country}</MenuItem>;
                  })}
                </Select>
              </FormControl>
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
>>>>>>> dev
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
                  labelId="select-label"
                  id="state"
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
                <Select labelId="select-label" id="gender"
                  value={companyGender} onChange={updateCompanyGender}>
                  {genderSelect.map((f) => {
                    return <MenuItem value={f.lable}>{f.gender}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={3} className={classes.mainHeader}>
              <Typography>Company Status</Typography>
              <span className={classes.headerChild}>*</span>
            </Grid>
            <Grid item xs={2}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <Select labelId="select-label" id="status"
                  value={companyStatus} onChange={getCompanyStatusValue}>
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
              <TextField id="website" placeholder="Website" variant="outlined" size="small"
                fullWidth value={companyWebsite} onChange={updateCompanyWebsite} />
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
                <Button variant="contained" onClick={updateHandler} style={{ width: '83%' }}>
                  Save
                </Button>
                <Snackbar open={alert} autoHideDuration={8000} onClose={handleClose}>
                  <Alert onClose={handleClose} sx={{ width: '100%' }}>
                    Company Edit Sucessfully...
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
export default CompanyEditComponent;
