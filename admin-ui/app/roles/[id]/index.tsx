'use client';
import { Button, Grid, TextField, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box/Box';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { updateRoles } from '../../../services/role.action';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  buttonStyle: {
    width: '73%',
  },
});

type RoleComponentProps = {
  roles: any;
  id: string;
};
const RoleEditComponent = ({ roles, id }: RoleComponentProps) => {
  const classes = useStyles();
  const router = useRouter();
  const [name, setName] = useState(roles.name);
  const [description, setDescription] = useState(roles.description);
  const [code, setCode] = useState(roles.code);
  const [alert, setAlert] = useState(false);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const updateCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const updateRolesEditedData = async () => {
    try {
      const body = {
        name: name,
        description: description,
        code: code,
      };
      await updateRoles(id, body);
      await router.push('/roles');
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
    updateRolesEditedData();
  };
  return (
    <>
      <Box padding={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography fontSize={'1.1rem'}>Edit Company Details</Typography>
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
                  id="name"
                  placeholder="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={name}
                  onChange={updateName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Description</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="description"
                  placeholder="Description"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={description}
                  onChange={updateDescription}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Code</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="code"
                  placeholder="Code"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={code}
                  onChange={updateCode}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container mt={5}>
            <Grid item xs={8.6}></Grid>
            <Grid item xs={3.4}>
              <Grid container>
                <Grid item xs={6}>
                  <Link href={'/company'} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" className={classes.buttonStyle}>
                      Cancel
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={updateHandler}
                    className={classes.buttonStyle}
                  >
                    Save
                  </Button>
                  <Snackbar
                    open={alert}
                    autoHideDuration={8000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} sx={{ width: '100%' }}>
                      Roles Edit Sucessfully...
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RoleEditComponent;
