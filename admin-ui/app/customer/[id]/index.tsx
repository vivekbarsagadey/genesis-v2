"use client";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  Avatar,Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateCustomer } from "../../../services/customer.action";
import { countrySelect, stateSelect, citySelect } from "../grpahdata/graph.data";
import { Status } from "../models";

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
});

type CustomerComponentProps = {
  customers: any;
  id: string;
};
const CustomerEditComponent = ({ customers, id }: CustomerComponentProps) => {
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
  const [customerProfilePic, setCustomerProfilePic] = useState(
    customers.profilePic
  );
  const [hover, setHover] = useState(false);

  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const router = useRouter();
  const classes = useStyles();
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
        profilePic: customerProfilePic,
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
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCustomerState(value);
  };
  const updateCustomerCity = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCustomerCity(value);
  };
  const updateCustomerProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerProfilePic(e.target.value);
  };
  const updateCustomerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGender(value);
  };
  const updateCustomerCountry = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCustomerCountry(value);
  };
  const updateCustomerStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCustomerStatus(value);
  };
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div>
      <Box>
        <Grid container>
          <Grid item xs={12} mt={2} ml={2}>
            <Typography fontSize={"1.2rem"}>Edit Customer</Typography>
          </Grid>
        </Grid>

        <Grid container style={{ display: "flex" }}>
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
                              onClick={updateEditMyCustomerData}
                            >
                              Save
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CustomerEditComponent;
