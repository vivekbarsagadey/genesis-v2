"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Link from "next/link";
import { useState } from "react";
import { Status } from "../models";
import { useRouter } from "next/navigation";
import { createCustomer } from "../../../services/customer/customer.action";

const CustomerCreateComponent = () => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [gender, setGender] = useState("");
  const [customerAge, setCustomerAge] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerWebsite, setCustomerWebsite] = useState("");
  const [customerStatus, setCustomerStatus] = useState("Active");
  const [customerZipCode, setCustomerZipCode] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [customerDateOfBirth, setCustomerDateOfBirth] = useState("");
  const [customerProfilePic, setCustomerProfilePic] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

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
        mobile: customerPhone,
        address: customerAddress,
        website: customerWebsite,
        status: customerStatus,
        zipCode:customerZipCode,
        city:customerCity,
        state:customerState,
        country:customerCountry,
        dateOfBirth:customerDateOfBirth,
        pic:customerProfilePic,
      };
      //  console.log("this is body", body)
      await createCustomer(body);
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
  

  const getCompanyStatusValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCompanyStatus(value);
  };

  return (
    <Box>
      <Grid container style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={2}>
          <Typography
            style={{ background: "red", height: "10rem", borderRadius: "50%" }}
          >
            Image
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ flexGrow: 1 }} padding={4}>
            <Grid container>
              <Grid item xs={12}>
                <Typography fontSize={"1.2rem"}>Create New Customer</Typography>
              </Grid>
            </Grid>
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
                      // value={ownerFirstName}
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
                      // value={ownerLastName}
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
                        onChange={handleChange}
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
                      id="email"
                      placeholder="Email"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyEmail}
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
                      // value={companyEmail}
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
                      // value={companyPhone}
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
                    <TextField
                      id="address"
                      placeholder="Address"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyAddress}
                      onChange={updateCustomerAdress}
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
                      id="website"
                      placeholder="Website"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyWebsite}
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
                      id="website"
                      placeholder="Zip Code"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyWebsite}
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
                      id="website"
                      placeholder="City"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyWebsite}
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
                      id="website"
                      placeholder="State"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyWebsite}
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
                    <TextField
                      id="website"
                      placeholder="Country"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={companyWebsite}
                      onChange={updateCustomerCountry}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} mt={2}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>Date Of Birth</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker />
                    </LocalizationProvider>
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
                            onClick={updateMyCustomerData}
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
  );
};

export default CustomerCreateComponent;
