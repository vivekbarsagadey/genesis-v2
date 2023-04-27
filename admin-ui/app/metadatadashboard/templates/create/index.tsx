'use client';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { createTemplates } from '../../../../services/template.action';
import CreateRowsComponent from '../rows';
import React from 'react';

const CreateTemplate = () => {
	const [rowCount, setRowCount] = useState([]);
	const [colDb, setColDb] = useState([]);
	const [rowDb, setRowDb] = useState([]);

	const createRowHandler = (recv: string) => {
		setRowCount([...rowCount, recv]);
	};

	const updateHandler = async () => {
		for (let i = 0; i < rowCount.length; i++) {
			try {
				const body = {
					row: rowDb[i].toString(),
					column: colDb[i]
				};
				await createTemplates(body);
			}
			catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} display={'flex'}>
					<Typography variant="h5" noWrap>
            Create Row
					</Typography>
					<Button
						variant="contained"
						size="small"
						onClick={() => createRowHandler('data')}
					>
            +
					</Button>
				</Grid>

				{rowCount?.map((data, index) => {
					return <Grid item xs={6} key={index} > <CreateRowsComponent index={index}
						setColDb={setColDb} colDb={colDb} setRowDb={setRowDb} rowDb={rowDb} />
					</Grid>;
				})}

			</Grid>

			<Grid container mt={5} style={{ position: 'relative', }}>
				<Grid item xs={8.6}></Grid>
				<Grid item xs={3.4}>
					<Grid container>
						<Grid item xs={6}>
						</Grid>
						<Grid item xs={6}>
							<Button
								variant="contained"
								onClick={updateHandler}
								style={{ width: '73%' }}
							>
                Save
							</Button>

						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CreateTemplate;
