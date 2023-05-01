'use client';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Box,
	Button,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { updateUser } from '../../../services/user.action';
import { IRole } from '../../roles/models';
import {
	citySelect,
	countrySelect,
	stateSelect,
} from '../graphdata/graphdata.data';
import { Status } from '../models';

const style = {
	position: 'absolute' as const,
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
		width: '92%',
		marginTop: '-1rem',
	},
	buttonStyleSave: {
		width: '82%',
		marginTop: '-1rem',
	},
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
	props,
	ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const genderType = [{ title: 'Male' }, { title: 'Female' }];
function UserEditComponent({ users, id }: UserComponentProps) {
	const classes = useStyles();
	const [userFirstName, setUserFirstName] = useState(users.firstName);
	const [userLastName, setUserLastName] = useState(users.lastName);
	const [gender, setGender] = useState(users.gender);
	const [userAge, setUserAge] = useState(users.age);
	const [userEmail, setUserEmail] = useState(users.email);
	const [userPhone, setUserPhone] = useState(users.mobile);
	const [userStatus, setUserStatus] = useState(users.status);
	const [userZipCode, setUserZipCode] = useState(users.zipCode);
	const [userCity, setUserCity] = useState(users.city);
	const [userState, setUserState] = useState(users.state);
	const [userCountry, setUserCountry] = useState(users.country);
	const [roleList, setRoleList] = useState([]);
	const [role, setRole] = useState<string>(users.role);
	const [showPassword, setShowPassword] = React.useState(false);
	const [alert, setAlert] = useState(false);
	const [value1, setValue1] = useState();
	const [password, setPassword] = useState('');
	const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
	const router = useRouter();

	const [securityModalOpen, setSecurityModalOpen] = React.useState(false);
	const securityModal = () => setSecurityModalOpen(true);
	const securityhandleClose = () => setSecurityModalOpen(false);

	const updateEditMyUserData = async () => {
		try {
			const body = {
				firstName: userFirstName,
				lastName: userLastName,
				gender,
				email: userEmail,
				age: userAge,
				mobile: userPhone,
				status: userStatus,
				zipCode: userZipCode,
				city: userCity,
				state: userState,
				country: userCountry,
				role,
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

	const updateZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserZipCode(e.target.value);
	};
	const updateUserState = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setUserState(value);
	};
	const updateUserCity = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setUserCity(value);
	};

	const updateUserChange = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setGender(value);
	};
	const updateUserCountry = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setUserCountry(value);
	};
	const updateUserStatus = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setUserStatus(value);
	};
	const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const updateRole = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setRole(value);
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
	const handleClick = () => {
		setAlert(true);
	};
	const updateHandler = () => {
		handleClick();
		updateEditMyUserData();
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue1(newValue);
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
  <Typography fontSize="1.2rem">Edit User</Typography>
				</Grid>
			</Grid>
  <Grid container style={{ height: '78vh' }}>
  <Grid item xs={12}>
  <Box sx={{ flexGrow: 1 }} padding={2}>
  <Grid container spacing={2} mt={1}>
  <Grid item xs={6}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
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
  <Grid item xs={3}>
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
  <Grid item xs={3}>
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
  id="combo-box-demo"
  options={genderType?.map((option) => option.title)}
  renderInput={(params) => <TextField {...params} />}
											/>
										</Stack>
									</Grid>
								</Grid>
							</Grid>
  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
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
  <Grid item xs={3}>
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
  <Grid item xs={3}>
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
  <Grid item xs={3}>
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
  id="combo-box-demo"
  options={statusSet?.map((option: any) => option)}
  renderInput={(params) => <TextField {...params} />}
										/>
									</Grid>
								</Grid>
							</Grid>
  <Box sx={{ width: '100%' }} marginTop={5}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs
  value={value1}
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
  <TabPanel value={value1} index={0}>
  <Box>
  <Grid container>
  <Grid item xs={6} mt={0.8}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Password</Typography>
													</Grid>
  <Grid item xs={1}>
  <Typography>:</Typography>
													</Grid>
  <Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
  <OutlinedInput
  size="small"
  placeholder="Enter Confirm Password"
  id="confirm-password"
  disabled
  defaultValue="Disabled"
  type={showPassword ? 'text' : 'password'}
  endAdornment={(
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
																)}
															/>
														</FormControl>
													</Grid>
												</Grid>
											</Grid>

  <Grid item xs={6}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3} ml={2.6}>
  <Typography>Confirm Password</Typography>
													</Grid>
  <Grid item xs={1}>
  <Typography>:</Typography>
													</Grid>
  <Grid item xs={6}>
  <FormControl fullWidth variant="outlined">
  <OutlinedInput
  size="small"
  defaultValue="Disabled"
  disabled
  placeholder="Enter Confirm Password"
  id="confirm-password"
  type={showPassword ? 'text' : 'password'}
  endAdornment={(
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
																)}
															/>
														</FormControl>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Box>
								</TabPanel>
  <TabPanel value={value1} index={1}>
  <Box>
  <Grid container>
  <Grid item xs={6}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Zip-Code</Typography>
													</Grid>
  <Grid item xs={1}>
  <Typography>:</Typography>
													</Grid>
  <Grid item xs={6}>
  <TextField
  id="zip-code"
  placeholder="Zip-Code"
  variant="outlined"
  size="small"
  fullWidth
  value={userZipCode}
  onChange={updateZipCode}
														/>
													</Grid>
												</Grid>
											</Grid>

  <Grid item xs={6}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3} ml={2.6}>
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
  id="combo-box-demo"
  size="small"
  options={citySelect.map((option) => option.city)}
  renderInput={(params) => (
  <TextField {...params} />
															)}
														/>
													</Grid>
												</Grid>
											</Grid>
  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
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
  id="combo-box-demo"
  options={stateSelect.map(
																(option) => option.state,
															)}
  renderInput={(params) => (
  <TextField {...params} />
															)}
														/>
													</Grid>
												</Grid>
											</Grid>
  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3} ml={2.6}>
  <Typography>Country</Typography>
													</Grid>
  <Grid item xs={1}>
  <Typography>:</Typography>
													</Grid>
  <Grid item xs={6}>
  <Stack>
  <Autocomplete
  disablePortal
  value={userCountry}
  onChange={updateUserCountry}
  size="small"
  id="country"
  options={countrySelect.map(
																	(option) => option.country,
																)}
  renderInput={(params) => (
  <TextField {...params} />
																)}
															/>
														</Stack>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Box>
								</TabPanel>
  <TabPanel value={value1} index={2}>
  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Role</Typography>
											</Grid>
  <Grid item xs={1}>
  <Typography>:</Typography>
											</Grid>
  <Grid item xs={6}>
  <Stack>
  <Autocomplete
  disablePortal
  disabled
  defaultValue="Disabled"
  onChange={updateRole}
  size="small"
  id="combo-box-demo"
  options={roleList?.map((item: IRole) => item.name)}
  renderInput={(params) => <TextField {...params} />}
													/>
												</Stack>
											</Grid>
										</Grid>
									</Grid>
								</TabPanel>
							</Box>
						</Grid>
					</Box>
				</Grid>
			</Grid>

  <Grid container>
  <Grid item xs={8.05} />
  <Grid item xs={3.3}>
  <Grid container>
  <Grid item xs={5.3}>
  <Link href="/user" style={{ textDecoration: 'none' }}>
  <Button variant="contained" className={classes.buttonStyle}>
  Cancel
								</Button>
							</Link>
						</Grid>
  <Grid item xs={6}>
  <Button
  variant="contained"
  onClick={updateHandler}
  className={classes.buttonStyleSave}
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
		</Box>
	);
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
	const {
		children, value, index, ...other
	} = props;

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
export default UserEditComponent;
