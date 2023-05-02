'use client';

import { Box, Button, Grid, Snackbar, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Link from 'next/link';
import React, { useState } from 'react';
import { createTemplates } from '../../../../services/template.action';
import CreateRowsComponent from '../rows';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function CreateTemplate() {
  const [rowCount, setRowCount] = useState([]);
  const [cellDb, setCellDb] = useState([]);
  const [rowDb, setRowDb] = useState([]);
  const [alert, setAlert] = useState(false);

  const createRowHandler = (recv: string) => {
    setRowCount([...rowCount, recv]);
  };

  const updateRowHandler = async () => {
    for (let i = 0; i < rowCount.length; i++) {
      try {
        const body = {
          row: rowDb[i].toString(),
          cell: cellDb[i],
        };
        await createTemplates(body);
      } catch (error) {
        console.error(error);
      }
    }
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

  const handleClick = () => {
    setAlert(true);
  };

  const updateHandler = () => {
    handleClick();
    updateRowHandler();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex">
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

        {rowCount?.map((data, index) => (
          <Grid item xs={6} key={index}>
            {' '}
            <CreateRowsComponent
              index={index}
              setCellDb={setCellDb}
              cellDb={cellDb}
              setRowDb={setRowDb}
              rowDb={rowDb}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container mt={5} style={{ position: 'relative' }}>
        <Grid item xs={8.6} />
        <Grid item xs={3.4}>
          <Grid container>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <Link href="/metadatadashboard/templates">
                <Button
                  variant="contained"
                  onClick={updateHandler}
                  style={{ width: '73%' }}
                >
                  Save
                </Button>
                <Snackbar
                  open={alert}
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} sx={{ width: '100%' }}>
                    Row Created Successfully...
                  </Alert>
                </Snackbar>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateTemplate;
