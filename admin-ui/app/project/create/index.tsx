'use client';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Modal,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createCustomer } from '../../../services/customer.action';
import { ICompany } from '../../company/models';
import {
  citySelect,
  countrySelect,
  stateSelect,
} from '../graphdata/graph.data';
import { Status } from '../models';

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
  modalCloseIcon: {
    paddingTop: '1px',
  },
  modalBoxCss: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2%',
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

type IApplicationType = {
  id: number;
  type: string;
  label: string;
};
function ProjectCreate() {
  const [projectName, setProjectName] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [projectStatus, setProjectStatus] = useState('');
  const [projectState, setProjectState] = useState('');
  const [projectCountry, setProjectCountry] = useState('');
  const [customerWeb, setCustomerWeb] = useState(false);
  const [customerMobile, setCustomerMobile] = useState(false);
  const [businessWeb, setBusinessWeb] = useState(false);
  const [businessMobile, setBusinessMobile] = useState(false);
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
  const [customerProfilePic, setCustomerProfilePic] = useState('');
  const [hover, setHover] = useState(false);
  const [alert, setAlert] = useState(false);
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const router = useRouter();
  const [companyList, setCompanyList] = useState([]);
  const [customerModalOpen, setCustomerModalOpen] = React.useState(false);
  const handleCustomerModalOpen = () => setCustomerModalOpen(true);
  const handleCustomerModalClose = () => setCustomerModalOpen(false);

  // POST call
  const updateMyCustomerData = async () => {
    try {
      const body = {
        firstName: customerFirstName,
        lastName: customerLastName,
        gender,
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
      await createCustomer(body);
      await router.push('/project/create');
      handleCustomerModalClose();
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

  const updateCustomerChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setGender(value);
  };
  const updateCustomerCountry = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCustomerCountry(value);
  };
  const updateCustomerState = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCustomerState(value);
  };
  const updateCustomerCity = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCustomerCity(value);
  };

  const updateCustomerStatus = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCustomerStatus(value);
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies`,
    );
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setCompanyList(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  const getApplicationType = (typeRecv: string) => {
    if (typeRecv === 'Business to Customer - Web') {
      setCustomerWeb((s) => !s);
    }
    if (typeRecv === 'Business to Customer - Mobile') {
      setCustomerMobile((s) => !s);
    }
    if (typeRecv === 'Business to Business - Web') {
      setBusinessWeb((s) => !s);
    }
    if (typeRecv === 'Business to Business - Mobile') {
      setBusinessMobile((s) => !s);
    }
  };

  const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const updateCustomerName = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCustomerName(value);
  };

  const getProjectStatusValue = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setProjectStatus(value);
  };

  const updateProjectState = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setProjectState(value);
  };
  const updateProjectCountry = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setProjectCountry(value);
  };

  const updateMyProjectData = async () => {
    if (customerWeb) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        body: JSON.stringify({
          name: projectName,
          customerName,
          status: projectStatus,
          state: projectState,
          country: projectCountry,
          application: 'Business to Customer - Web',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
    }
    if (customerMobile) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        body: JSON.stringify({
          name: projectName,
          status: projectStatus,
          state: projectState,
          country: projectCountry,
          application: 'Business to Customer - Mobile',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
    }
    if (businessWeb) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        body: JSON.stringify({
          name: projectName,
          customerName,
          status: projectStatus,
          state: projectState,
          country: projectCountry,
          application: 'Business to Business - Web',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
    }
    if (businessMobile) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        body: JSON.stringify({
          name: projectName,
          customerName,
          status: projectStatus,
          state: projectState,
          country: projectCountry,
          application: 'Business to Business - Mobile',
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
    }
    router.push('/project');
  };

  const updateHandler = () => {
    handleClick();
    updateMyProjectData();
  };

  return (
    <Box>
      <Paper elevation={0}>
        <Grid item xs={4} mt={5} ml={3}>
          <Typography fontSize="1.2rem">Create New Project</Typography>
        </Grid>
        <Grid container paddingLeft={3} mt={2} spacing={2}>
          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <Typography>Project Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  placeholder="Create Project Name"
                  size="small"
                  fullWidth
                  value={projectName}
                  onChange={updateProjectName}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <Typography>Company Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Stack>
                  <Autocomplete
                    disablePortal
                    onChange={updateCustomerName}
                    id="combo-box-demo"
                    size="small"
                    options={companyList?.map(
                      (company: ICompany) => company.name,
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select Company Name"
                      />
                    )}
                  />
                </Stack>
              </Grid>
              {/* <Link href={"/company/create"}> */}
              <Tooltip title="Add Company" arrow>
                <IconButton onClick={handleCustomerModalOpen}>
                  <PersonAddIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Modal open={customerModalOpen}>
                <Box className={classes.modalBoxCss}>
                  <Grid item xs={8}>
                    <Card>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Typography
                          fontWeight="bold"
                          fontSize="20px"
                          pl={3}
                          pt={3}
                        >
                          Add Company
                        </Typography>
                        <IconButton
                          onClick={handleCustomerModalClose}
                          className={classes.modalCloseIcon}
                        >
                          <HighlightOffIcon />
                        </IconButton>
                      </Grid>
                      <Grid container display="flex" justifyContent="center">
                        <Grid item xs={12}>
                          <Box padding={2} ml={3}>
                            <Grid container spacing={2} mt={2}>
                              <Grid item xs={6}>
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                        onChange={updateCustomerChange}
                                        id="status"
                                        size="small"
                                        options={genderType?.map(
                                          (option) => option.title,
                                        )}
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
                                  <Grid item xs={4}>
                                    <Typography>Status</Typography>
                                  </Grid>
                                  <Grid item xs={1}>
                                    <Typography>:</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Autocomplete
                                      disablePortal
                                      value={customerStatus}
                                      onChange={updateCustomerStatus}
                                      id="status"
                                      size="small"
                                      options={statusSet?.map(
                                        (option: any) => option,
                                      )}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          placeholder="Select Status"
                                        />
                                      )}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={6} mt={2}>
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
                                  <Grid item xs={4}>
                                    <Typography>City</Typography>
                                  </Grid>
                                  <Grid item xs={1}>
                                    <Typography>:</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Autocomplete
                                      disablePortal
                                      value={customerCity}
                                      onChange={updateCustomerCity}
                                      id="city"
                                      size="small"
                                      options={citySelect.map(
                                        (option: any) => option.city,
                                      )}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          placeholder="Select City"
                                        />
                                      )}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={6} mt={2}>
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
                                  <Grid item xs={4}>
                                    <Typography>State</Typography>
                                  </Grid>
                                  <Grid item xs={1}>
                                    <Typography>:</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Autocomplete
                                      disablePortal
                                      value={customerState}
                                      onChange={updateCustomerState}
                                      id="state"
                                      size="small"
                                      options={stateSelect.map(
                                        (option) => option.state,
                                      )}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          placeholder="Select State"
                                        />
                                      )}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={6} mt={2}>
                                <Grid
                                  container
                                  display="flex"
                                  alignItems="center"
                                >
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
                                        value={customerCountry}
                                        onChange={updateCustomerCountry}
                                        id="status"
                                        size="small"
                                        options={countrySelect.map(
                                          (option) => option.country,
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

                              <Grid container mt={5}>
                                <Grid item xs={8.6} />
                                <Grid item xs={3.4}>
                                  <Grid container>
                                    <Grid item xs={6}>
                                      <Button
                                        variant="contained"
                                        className={classes.buttonStyle}
                                        onClick={handleCustomerModalClose}
                                      >
                                        Cancel
                                      </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Button
                                        variant="contained"
                                        onClick={updateMyCustomerData}
                                        className={classes.buttonStyle}
                                      >
                                        Save
                                      </Button>
                                      <Snackbar
                                        open={alert}
                                        autoHideDuration={8000}
                                        onClose={handleClose}
                                      >
                                        <Alert
                                          onClose={handleClose}
                                          sx={{ width: '100%' }}
                                        >
                                          Customer Created Sucessfully...
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
                    </Card>
                  </Grid>
                </Box>
              </Modal>
              {/* </Link> */}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <Typography>Country</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Stack>
                  <Autocomplete
                    disablePortal
                    value={projectCountry}
                    onChange={updateProjectCountry}
                    id="country"
                    size="small"
                    options={countrySelect.map((option) => option.country)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select Country" />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <Typography>State</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Stack>
                  <Autocomplete
                    disablePortal
                    value={projectState}
                    onChange={updateProjectState}
                    id="state"
                    size="small"
                    options={stateSelect.map((option) => option.state)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select State" />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <Typography>Status</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Stack>
                  <Autocomplete
                    disablePortal
                    value={projectStatus}
                    onChange={getProjectStatusValue}
                    id="status"
                    size="small"
                    options={statusSet?.map((option: any) => option)}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select Status" />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} />

          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <Typography>Application</Typography>
              </Grid>
              <Grid item xs={0.7}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={2}>
                    <Checkbox
                      value={customerWeb}
                      onClick={() => getApplicationType('Business to Customer - Web')}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>Business to Customer - Web</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Checkbox
                      value={customerMobile}
                      onClick={() => getApplicationType('Business to Customer - Mobile')}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>Business to Customer - Mobile</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Checkbox
                      value={businessWeb}
                      onClick={() => getApplicationType('Business to Business - Web')}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>Business to Business - Web</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Checkbox
                      value={businessMobile}
                      onClick={() => getApplicationType('Business to Business - Mobile')}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>Business to Business - Mobile</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container mt={5}>
            <Grid item xs={8.6} />
            <Grid item xs={3.4}>
              <Grid container>
                <Grid item xs={6}>
                  <Link href="/project" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{ width: '73%' }}>
                      Cancel
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={updateHandler}
                    style={{ width: '73%' }}
                  >
                    Save
                  </Button>
                  <Snackbar
                    open={alert}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} sx={{ width: '100%' }}>
                      Project Created Sucessfully...
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProjectCreate;
