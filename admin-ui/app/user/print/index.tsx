'use client';

import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import PrintIcon from '@mui/icons-material/Print';

function PrintComponent() {
	return (
  <>
  <Tooltip title="Print">
  <IconButton onClick={() => window.print()}>
  <PrintIcon fontSize="small" />
				</IconButton>
			</Tooltip>

		</>
	);
}

export default PrintComponent;
