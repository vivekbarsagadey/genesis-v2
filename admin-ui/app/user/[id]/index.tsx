"use client";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {Avatar,Box,Button,Grid,IconButton,Stack,TextField,Typography} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateUser } from "../../../services/user.action";
import {citySelect,countrySelect,stateSelect,} from "../graphdata/graphdata.data";
import { Status } from "../models";

<<<<<<< HEAD
const genderType = [{ title: "Male" }, { title: "Female" }];
=======

interface IUserProp {
  user: IUser | undefined;
}
>>>>>>> 5ea9868b9c91d9d66c81f7ce7ff5573ea14de14d

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

type UserComponentProps = {
  users: any;
  id: string;
};
const UserEditComponent = ({ users, id }: UserComponentProps) => {
  const [userFirstName, setUserFirstName] = useState(users.firstName);
  const [userLastName, setUserLastName] = useState(users.lastName);
  const [gender, setGender] = useState(users.gender);
  const [userAge, setUserAge] = useState(users.age);
  const [userEmail, setUserEmail] = useState(users.email);
  const [userPhone, setUserPhone] = useState(users.mobile);
  const [userAddress, setUserAddress] = useState(users.address);
  const [userStatus, setUserStatus] = useState(users.status);
  const [userZipCode, setUserZipCode] = useState(users.zipCode);
  const [userCity, setUserCity] = useState(users.city);
  const [userState, setUserState] = useState(users.state);
  const [userCountry, setUserCountry] = useState(users.country);
  const [userProfilePic, setUserProfilePic] = useState(users.profilePic);
  const [hover, setHover] = useState(false);
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const router = useRouter();
  const classes = useStyles();
  const updateEditMyUserData = async () => {
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
        profilePic: userProfilePic,
      };
      await updateUser(id, body);
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
  const updateUserState = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setUserState(value);
  };
  const updateUserCity = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setUserCity(value);
  };
  const updateUserProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfilePic(e.target.value);
  };
  const updateUserChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGender(value);
  };
  const updateUserCountry = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setUserCountry(value);
  };
  const updateUserStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
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
    <>
<<<<<<< HEAD
      <Box>
        <Grid container>
          <Grid item xs={12} mt={2} ml={2}>
            <Typography fontSize={"1.2rem"}>Edit User</Typography>
          </Grid>
        </Grid>

        <Grid container style={{ display: "flex" }}>
          <Grid item xs={2}>
            <Grid item xs={4}>
              <>
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  style={{ display: "none" }}
                  value={userProfilePic}
                  onChange={updateUserProfilePic}
                />
                <label htmlFor="upload">
                  <IconButton color="primary"
                    aria-label="upload picture" component="Image" type="submit">
                    <Avatar id="avatar" onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}
                     className={classes.avtar}>
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
              </>
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
                      <TextField id="first-name" placeholder="First Name" variant="outlined" 
                      size="small" fullWidth value={userFirstName} onChange={updateUserFirstName}/>
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
                      <TextField id="last-name" placeholder="Last Name" variant="outlined"
                        size="small" fullWidth value={userLastName} onChange={updateUserLastName}/>
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
                        <Autocomplete value={gender} onChange={updateUserChange} freeSolo id="gender" 
                        disableClearable size="small" options={genderType?.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                              }} placeholder="Select Gender"/>)}/>
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
                      <TextField id="age" placeholder="Age" variant="outlined"
                        size="small" fullWidth value={userAge} onChange={updateUserAge} />
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
                      <TextField id="email" placeholder="Email" variant="outlined" size="small"
                        fullWidth value={userEmail} onChange={updateUserEmail} />
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
                      <TextField id="phone" placeholder="Phone" variant="outlined" size="small"
                        fullWidth value={userPhone} onChange={updateUserPhone} />
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
                      <Autocomplete value={userStatus} onChange={updateUserStatus}
                        freeSolo id="user-status" disableClearable size="small"
                        options={statusSet?.map((option: any) => option)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputProps={{
                              ...params.InputProps,
                              type: "search"}}/>)}/>
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
                      <TextField id="address" placeholder="Address" variant="outlined"
                        size="small" fullWidth value={userAddress} onChange={updateUserAddress} />
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
                      <TextField id="zipcode" placeholder="Zip Code" variant="outlined" size="small"
                        fullWidth value={userZipCode} onChange={updateUserZipCode}/>
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
                      <Autocomplete value={userCity} onChange={updateUserCity} freeSolo
                        id="free-solo-2-demo" disableClearable
                        options={citySelect.map((option) => option.city)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",}} placeholder="Select City"/>)}/>
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
                      <Autocomplete value={userState} onChange={updateUserState} freeSolo
                        id="free-solo-2-demo" disableClearable options={stateSelect.map((option) => option.state)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",}} placeholder="Select State"/>)}/>
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
                        <Autocomplete value={userCountry} onChange={updateUserCountry}
                          freeSolo id="country" disableClearable
                          size="small" options={countrySelect?.map(
                            (option) => option.country )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                              }}
                              placeholder="Select Gender"/>)}/>
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
                            <Link href={"/user"}>
                              <Button variant="contained" size="small">
                                Cancel
                              </Button>
                            </Link>
                          </Grid>
                          <Grid item xs={2} ml={1}>
                            <Button
                              variant="contained"
                              size="small"
                              onClick={updateEditMyUserData}
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
=======
      <Typography variant="h6" pb={3}>
        Create Form
      </Typography>

      <Grid container p={4}>
        <Grid item xs={12} mb={3} pl={1}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>First Name</Typography>
          <TextField fullWidth {...register("firstName")} size="small" />
          <Typography>{errors.firstName?.message}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Last Name</Typography>
          <TextField fullWidth {...register("lastName")} size="small" />
          <Typography>{errors.lastName?.message}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Email</Typography>
          <TextField
            type="email"
            fullWidth
            {...register("email")}
            size="small"
          />
          <Typography>{errors.email?.message}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Mobile</Typography>
          <TextField fullWidth {...register("mobile")} size="small" />
          <Typography>{errors.mobile?.message}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Address</Typography>
          <TextField fullWidth {...register("address")} size="small" />
          <Typography>{errors.address?.message}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>State</Typography>

          <span>{errors.country?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>Country</Typography>
          <span>{errors.country?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} pl={1} pr={1}>
          <Typography>PinCode</Typography>
          <TextField fullWidth {...register("pinCode")} size="small" />
          <Typography>{errors.pinCode?.message}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} mt={2} pl={1} pr={1}>
          <Grid container>
            <Grid
              item
              xs={12}
             
            >
              <Link href={"/user"}>
                <Button variant="contained">Close</Button>
              </Link>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
>>>>>>> 5ea9868b9c91d9d66c81f7ce7ff5573ea14de14d
    </>
  );
};

export default UserEditComponent;
