'use client';
import { Box, Checkbox, Grid, IconButton, Pagination, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { WidgetsHomeComponentsProps } from './widget.props';
import { PaginationHandler } from '../../utility';
import { IWidgets } from './widgets.props';
import InfoWidgetsComponent from './info.widgets.component';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ListViewComponent = ({ widgets }: WidgetsHomeComponentsProps) => {

	const [page, setPage] = useState(1);
	const PER_PAGE = 9;
	const count = Math.ceil(widgets.length / PER_PAGE);
	const paginationHandler = PaginationHandler(widgets, PER_PAGE);

	const [nameSort, setNameSort] = useState(true);
	const [dateSort, setDateSort] = useState(true);
	const [codeSort, setCodeSort] = useState(true);
	const [querySort, setQuerySort] = useState(true);

	const handleNameSort = () => {
		if (nameSort) {
			widgets.sort((a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
				if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
				return 0;
			});
			setNameSort(false);
		}
		else {
			widgets.sort((a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
				if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
				return 0;
			}).reverse();
			setNameSort(true);
		}
	};
	const handleDateSort = () => {
		if (dateSort) {
			widgets.sort((a, b) => {
				if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
				if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
				return 0;
			});
			setDateSort(false);
		}
		else {
			widgets.sort((a, b) => {
				if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
				if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
				return 0;
			}).reverse();
			setDateSort(true);
		}
	};
	const handleCodeSort = () => {
		if (codeSort) {
			widgets.sort((a, b) => {
				if (a.code.toLowerCase() < b.code.toLowerCase()) { return -1; }
				if (a.code.toLowerCase() > b.code.toLowerCase()) { return 1; }
				return 0;
			});
			setCodeSort(false);
		}
		else {
			widgets.sort((a, b) => {
				if (a.code.toLowerCase() < b.code.toLowerCase()) { return -1; }
				if (a.code.toLowerCase() > b.code.toLowerCase()) { return 1; }
				return 0;
			}).reverse();
			setCodeSort(true);
		}
	};
	const handleQuerySort = () => {
		if (querySort) {
			widgets.sort((a, b) => {
				if (a.query.toLowerCase() < b.query.toLowerCase()) { return -1; }
				if (a.query.toLowerCase() > b.query.toLowerCase()) { return 1; }
				return 0;
			});
			setQuerySort(false);
		}
		else {
			widgets.sort((a, b) => {
				if (a.query.toLowerCase() < b.query.toLowerCase()) { return -1; }
				if (a.query.toLowerCase() > b.query.toLowerCase()) { return 1; }
				return 0;
			}).reverse();
			setQuerySort(true);
		}
	};

	const handleChangePage = (e: any, p: number) => {
		setPage(p);
		paginationHandler.jump(p);
	};

	return (
		<>
			<Box mr={2} mt={2}>
				<Paper variant="outlined">
					<Grid container>
						<Grid item xs={1} display={'flex'} justifyContent={'flex-end'}>
							<Grid container ml={1}>
								<Grid item xs={4}>
									<Checkbox size="small" />
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography variant="subtitle2" noWrap >
								Name
							</Typography>
							{nameSort ? <IconButton onClick={() => handleNameSort()}>
								<ArrowDropUpIcon />
							</IconButton> : <IconButton onClick={() => handleNameSort()}>
								<ArrowDropDownIcon />
							</IconButton>}
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography variant="subtitle2" noWrap>
								Created Date
							</Typography>
							{dateSort ? <IconButton onClick={() => handleDateSort()}>
								<ArrowDropUpIcon />
							</IconButton> : <IconButton onClick={() => handleDateSort()}>
								<ArrowDropDownIcon />
							</IconButton>}
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography variant="subtitle2" noWrap>
								Code
							</Typography>
							{codeSort ? <IconButton onClick={() => handleCodeSort()}>
								<ArrowDropUpIcon />
							</IconButton> : <IconButton onClick={() => handleCodeSort()}>
								<ArrowDropDownIcon />
							</IconButton>}
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography
								variant="subtitle2"
								noWrap>
								Query
							</Typography>
							{querySort ? <IconButton onClick={() => handleQuerySort()}>
								<ArrowDropUpIcon />
							</IconButton> : <IconButton onClick={() => handleQuerySort()}>
								<ArrowDropDownIcon />
							</IconButton>}
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography
								variant="subtitle2"
								noWrap
								display={'flex'}
								justifyContent={'space-around'}>
								Image
							</Typography>
						</Grid>
						<Grid item xs={1} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography
								variant="subtitle2"
								noWrap
								display={'flex'}
								justifyContent={'space-around'}>
								Actions
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Box>
			<Grid style={{ height: '62vh' }}>
				{paginationHandler
					.currentData()
					.reverse()
					?.map((widgets: IWidgets, index: number) => {
						return (
							<Typography key={index}>
								<InfoWidgetsComponent widgets={widgets} />
							</Typography>
						);
					})}
			</Grid>
			<Grid container mt={4}>
				<Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
					<Grid style={{ position: 'fixed' }}></Grid>
					<Pagination count={count} size="small" page={page} color="primary"
						onChange={handleChangePage} />
				</Grid>
			</Grid>
		</>
	);
};

export default ListViewComponent;