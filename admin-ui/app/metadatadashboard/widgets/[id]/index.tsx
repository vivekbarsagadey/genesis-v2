'use client';

import { Button, Grid, TextField, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box/Box';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { updateWidgets } from '../../../../services/widgets.action';
import { IWidgets } from '../widgets.props';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const useStyles = makeStyles({
  buttonStyle: {
    width: '73%',
  },
});

type WidgetsComponentProps = {
  widgets: IWidgets;
  id: string;
};
function WidgetEditComponent({ widgets, id }: WidgetsComponentProps) {
  const classes = useStyles();
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState(widgets.name);
  const [code, setCode] = useState(widgets.code);
  const [description, seDescription] = useState(widgets.description);
  const [query, seQuery] = useState(widgets.query);
  const [image, seImage] = useState(widgets.image);

  const updateUserName = (e: any) => {
    setName(e.target.value);
  };
  const updateCodeName = (e: any) => {
    setCode(e.target.value);
  };
  const updateDescriptionName = (e: any) => {
    seDescription(e.target.value);
  };
  const updateQueryName = (e: any) => {
    seQuery(e.target.value);
  };
  const updateImageName = (e: any) => {
    seImage(e.target.value);
  };

  const updateWidgetsEditedData = async () => {
    try {
      const body = {
        name,
        code,
        description,
        query,
        image,
      };
      await updateWidgets(id, body);
      await router.push('/metadatadashboard/widgets');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setAlert(true);
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

  const updateHandler = () => {
    handleClick();
    updateWidgetsEditedData();
  };
  return (
    <Box padding={4}>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize="1.1rem">Edit Widgets Details</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={4}>
              <Typography>Name</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Widgets"
                placeholder="Widgets Name"
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={updateUserName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={4}>
              <Typography>Code</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Code"
                placeholder="Code"
                variant="outlined"
                size="small"
                fullWidth
                value={code}
                onChange={updateCodeName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={4}>
              <Typography>Description</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Description"
                placeholder="Description"
                variant="outlined"
                size="small"
                fullWidth
                value={description}
                onChange={updateDescriptionName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={4}>
              <Typography>Query</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Query"
                placeholder="Query"
                variant="outlined"
                size="small"
                fullWidth
                value={query}
                onChange={updateQueryName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} mt={1}>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={4}>
              <Typography>Image</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Image"
                placeholder="Image"
                variant="outlined"
                size="small"
                fullWidth
                value={image}
                onChange={updateImageName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={5}>
          <Grid item xs={8.6} />
          <Grid item xs={3.4}>
            <Grid container>
              <Grid item xs={6}>
                <Link
                  href="/metadatadashboard/widgets"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="contained" className={classes.buttonStyle}>
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="/metadatadashboard/widgets">
                  <Button
                    variant="contained"
                    onClick={updateHandler}
                    className={classes.buttonStyle}
                  >
                    Save
                  </Button>
                </Link>
                <Snackbar
                  open={alert}
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} sx={{ width: '100%' }}>
                    Widgets Edit Successfully...
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WidgetEditComponent;
