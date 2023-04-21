"use client";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Snackbar from "@mui/material/Snackbar";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { updateCustomer } from "../../../services/customer.action";
import {
  citySelect,
  countrySelect,
  stateSelect,
} from "../grpahdata/graph.data";
import { Status } from "../models";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const genderType = [{ title: "Male" }, { title: "Female" }];
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
  buttonStyle:{
    width:'73%'
   }
});

type CustomerComponentProps = {
  customers: any;
  id: string;
};
const CustomerEditComponent = ({ customers, id }: CustomerComponentProps) => {
  const classes = useStyles();
  const [customerFirstName, setCustomerFirstName] = useState(
    customers.firstName
  );
  const [customerLastName, setCustomerLastName] = useState(customers.lastName);
  const [gender, setGender] = useState(customers.gender);
  const [customerAge, setCustomerAge] = useState(customers.age);
  const [customerEmail, setCustomerEmail] = useState(customers.email);
  const [customerPhone, setCustomerPhone] = useState(customers.mobile);
  const [customerAddress, setCustomerAddress] = useState(customers.address);
  const [customerStatus, setCustomerStatus] = useState(customers.status);
  const [customerZipCode, setCustomerZipCode] = useState(customers.zipCode);
  const [customerCity, setCustomerCity] = useState(customers.city);
  const [customerState, setCustomerState] = useState(customers.state);
  const [customerCountry, setCustomerCountry] = useState(customers.country);
  const [alert, setAlert] = useState(false);
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const router = useRouter();
  const updateEditMyCustomerData = async () => {
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
      await updateCustomer(id, body);
      await router.push("/customer");
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
  const updateCustomerState = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setCustomerState(value);
  };
  const updateCustomerCity = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setCustomerCity(value);
  };
  const updateCustomerChange = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setGender(value);
  };
  const updateCustomerCountry = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setCustomerCountry(value);
  };
  const updateCustomerStatus = (
    e: React.SyntheticEvent<Element, Event>,value : string
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
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };
  const updateHandler = () => {
    handleClick();
    updateEditMyCustomerData();
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} mt={2} ml={2}>
            <Typography fontSize={"1.2rem"}>Edit Customer</Typography>
          </Grid>
        </Grid>

        <Grid container style={{ display: "flex" }}>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }} padding={2}>
              <Grid container spacing={2}>
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
                      <Stack spacing={2}>
                        <Autocomplete
                          value={gender}
                          onChange={updateCustomerChange}
                          freeSolo
                          id="gender"
                          disableClearable
                          size="small"
                          options={genderType?.map((option) => option.title)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                              }}
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
                      <Autocomplete
                        value={customerCity}
                        onChange={updateCustomerCity}
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={citySelect.map((option) => option.city)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                            placeholder="Select City"
                          />
                        )}
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
                      <Autocomplete
                        value={customerState}
                        onChange={updateCustomerState}
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={stateSelect.map((option) => option.state)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                            placeholder="Select State"
                          />
                        )}
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
                      <Stack spacing={2}>
                        <Autocomplete
                          value={customerCountry}
                          onChange={updateCustomerCountry}
                          freeSolo
                          id="country"
                          disableClearable
                          size="small"
                          options={countrySelect?.map(
                            (option) => option.country
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                              }}
                              placeholder="Select Gender"
                            />
                          )}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container mt={5}>
                  <Grid item xs={8.6}></Grid>
                  <Grid item xs={3.4}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Link
                          href={"/customer"}
                          style={{ textDecoration: "none" }}
                        >
                          <Button variant="contained" className={classes.buttonStyle}>
                            Cancel
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          onClick={updateHandler}
                          className={classes.buttonStyle}                        >
                          Save
                        </Button>
                        <Snackbar
                          open={alert}
                          autoHideDuration={8000}
                          onClose={handleClose}
                        >
                          <Alert onClose={handleClose} sx={{ width: "100%" }}>
                            Customer Edit Sucessfully...
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
    </>
  );
};

export default CustomerEditComponent;
