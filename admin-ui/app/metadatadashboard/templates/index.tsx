'use client';
import { Box, Button, Grid, ImageList, ImageListItem, Modal, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { Case, Switch } from 'react-if';
import { ITemplates } from './templates.props';

const itemData = [
	{
		id:1,
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
	{
		id:2,
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		id:3,
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
	{
		id:4,
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
	},
	{
		id:5,
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
	},
	{
		id:6,
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
	},
	{
		id:7,
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
	},
	{
		id:8,
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
	},
	{
		id:9,
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
	},
	{
		id:10,
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	},
	{
		id:11,
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	},
	{
		id:12,
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	}
];

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	height: '90%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const TemplateComponent = ({ template }: ITemplates) => {

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [copyTemplates, setCopyTemplates] = useState<Array<ITemplates>>([
		...template,
	]);

	return (
		<Box mt={1} ml={1.5}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Link
						href={'/metadatadashboard/templates/create'}
						passHref
						style={{ textDecoration: 'none' }}
					>
						<Button variant="contained" size="small">
              Create
							<span>+</span>
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12} spacing={1}>
					{copyTemplates.map((item: any, index: any) => {
						const val = Number(item.column);

						return (
							<Grid
								item
								xs={12}
								key={index}
								p={2}
								mt={1}
								style={{ border: '1px solid black' }}
							>
								<Switch>
									<Case condition={val == 1}>
										<Grid item xs={12}>

										</Grid>
									</Case>
									<Case condition={val == 2}>
										<Grid item xs={6}>
                      +
										</Grid>
										<Grid item xs={6}>
                      +
										</Grid>
									</Case>
									<Case condition={val == 3}>
										<Grid item xs={4}>
                      +
										</Grid>
										<Grid item xs={4}>
                      +
										</Grid>
										<Grid item xs={4}>
                      +
										</Grid>
									</Case>
									<Case condition={val == 4}>
										<Grid container spacing={1}>
											<Grid item xs={3}>
												<Button onClick={handleOpen}>
                          +
												</Button>
											</Grid>

											<Modal
												open={open}
												onClose={handleClose}
												aria-labelledby="modal-modal-title"
												aria-describedby="modal-modal-description"
											>
												<Box sx={style}>
													<ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={160}>
														{itemData.map((item) => (
															<ImageListItem key={item.img} style={{width:'90%',height: '80%'}}>
																<img
																	src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
																	srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
																	alt={item.title}
																	loading="lazy"
																	onClick={()=>console.log(item.id)}
																/>
															</ImageListItem>
														))}
													</ImageList>
												</Box>
											</Modal>
											<Grid item xs={3}>
                        +
											</Grid>
											<Grid item xs={3}>
                        +
											</Grid>
											<Grid item xs={3}>
                        +
											</Grid>
										</Grid>
									</Case>
								</Switch>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</Box>
	);
};



export default TemplateComponent;
