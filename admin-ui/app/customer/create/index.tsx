<<<<<<< HEAD
'use client';

import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

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

function CustomerCreateComponent() {
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
=======
"use client";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createCustomer } from "../../../services/customer.action";
import { Status } from "../models";

const useStyles = makeStyles({
  avtar: {
    opacity: "1",
    "&:hover": {
      opacity: "0.8",
      color: "black",
    },
    width: "120px",
    height: "125px",
  },
});

const CustomerCreateComponent = () => {
  const classes = useStyles();
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [gender, setGender] = useState("");
  const [customerAge, setCustomerAge] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerStatus, setCustomerStatus] = useState("Active");
  const [customerZipCode, setCustomerZipCode] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [customerProfilePic, setCustomerProfilePic] = useState("");
  const [hover, setHover] = useState(false);
>>>>>>> dev

  const router = useRouter();
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  // POST call
  const updateMyCustomerData = async () => {
    try {
      const body = {
        firstName: customerFirstName,
        lastName: customerLastName,
<<<<<<< HEAD
        gender,
=======
        gender: gender,
>>>>>>> dev
        email: customerEmail,
        age: customerAge,
        mobile: customerPhone,
        address: customerAddress,
        status: customerStatus,
        zipCode: customerZipCode,
        city: customerCity,
        state: customerState,
        country: customerCountry,
<<<<<<< HEAD
      };
      await createCustomer(body);
      await router.push('/customer');
=======
        profilePic: customerProfilePic,
      };
      await createCustomer(body);
      await router.push("/customer");
>>>>>>> dev
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
<<<<<<< HEAD

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
=======
  const updateCustomerCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerCity(e.target.value);
  };
  const updateCustomerState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerState(e.target.value);
  };
  const updateCustomerCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerCountry(e.target.value);
  };
  const updateCustomerProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerProfilePic(e.target.value);
  };
  const customerChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const updateCustomerStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
>>>>>>> dev
    value: string
  ) => {
    setCustomerStatus(value);
  };
<<<<<<< HEAD
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
    <Box padding={3}>
      <Card elevation={0}>
        <Grid container>
          <Grid item xs={12} mt={2} ml={5}>
            <Typography fontSize="1.2rem">Create New Customer</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }} paddingLeft={5}>
              <Grid container spacing={1} mt={1}>
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
                            <TextField
                              {...params}
                              placeholder="Select Gender"
                            />
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
                          options={countrySelect.map(
                            (option) => option.country
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select Country"
                            />
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
                <Grid container my={5}>
                  <Grid item xs={8.6} />
                  <Grid item xs={3.4}>
                    <Grid container>
                      <Grid item xs={5.3}>
                        <Link
                          href="/customer"
                          style={{ textDecoration: 'none' }}
                        >
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
                            Customer Created Sucessfully...
                          </Alert>
                        </Snackbar>
=======

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} mt={2} ml={2}>
          <Typography fontSize={"1.2rem"}>Create New Customer</Typography>
        </Grid>
      </Grid>
      <Grid container style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={2}>
          <Grid item xs={4}>
            <div className="App">
              <input
                type="file"
                id="upload"
                accept="image/*"
                style={{ display: "none" }}
                value={customerProfilePic}
                onChange={updateCustomerProfilePic}
              />
              <label htmlFor="upload">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="Image"
                  type="submit"
                >
                  <Avatar
                    id="avatar"
                    onMouseOver={handleMouseIn}
                    onMouseOut={handleMouseOut}
                    className={classes.avtar}
                  >
                    {hover ? (
                      <span>
                        <Typography variant="body2">Upload</Typography>
                        <CameraAltIcon />
                      </span>
                    ) : (
                      ""
                    )}
                  </Avatar>
                </IconButton>
              </label>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ flexGrow: 1 }} padding={2}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>First Name</Typography>
                  </Grid>
                  <Grid item xs={1}>
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
                  <Grid item xs={4}>
                    <Typography>Last Name</Typography>
                  </Grid>
                  <Grid item xs={1}>
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
                  <Grid item xs={4}>
                    <Typography>Gender</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        onChange={customerChange}
                        size="small"
                      >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>Age</Typography>
                  </Grid>
                  <Grid item xs={1}>
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
                  <Grid item xs={4}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={1}>
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
                  <Grid item xs={4}>
                    <Typography>Phone</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="phone"
                      placeholder="Phone"
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
                  <Grid item xs={4}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      value={customerStatus}
                      onChange={updateCustomerStatus}
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

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={1}>
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
                  <Grid item xs={4}>
                    <Typography>Zip Code</Typography>
                  </Grid>
                  <Grid item xs={1}>
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

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>City</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="city"
                      placeholder="City"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerCity}
                      onChange={updateCustomerCity}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>State</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="state"
                      placeholder="State"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={customerState}
                      onChange={updateCustomerState}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>Country</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={customerCountry}
                        onChange={updateCustomerCountry}
                        size="small"
                      >
                        <MenuItem value={"India"}>India</MenuItem>
                        <MenuItem value={"Australia"}>Australia</MenuItem>
                        <MenuItem value={"America"}>America</MenuItem>
                        <MenuItem value={"Spain"}>Spain</MenuItem>
                        <MenuItem value={"US"}>US</MenuItem>
                        <MenuItem value={"UK"}>UK</MenuItem>
                      </Select>
                    </FormControl>
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
                          <Link href={"/customer"}>
                            <Button variant="contained" size="small">
                              Cancel
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={2} ml={1}>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={updateMyCustomerData}
                          >
                            Save
                          </Button>
                        </Grid>
>>>>>>> dev
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
<<<<<<< HEAD
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
=======
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
>>>>>>> dev

export default CustomerCreateComponent;
