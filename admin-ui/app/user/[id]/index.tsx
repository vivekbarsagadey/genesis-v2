'use client';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { updateUser } from '../../../services/user.action';
import { IRole } from '../../roles/models';
import { citySelect, countrySelect } from '../graphdata/graphdata.data';
import { Status } from '../models';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const genderType = [{ title: 'Male' }, { title: 'Female' }];
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

type UserComponentProps = {
  users: any;
  id: string;
};
const UserEditComponent = ({ users, id }: UserComponentProps) => {
  const classes = useStyles();
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
  const [roleList, setRoleList] = useState([]);
  const [role, setRole] = useState<String>(users.role);
  const [alert, setAlert] = useState(false);
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const router = useRouter();
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
        role: role,
      };
      await updateUser(id, body);
      await router.push('/user');
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
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setUserState(value);
  };
  const updateUserCity = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setUserCity(value);
  };

  const updateUserChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setGender(value);
  };
  const updateUserCountry = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setUserCountry(value);
  };
  const updateUserStatus = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setUserStatus(value);
  };
  const updateRole = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setRole(value);
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
  const handleClick = () => {
    setAlert(true);
  };
  const updateHandler = () => {
    handleClick();
    updateEditMyUserData();
  };

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles`);
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setRoleList(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} mt={2} ml={2}>
            <Typography fontSize={'1.2rem'}>Edit User</Typography>
          </Grid>
        </Grid>

        <Grid container display="flex">
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
                          disablePortal
                          value={gender}
                          onChange={updateUserChange}
                          size="small"
                          id="gender"
                          options={genderType?.map((option) => option.title)}
                          renderInput={(params) => <TextField {...params} />}
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
                        disablePortal
                        value={userStatus}
                        onChange={updateUserStatus}
                        size="small"
                        id="status"
                        options={statusSet?.map((option: any) => option)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6} mt={2}>
                  <Grid container display="flex" alignItems="center">
                    <Grid item xs={4}>
                      <Typography>Role</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack>
                        <Autocomplete
                          disablePortal
                          onChange={updateRole}
                          size="small"
                          id="role"
                          options={roleList?.map((item: IRole) => item.name)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
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
                      <Typography>City</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Autocomplete
                        disablePortal
                        value={userCity}
                        onChange={updateUserCity}
                        size="small"
                        id="city"
                        options={citySelect.map((option) => option.city)}
                        renderInput={(params) => <TextField {...params} />}
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
                        disablePortal
                        value={userState}
                        onChange={updateUserState}
                        size="small"
                        id="state"
                        options={countrySelect.map((option) => option.country)}
                        renderInput={(params) => <TextField {...params} />}
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
                          disablePortal
                          value={userCountry}
                          onChange={updateUserCountry}
                          size="small"
                          id="country"
                          options={countrySelect.map(
                            (option) => option.country
                          )}
                          renderInput={(params) => <TextField {...params} />}
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
                        <Link href={'/user'} style={{ textDecoration: 'none' }}>
                          <Button
                            variant="contained"
                            className={classes.buttonStyle}
                          >
                            Cancel
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          onClick={updateHandler}
                          className={classes.buttonStyle}
                        >
                          Save
                        </Button>
                        <Snackbar
                          open={alert}
                          autoHideDuration={8000}
                          onClose={handleClose}
                        >
                          <Alert onClose={handleClose} sx={{ width: '100%' }}>
                            User Edit Sucessfully...
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

export default UserEditComponent;
