'use client';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {
  Alert,
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
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ICompany } from '../models/company.model';
import Moment from 'react-moment';
import { IWidgets } from './widgets.props';

type InfoWidgetsComponentProps = {
  company: IWidgets;
};

const InfoWidgetsComponent = ({ widgets }: InfoWidgetsComponentProps) => {
  return (
    <>
      <Box mt={0.6} mr={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={1} display={'flex'} justifyContent={'flex-end'}>
              <Grid container ml={1}>
                <Grid item xs={5}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {widgets.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                <Moment format="DD MMM YYYY">
                  {widgets.createdAt}
                </Moment>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {widgets.code}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap display={'flex'}>
                {widgets.Query}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap display={'flex'}>
                {widgets.image}
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={3.3} ml={2}>
                  <Tooltip title="Edit">
                    <Link href={`/widgets/${widgets.id}`}>
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Snackbar
                    // open={alert}
                    autoHideDuration={8000}
                  // onClose={handleClose}
                  >
                    <Alert
                      // onClose={handleClose}
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
            // open={open}
            // onClose={handleCloseDelete}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box>
                <Typography
                  id="transition-modal-description"
                  sx={{ mt: 1 }}
                  fontSize="0.9rem"
                >
                  Are you sure you want to delete the selected widgets?
                </Typography>
                <Grid container mt={2}>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ height: '4vh' }}
                    // onClick={() => handleCloseDelete()}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      size="small"
                      // onClick={() => removeData(widgets)}
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
    </>
  );
};

export default InfoWidgetsComponent;
