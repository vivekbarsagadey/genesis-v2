'use client'

import { Box, Button, Grid, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Link from "next/link";
import React, { useState } from "react";
import { border_Radius, colors } from "../../../../../themes";
import CreateRowsComponent from "./row.component";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function DashBoardCreateComponent() {
  const [rowCount, setRowCount] = useState([]);
  const [cellDb, setCellDb] = useState(null);
  const [rowDb, setRowDb] = useState([]);
  const [alert, setAlert] = useState(false);

  const createRowHandler = (recv: string) => {
    setRowCount([...rowCount, recv]);
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
    // updateRowHandler();
  };

  return (
    <Box padding={3} ml={1.5}
      style={{
        backgroundColor: colors.white,
        borderRadius: border_Radius.borderRadius,
      }}
      pl={2}
      pb={1}
      pt={1}
      mr={2.5}>
      <Grid container spacing={2}>

        <Grid item xs={12} mt={1}>
          <Button variant="contained" size="small" onClick={() => createRowHandler('data')}>
            Create Row
          </Button>
        </Grid>

        {rowCount?.map((data, index) => (
          <Grid item xs={6} key={index}>
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

export default DashBoardCreateComponent;
