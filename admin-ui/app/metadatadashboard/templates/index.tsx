'use client';
import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const TemplateComponent = () => {
	return (
		<Box mt={1} ml={1.5}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Link
						href={'/metadatadashboard/templates/create'}
						passHref
						style={{ textDecoration: 'none' }}          >
						<Button variant="contained" size="small">
							Create
							<span>+</span>
						</Button>
					</Link>
				</Grid>
			</Grid>
			
		</Box>
	);
};

export default TemplateComponent;