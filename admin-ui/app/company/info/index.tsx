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
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { makeStyles } from '@mui/styles';
import Switch, { Case } from 'react-switch-case';
import { deleteCompany } from '../../../services/company.action';
import { ICompany } from '../models/company.model';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '7px',
};

const useStyles = makeStyles({
  contactCenter: { display: 'flex', justifyContent: 'center' },
  activeData: { textAlign: 'center' },
});
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

type InfoCompanyComponentProps = {
  company: ICompany;
  setMultiSelect: any;
  multiSelect: any;

};

function InfoCompanyComponent({
  company,
  show,
  setMultiSelect,
  multiSelect,

}: InfoCompanyComponentProps) {
  const [alert, setAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const deletePopupOpen = () => setOpen(true);
  const [checked, setChecked] = useState(show);

  const handleCloseDelete = () => setOpen(false);
  const handleClick = () => {
    setAlert(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickAway') {
      return;
    }
    setAlert(false);
  };

  const removeData = (f: ICompany) => {
    window.location.reload();
    deleteCompany(f.id);
    handleClick();
  };
  useEffect(() => {
    setChecked(show);
  }, [show]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    
    const selectedCompanyId = company.id;

    if (event.target.checked === true) {
      setMultiSelect([...multiSelect, selectedCompanyId]);
    }
    if (event.target.checked === false) {
      multiSelect.splice(1,)
    }
  };

  const classes = useStyles();

  return (
    <Box mt={0.6} mr={2}>
      <Card elevation={0}>
        <Grid container>
          <Grid item xs={1}>
            <Grid container ml={1}>
              <Grid item xs={5}>
                <Checkbox
                  size="small"
                  checked={checked}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="body2" noWrap>
              <Moment format="MMMM Do YYYY">{company.createdAt}</Moment>
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="body2"
              noWrap
              style={{ display: 'flex', justifyContent: 'left' }}
            >
              {company.name}
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="body2" noWrap>
              {company.email}
            </Typography>
          </Grid>

          <Grid item xs={2} className={classes.contactCenter}>
            <Typography variant="body2" noWrap>
              {company.mobile}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography variant="body2" noWrap>
              {company.address}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Switch condition={company.status}>
              <Case value="NEW">
                <Typography variant="body2" noWrap>
                  {company.status}
                </Typography>
              </Case>
              <Case value="ACTIVE">
                <Typography variant="body2" noWrap>
                  {company.status}
                </Typography>
              </Case>
              <Case value="INACTIVE">
                <Typography variant="body2" noWrap>
                  {company.status}
                </Typography>
              </Case>
            </Switch>
          </Grid>

          <Grid item xs={1}>
            <Grid container>
              <Grid item xs={3.3} ml={2}>
                <Tooltip title="Edit">
                  <Link href={`/company/${company.id}`}>
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
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Items Deleted Successfully...
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
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-description" fontSize="0.9rem">
                Are you sure you want to delete the selected company?
              </Typography>
              <Grid container mt={4}>
                <Grid item xs={6} />
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleCloseDelete()}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => removeData(company)}
                  >
                    Ok
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </Card>
      <Divider />
    </Box>
  );
}
export default InfoCompanyComponent;
