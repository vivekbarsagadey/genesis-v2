/* eslint-disable react/jsx-props-no-spreading */

'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';
import { deleteRoles } from '../../../services/role.action';
import { IRole } from '../models/role.model';

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

type InfoRoleComponentProps = {
  role: IRole;
};
function InfoRoleComponent({ role }: InfoRoleComponentProps) {
  const [alert, setAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const deletePopupOpen = () => setOpen(true);

  const handleCloseDelete = () => setOpen(false);
  const handleClick = () => {
    setAlert(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  const removeData = (f: IRole) => {
    window.location.reload();
    deleteRoles(f.id);
    handleClick();
  };
  return (
    <Box mt={0.6} mr={2}>
      <Paper variant="outlined">
        <Grid container paddingLeft={3}>
          <Grid item xs={3}>
            <Typography variant="body2" noWrap>
              <Moment format="DD MMM YYYY">{role.createdAt}</Moment>
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography variant="body2" noWrap>
              {role.name}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" noWrap>
              {role.description}
            </Typography>
          </Grid>
          <Grid item xs={2.2}>
            <Typography variant="body2" noWrap display="flex">
              {role.code}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid container>
              <Grid item xs={3.3} ml={2}>
                <Tooltip title="Edit">
                  <Link href={`/roles/${role.id}`}>
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
                Are you sure you want to delete the selected Roles?
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
                    onClick={() => removeData(role)}
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
export default InfoRoleComponent;
