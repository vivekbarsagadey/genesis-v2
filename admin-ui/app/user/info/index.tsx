'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { deleteUser } from '../../../services/user.action';
import { IUser } from '../models';

const style = {
  position: 'absolute' as const,
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 325,
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingTop: 1,
  paddingLeft: 2,
  paddingRight: 1,
  paddingBottom: 2,
};
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

type InfoUserComponentProps = {
  user: IUser;
};

function InfoUserComponent({ user }: InfoUserComponentProps) {
  const router = useRouter();
  const [alert, setAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const deletePopupOpen = () => setOpen(true);

  // const deleteUserHandler = async () => {
  //   const response = await deleteUser(user.id);
  //   window.location.reload();
  // };

  const handleCloseDelete = () => setOpen(false);
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

  const removeData = (f: IUser) => {
    window.location.reload();
    deleteUser(f.id);
    handleClick();
  };

  return (
    <Box mt={0.6} mr={2}>
      <Paper variant="outlined">
        <Grid container>
          <Grid item xs={1} display="flex" justifyContent="flex-end">
            <Grid container ml={1}>
              <Grid item xs={4}>
                <Checkbox size="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" noWrap>
              {user.firstName} {user.lastName}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" noWrap>
              {user.role}
            </Typography>
          </Grid>
          <Grid item xs={1.9}>
            <Typography variant="body2" noWrap>
              {user.email}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="body2"
              noWrap
              display="flex"
              justifyContent="space-around"
            >
              {user.mobile}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="body2"
              noWrap
              display="flex"
              justifyContent="space-around"
            >
              {user.status}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid
              container
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Grid item xs={4}>
                <Tooltip title="Edit">
                  <Link href={`/user/${user.id}`}>
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title="Delete">
                  <IconButton onClick={deletePopupOpen}>
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Snackbar
                  open={alert}
                  autoHideDuration={8000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}
                  >
                    Items Deleted Sucessfully...
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleCloseDelete}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 1 }}
                fontSize="0.9rem"
              >
                Are you sure you want to delete the selected User?
              </Typography>
              <Grid container mt={2}>
                <Grid item xs={6} />
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ height: '4vh' }}
                    onClick={() => handleCloseDelete()}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => removeData(user)}
                    sx={{ height: '4vh' }}
                  >
                    Ok
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </Paper>
    </Box>
  );
}
export default InfoUserComponent;
