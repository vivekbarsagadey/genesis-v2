'use client';

import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import ListViewComponent from './list.view.component';
import { IWidgets } from './widgets.props';
import { WidgetsHomeComponentsProps } from './widget.props';

function WidgetsHomeComponents({ widgets }: WidgetsHomeComponentsProps) {
	const myRef = useRef(null);
	const [copyWidgets, setCopyWidgets] = useState<Array<IWidgets>>([...widgets]);

	return (
		<Box mt={1} ml={1.5}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Link
						href="/metadatadashboard/widgets/create"
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
			<Grid item xs={12}>
				<Grid ref={myRef}>
					<ListViewComponent widgets={copyWidgets} />
  </Grid>
  </Grid>
  </Box>
	);
}

export default WidgetsHomeComponents;
