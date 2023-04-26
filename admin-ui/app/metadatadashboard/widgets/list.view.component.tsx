'use client';
import { Box, Checkbox, Grid, Pagination, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { WidgetsHomeComponentsProps } from './widget.props';
import { PaginationHandler } from '../../utility';
import { IWidgets } from './widgets.props';
import InfoWidgetsComponent from './info.widgets.component';

const ListViewComponent = ({ widgets }: WidgetsHomeComponentsProps) => {

	const [page, setPage] = useState(1);
	const PER_PAGE = 9;
	const count = Math.ceil(widgets.length / PER_PAGE);
	const paginationHandler = PaginationHandler(widgets, PER_PAGE);

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
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography variant="subtitle2" noWrap>
								Created Date
							</Typography>

						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography variant="subtitle2" noWrap>
								Code
							</Typography>
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography
								variant="subtitle2"
								noWrap							>
								Query
							</Typography>
						</Grid>

						<Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography
								variant="subtitle2"
								noWrap
								display={'flex'}
								justifyContent={'space-around'}							>
								Image
							</Typography>
						</Grid>
						<Grid item xs={1} style={{ display: 'flex', alignContent: 'center' }}>
							<Typography
								variant="subtitle2"
								noWrap
								display={'flex'}
								justifyContent={'space-around'}							>
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