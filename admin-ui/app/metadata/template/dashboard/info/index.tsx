'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography
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
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { deleteCustomer } from '../../../../../services/customer.action';
import { IDashboardTemplateComponentProps } from '../models';

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

type InfoCustomerComponentProps = {
  dashboard: IDashboardTemplateComponentProps;
  increase: boolean;
};
function InfoDashBoardTemplateComponent({
  dashboard,
  // getMultiSelectedValue,
  show,
}: InfoCustomerComponentProps) {
  const [copyData] = useState([dashboard]);
  const [checked, setChecked] = useState(show);

  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const deletePopupOpen = () => setOpen(true);

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

  const removeData = (customer: any) => {
    window.location.reload();
    deleteCustomer(customer.id);
    handleClick();
  };

  useEffect(() => {
    setChecked(show);
  }, [show]);

  // const customerName = `${customer.firstName} ${customer.lastName}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    // const d = customer.firstName;

    // getMultiSelectedValue(d);
  };

  return (
    <>
      <Box mt={0.6} mr={2}>
        <Card elevation={0}>
          <Grid container>
            <Grid xs={0.7} display="flex" justifyContent="flex-end">
              <Grid container ml={1}>
                <Grid item xs={5}>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {/* <Moment format="DD MMM YYYY">{customer.createdAt}</Moment> */}
              </Typography>
            </Grid>

            <Grid item xs={2.5}>
              <Typography variant="body2" noWrap>
                {/* {customerName} */}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {/* {customer.email} */}
              </Typography>
            </Grid>

            <Grid item xs={2.2}>
              <Typography variant="body2" noWrap display="flex">
                {/* {customer.mobile} */}
              </Typography>
            </Grid>
            <Grid item xs={1.1}>
              <Typography variant="body2" noWrap display="flex">
                {/* {customer.address} */}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container display="flex" justifyContent="flex-end">
                {/* <Grid item xs={5}>
                  <Tooltip title="Edit">
                    <Link href={`/customer/${customer.id}`}>
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid> */}
                <Grid item xs={1}>
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
                  Are you sure you want to delete the selected company?
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
                      onClick={() => removeData(dashboard)}
                      sx={{ height: '4vh' }}
                    >
                      Ok
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Modal>
        </Card>
      </Box>
      <Divider style={{width:'98.7%'}}/>
    </>
  );
}
export default InfoDashBoardTemplateComponent;
