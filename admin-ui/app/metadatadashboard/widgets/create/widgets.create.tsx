'use client';
import { Alert, Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { createWidgets } from '../../../../services/widgets.action';
import Link from 'next/link';

const WidgetsCreateComponent = () => {
	const [name, setName] = useState('');
	const [code, setCode] = useState('');
	const [description, seDescription] = useState('');
	const [query, seQuery] = useState('');
	const [image, seImage] = useState('');
	const [alert, setAlert] = useState(false);

	const router = useRouter();

	const handleClick = () => {
		setAlert(true);
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

	const updateMyCompanyData = async () => {
		try {
			const body = {
				name: name,
				code: code,
				description: description,
				query: query,
				image: image
			};
			await createWidgets(body);
			await router.push('/metadatadashboard/widgets/');
		} catch (error) {
			console.error(error);
		}
	};

	const updateUserName = (e: any) => {
		setName(e.target.value);
	};
	const updateCodeName = (e: any) => {
		setCode(e.target.value);
	};
	const updateDescriptionName = (e: any) => {
		seDescription(e.target.value);
	};
	const updateQueryName = (e: any) => {
		seQuery(e.target.value);
	};
	const updateImageName = (e: any) => {
		seImage(e.target.value);
	};

	const updateHandler = () => {
		handleClick();
		updateMyCompanyData();
	};

	return (
		<>
			<Box padding={4}>
				<Grid container>
					<Grid item xs={12}>
						<Typography fontSize={'1.1rem'}>Create New Widgets</Typography>
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
									id="Name"
									placeholder="Name"
									variant="outlined"
									size="small"
									fullWidth
									value={name}
									onChange={updateUserName}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6}>
						<Grid container display="flex" alignItems="center">
							<Grid item xs={4}>
								<Typography>Code</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>:</Typography>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="Code"
									placeholder="Code"
									variant="outlined"
									size="small"
									fullWidth
									value={code}
									onChange={updateCodeName}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6} mt={1}>
						<Grid container display="flex" alignItems="center">
							<Grid item xs={4}>
								<Typography>Description</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>:</Typography>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="Description"
									placeholder="Description"
									variant="outlined"
									size="small"
									fullWidth
									value={description}
									onChange={updateDescriptionName}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6} mt={1}>
						<Grid container display="flex" alignItems="center">
							<Grid item xs={4}>
								<Typography>Query</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>:</Typography>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="Query"
									placeholder="Query"
									variant="outlined"
									size="small"
									fullWidth
									value={query}
									onChange={updateQueryName}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6} mt={1}>
						<Grid container display="flex" alignItems="center">
							<Grid item xs={4}>
								<Typography>Image</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>:</Typography>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="Image"
									placeholder="Image"
									variant="outlined"
									size="small"
									fullWidth
									value={image}
									onChange={updateImageName}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid container mt={5}>
						<Grid item xs={8.6}></Grid>
						<Grid item xs={3.4}>
							<Grid container>
								<Grid item xs={6}>
									<Link href={'/metadatadashboard/widgets/'} style={{ textDecoration: 'none' }}>
										<Button variant="contained" style={{ width: '73%' }}>
											Cancel
										</Button>
									</Link>
								</Grid>
								<Grid item xs={6}>
									<Link href={'/metadatadashboard/widgets'}>
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
												Widgets Created Successfully...
											</Alert>
										</Snackbar>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box >
		</>
	);
};

export default WidgetsCreateComponent;