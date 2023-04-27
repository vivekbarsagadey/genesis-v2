'use client';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createUser } from '../../../services/user.action';
import { IRole } from '../../roles/models';
import {
  citySelect,
  countrySelect,
  stateSelect,
} from '../graphdata/graphdata.data';
import { Status } from '../models';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
};

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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const genderType = [{ title: 'Male' }, { title: 'Female' }];
const UserCreateComponent = () => {
  const classes = useStyles();
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [gender, setGender] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userStatus, setUserStatus] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [hover, setHover] = useState(false);
  const [alert, setAlert] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [role, setRole] = useState<String>('');
  const [value, setValue] = useState();
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const [securityModalOpen, setSecurityModalOpen] = React.useState(false);
  const securityModal = () => setSecurityModalOpen(true);
  const securityhandleClose = () => setSecurityModalOpen(false);

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
        city: userCity,
        state: userState,
        country: userCountry,
        name: role,
        newPassword: newPassword,
        oldPassword: oldPassword,
      };
      await createUser(body);
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
  const updateUserOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };
  const updateUserNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
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
  const updateUserStatus = (event: SelectChangeEvent) => {
    setUserStatus(event.target.value as string);
  };

  const updateRole = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setRole(value);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
    updateMyUserData();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
    <Box>
      <Grid container>
        <Grid item xs={12} mt={1} ml={2}>
          <Typography fontSize={'1.2rem'}>Create New User</Typography>
        </Grid>
      </Grid>
      <Grid container>
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
              <Grid item xs={6} mt={1}>
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
                              type: 'search',
                            }}
                            placeholder="Select Gender"
                          />
                        )}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={1}>
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
              <Grid item xs={6} mt={1}>
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
              <Grid item xs={6} mt={1}>
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
              <Grid item xs={6} mt={1}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Autocomplete
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
                            type: 'search',
                          }}
                          placeholder="Select Status"
                        />
                      )}
                    /> */}
                    <FormControl fullWidth>
                      {/* <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userStatus}
                        onClick={updateUserStatus}
                        size="small"
                      >
                        {statusSet.map((f) => {
                          return <MenuItem value={f}>{f}</MenuItem>;
                        })}
                      </Select> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userStatus}
                        size="small"
                        onChange={updateUserStatus}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={1}>
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
              <Grid item xs={6} mt={1}>
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
                        size="small"
                        onChange={updateRole}
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={roleList?.map((item: IRole) => item.name)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputProps={{
                              ...params.InputProps,
                              type: 'search',
                            }}
                            placeholder="Role"
                          />
                        )}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={1}>
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
                            type: 'search',
                          }}
                          placeholder="Select City"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={1}>
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
                            type: 'search',
                          }}
                          placeholder="Select State"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} mt={1}>
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
                              type: 'search',
                            }}
                            placeholder="Select Country"
                          />
                        )}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Box sx={{ width: '100%' }} mt={1}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="Security"
                      {...a11yProps(0)}
                      onClick={securityModal}
                    />
                    <Tab label="Address" {...a11yProps(1)} />
                    <Tab label="Roles" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} paddingLeft={2}>
                      <Grid item xs={6} mt={1}>
                        <Grid container display="flex" alignItems="center">
                          <Grid item xs={3.5}>
                            <Typography>New Password</Typography>
                          </Grid>
                          <Grid item xs={1.3}>
                            <Typography>:</Typography>
                          </Grid>
                          <Grid item xs={6.3}>
                            <TextField
                              value={oldPassword}
                              onChange={updateUserOldPassword}
                              id="old-password"
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter New Password"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6} mt={1}>
                        <Grid container display="flex" alignItems="center">
                          <Grid item xs={4.2}>
                            <Typography>Confirm Password</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography>:</Typography>
                          </Grid>
                          <Grid item xs={6.3}>
                            <Stack spacing={2}>
                              <FormControl
                                sx={{ m: 1, width: '33ch' }}
                                variant="outlined"
                              >
                                <OutlinedInput
                                  size="small"
                                  id="outlined-adornment-password"
                                  type={showPassword ? 'text' : 'password'}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Address
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Roles
                </TabPanel>
              </Box>
            </Grid>
          </Box>
        </Grid>

        <Grid container>
          <Grid item xs={8.6}></Grid>
          <Grid item xs={3.2}>
            <Grid container>
              <Grid item xs={6}>
                <Link href={'/user'} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" className={classes.buttonStyle}>
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
                    User Created Sucessfully...
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default UserCreateComponent;
