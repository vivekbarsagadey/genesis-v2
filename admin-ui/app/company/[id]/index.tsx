'use client';

import {
	Button, Grid, TextField, Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box/Box';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { updateCompany } from '../../../services/company.action';
import { countrySelect, stateSelect } from '../graphdata/graph.data';
import { Status } from '../models';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
	props,
	ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const useStyles = makeStyles({
	buttonStyle: {
		width: '73%',
	},
});

type CompanyComponentProps = {
  company: any;
  id: string;
};
function CompanyEditComponent({ company, id }: CompanyComponentProps) {
	const classes = useStyles();
	const router = useRouter();
	const [firstName, setFirstName] = useState(company.firstName);
	const [lastName, setLastName] = useState(company.lastName);
	const [companyName, setCompanyName] = useState(company.name);
	const [companyEmail, setCompanyEmail] = useState(company.email);
	const [companyPhone, setCompanyPhone] = useState(company.mobile);
	const [companyAddress, setCompanyAddress] = useState(company.address);
	const [companyWebsite, setCompanyWebsite] = useState(company.website);
	const [companyStatus, setCompanyStatus] = useState(company.status);
	const [companyState, setCompanyState] = useState(company.state);
	const [companyCountry, setCompanyCountry] = useState(company.country);
	const [alert, setAlert] = useState(false);
	const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

	const updateOwnerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	};
	const updateOwnerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value);
	};
	const updateCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyName(e.target.value);
	};
	const updateCompanyEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyEmail(e.target.value);
	};
	const updateCompanyPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyPhone(e.target.value);
	};
	const updateCompanyAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyAddress(e.target.value);
	};
	const updateCompanyWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyWebsite(e.target.value);
	};

	const getCompanyStatusValue = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setCompanyStatus(value);
	};

	const updateCompanyState = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setCompanyState(value);
	};
	const updateCompanyCountry = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setCompanyCountry(value);
	};

	const updateCompanyEditedData = async () => {
		try {
			const body = {
				firstName,
				lastName,
				name: companyName,
				email: companyEmail,
				mobile: companyPhone,
				address: companyAddress,
				website: companyWebsite,
				status: companyStatus,
				state: companyState,
				country: companyCountry,
			};
			await updateCompany(id, body);
			await router.push('/company');
		} catch (error) {
			console.error(error);
		}
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

	const updateHandler = () => {
		handleClick();
		updateCompanyEditedData();
	};
	return (
  <>
  {/* <Box padding={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography fontSize={"1.1rem"}>Edit Company Details</Typography>
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
                  value={firstName}
                  onChange={updateOwnerFirstName}
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
                  value={lastName}
                  onChange={updateOwnerLastName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Company Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="company-name"
                  placeholder="Company Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyName}
                  onChange={updateCompanyName}
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
                  value={companyEmail}
                  onChange={updateCompanyEmail}
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
                  value={companyPhone}
                  onChange={updateCompanyPhone}
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
                  value={companyAddress}
                  onChange={updateCompanyAdress}
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
                  value={companyState}
                  onChange={updateCompanyState}
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
                <Autocomplete
                  value={companyCountry}
                  onChange={updateCompanyCountry}
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
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Website</Typography>
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
                  value={companyWebsite}
                  onChange={updateCompanyWebsite}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Company Status</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  value={companyStatus}
                  onChange={getCompanyStatusValue}
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
          <Grid container mt={5}>
            <Grid item xs={8.6}></Grid>
            <Grid item xs={3.4}>
              <Grid container>
                <Grid item xs={6}>
                  <Link href={"/company"} style={{ textDecoration: "none" }}>
                    <Button variant="contained" className={classes.buttonStyle}>
                      Cancel
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={updateHandler}
                    className={classes.buttonStyle}                  >
                    Save
                  </Button>
                  <Snackbar
                    open={alert}
                    autoHideDuration={8000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} sx={{ width: "100%" }}>
                      Company Edit Sucessfully...
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
  <Box padding={4}>
  <Grid container>
  <Grid item xs={12} ml={5}>
  <Typography fontSize="1.1rem">Create New Company</Typography>
					</Grid>
				</Grid>
  <Grid container spacing={2} mt={3} paddingLeft={5}>
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
  value={firstName}
  onChange={updateOwnerFirstName}
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
  value={lastName}
  onChange={updateOwnerLastName}
								/>
							</Grid>
						</Grid>
					</Grid>

  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Company Name</Typography>
							</Grid>
  <Grid item xs={2}>
  <Typography>:</Typography>
							</Grid>
  <Grid item xs={6}>
  <TextField
  id="company-name"
  placeholder="Company Name"
  variant="outlined"
  size="small"
  fullWidth
  value={companyName}
  onChange={updateCompanyName}
								/>
							</Grid>
						</Grid>
					</Grid>

  <Grid item xs={6} mt={1}>
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
  value={companyEmail}
  onChange={updateCompanyEmail}
								/>
							</Grid>
						</Grid>
					</Grid>
  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Phone</Typography>
							</Grid>
  <Grid item xs={2}>
  <Typography>:</Typography>
							</Grid>
  <Grid item xs={6}>
  <TextField
  id="phone"
  placeholder="Phone"
  variant="outlined"
  size="small"
  fullWidth
  value={companyPhone}
  onChange={updateCompanyPhone}
								/>
							</Grid>
						</Grid>
					</Grid>

  <Grid item xs={6} mt={1}>
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
  value={companyAddress}
  onChange={updateCompanyAdress}
								/>
							</Grid>
						</Grid>
					</Grid>
  <Grid item xs={6} mt={1}>
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
  value={companyState}
  onChange={updateCompanyState}
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

  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Country</Typography>
							</Grid>
  <Grid item xs={2}>
  <Typography>:</Typography>
							</Grid>
  <Grid item xs={6}>
  <Autocomplete
  disablePortal
  value={companyCountry}
  onChange={updateCompanyCountry}
  id="country"
  size="small"
  options={countrySelect.map((option) => option.country)}
  renderInput={(params) => (
  <TextField {...params} placeholder="Select Country" />
									)}
								/>
							</Grid>
						</Grid>
					</Grid>

  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Website</Typography>
							</Grid>
  <Grid item xs={2}>
  <Typography>:</Typography>
							</Grid>
  <Grid item xs={6}>
  <TextField
  id="website"
  placeholder="Website"
  variant="outlined"
  size="small"
  fullWidth
  value={companyWebsite}
  onChange={updateCompanyWebsite}
								/>
							</Grid>
						</Grid>
					</Grid>

  <Grid item xs={6} mt={1}>
  <Grid container display="flex" alignItems="center">
  <Grid item xs={3}>
  <Typography>Company Status</Typography>
							</Grid>
  <Grid item xs={2}>
  <Typography>:</Typography>
							</Grid>
  <Grid item xs={6}>
  <Autocomplete
  disablePortal
  value={companyStatus}
  onChange={getCompanyStatusValue}
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
  <Grid container mt={5}>
  <Grid item xs={8.6} />
  <Grid item xs={3.4}>
  <Grid container>
  <Grid item xs={6}>
  <Link href="/company" style={{ textDecoration: 'none' }}>
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
  autoHideDuration={8000}
  onClose={handleClose}
									>
  <Alert onClose={handleClose} sx={{ width: '100%' }}>
  Company Edit Sucessfully...
										</Alert>
									</Snackbar>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default CompanyEditComponent;
