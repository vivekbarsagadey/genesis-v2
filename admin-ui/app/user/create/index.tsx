"use client";
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
import { createUser } from "../../../services/user.action";
import { countrySelect, stateSelect, citySelect } from "../graphdata/graphdata.data";
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
const genderType = [{ title: "Male" }, { title: "Female" }];
const UserCreateComponent = () => {
  const classes = useStyles();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [gender, setGender] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userZipCode, setUserZipCode] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  // POST call
  const updateMyUserData = async () => {
    try {
      const body = {
        firstName: userFirstName,
        lastName: userLastName,
        gender: gender,
        email: userEmail,
        age: userAge,
        mobile: userPhone,
        address: userAddress,
        status: userStatus,
        zipCode: userZipCode,
        city: userCity,
        state: userState,
        country: userCountry,
      };
      await createUser(body);
      await router.push("/user");
    } catch (error) {
      console.error(error);
    }
  };
  const updateUserFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFirstName(e.target.value);
  };
  const updateUserLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLastName(e.target.value);
  };
  const updateUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.target.value);
  };
  const updateUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const updateUserPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
  };
  const updateUserAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAddress(e.target.value);
  };
  const updateUserZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserZipCode(e.target.value);
  };
  const updateUserChange = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setGender(value);
  };
  const updateUserCountry = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setUserCountry(value);
  };
  const updateUserState = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setUserState(value);
  };
  const updateUserCity = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setUserCity(value);
  };
  const updateUserStatus = (
    e: React.SyntheticEvent<Element, Event>,value : string
  ) => {
    setUserStatus(value);
  };
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
          <Typography fontSize={"1.2rem"}>Create New User</Typography>
        </Grid>
      </Grid>
      <Grid container>
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
                      value={userFirstName}
                      onChange={updateUserFirstName}
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
                      value={userLastName}
                      onChange={updateUserLastName}
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
                        onChange={updateUserChange}
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
                      value={userAge}
                      onChange={updateUserAge}
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
                      value={userEmail}
                      onChange={updateUserEmail}
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
                      value={userPhone}
                      onChange={updateUserPhone}
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
                      value={userStatus}
                      onChange={updateUserStatus}
                      freeSolo
                      id="user-status"
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
                          placeholder="Select Status"
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
                      value={userAddress}
                      onChange={updateUserAddress}
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
                      value={userZipCode}
                      onChange={updateUserZipCode}
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
                      value={userCity}
                      onChange={updateUserCity}
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
                      value={userState}
                      onChange={updateUserState}
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
                        value={userCountry}
                        onChange={updateUserCountry}
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={countrySelect.map((option) => option.country)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                            placeholder="Select Country"
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
                          <Link
                            href={"/user"}
                            style={{ textDecoration: "none" }}
                          >
                            <Button variant="contained" size="small">
                              Cancel
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={updateMyUserData}
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
export default UserCreateComponent;
