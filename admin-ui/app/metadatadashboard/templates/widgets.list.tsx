import {
	Button, Dialog, Grid, ImageList, ImageListItem, List,
} from '@mui/material';
import React, { useState } from 'react';

const itemData = [
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
	},
	{
		id: 5,
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
	},
	{
		id: 6,
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
	},
	{
		id: 7,
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
	},
	{
		id: 8,
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
	},
	{
		id: 9,
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
	},
	{
		id: 10,
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	},
	{
		id: 11,
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
	},
	{
		id: 12,
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
	},
];

export interface SimpleDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
}

function WidgetsList({ d }): string {
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	console.log('item ', item);

	return (
		<Grid item xs={12}>
			{/* {item.map((i)=>{
				return(
					<><Button variant="contained" size="small" onClick={handleClickOpen}>
						+
					</Button><SimpleDialog
							selectedValue={selectedValue}
							open={open}
							onClose={handleClose} /></>
				)
			})} */}

			{/* {item.column} */}
			{d.column}
  </Grid>
	);
}

function SimpleDialog(props: SimpleDialogProps) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value: string) => {
		onClose(value);
	};

	return (

  <Dialog onClose={handleClose} open={open}>
  <List>
  <Grid container>
  <Grid item sx={12}>
  <Image />
					</Grid>
				</Grid>
			</List>
		</Dialog>
	);
}

function Image() {
	const [id, setId] = useState();
	console.log('idid', id);

	return (
		<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading="lazy"
  />
					<Button onClick={() => setId(item.id)}>
    Apply
					</Button>
  </ImageListItem>
			))}
  </ImageList>
	);
}

export default WidgetsList;
