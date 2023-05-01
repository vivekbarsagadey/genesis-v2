'use client';

import {
	Autocomplete,
	Box,
	Button,
	Grid,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { createRoles } from '../../../services/role.action';
import { Status } from '../models/role.status';

const useStyles = makeStyles({
	buttonStyle: {
		width: '73%',
	},
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
	props,
	ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function RoleCreateComponent() {
	const classes = useStyles();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [code, setCode] = useState('');
	const [alert, setAlert] = useState(false);
	const [roleStatus, setRoleStatus] = useState('');

	const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
	const router = useRouter();

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

	// POST call
	const updateMyRole = async () => {
		try {
			const body = {
				name,
				description,
				code,
				status: roleStatus,
			};
			//  console.log("this is body", body)
			await createRoles(body);
			await router.push('/roles');
		} catch (error) {
			console.error(error);
		}
	};

	const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};
	const updateCode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCode(e.target.value);
	};

	const getRoleStatusValue = (
		e: React.SyntheticEvent<Element, Event>,
		value: string,
	) => {
		setRoleStatus(value);
	};

	const updateHandler = () => {
		handleClick();
		updateMyRole();
	};
	return (
  <Box padding={4}>
			<Grid container>
				<Grid item xs={12}>
					<Typography fontSize="1.1rem">Create New Roles</Typography>
  </Grid>
    </Grid>
			<Grid container spacing={2} mt={1}>
				<Grid item xs={6}>
					<Grid container display="flex" alignItems="center">
						<Grid item xs={4}>
							<Typography>Name</Typography>
  </Grid>
						<Grid item xs={1}>
							<Typography>:</Typography>
  </Grid>
						<Grid item xs={6}>
							<TextField
								id="name"
								placeholder="Name"
								variant="outlined"
								size="small"
								fullWidth
								value={name}
								onChange={updateName}
  />
  </Grid>
  </Grid>
  </Grid>

				<Grid item xs={6}>
					<Grid container display="flex" alignItems="center">
						<Grid item xs={4}>
							<Typography>Description</Typography>
  </Grid>
						<Grid item xs={1}>
							<Typography>:</Typography>
  </Grid>
						<Grid item xs={6}>
							<TextField
								id="description"
								placeholder="Description"
								variant="outlined"
								size="small"
								fullWidth
								value={description}
								onChange={updateDescription}
  />
  </Grid>
  </Grid>
  </Grid>

				<Grid item xs={6} mt={1}>
					<Grid container display="flex" alignItems="center">
						<Grid item xs={4}>
							<Typography>Code</Typography>
  </Grid>
						<Grid item xs={1}>
							<Typography>:</Typography>
  </Grid>
						<Grid item xs={6}>
							<TextField
								id="code"
								placeholder="Code"
								variant="outlined"
								size="small"
								fullWidth
								value={code}
								onChange={updateCode}
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
							<Stack>
								<Autocomplete
									value={roleStatus}
									onChange={getRoleStatusValue}
									freeSolo
									id="company-status"
									disableClearable
									size="small"
									options={statusSet?.map((option: any) => option)}
									renderInput={(params) => (
										<TextField
											{...params}
											InputProps={{ ...params.InputProps, type: 'search' }}
											placeholder="Select Status"
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
								<Link href="/roles" style={{ textDecoration: 'none' }}>
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
    Roles Created Sucessfully...
									</Alert>
  </Snackbar>
  </Grid>
  </Grid>
  </Grid>
  </Grid>
    </Grid>
		</Box>
	);
}

export default RoleCreateComponent;
