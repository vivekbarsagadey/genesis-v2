import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Card,
  FormControl,
  IconButton,
  Modal,
  Paper,
  Button,
  Tooltip,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import {
  deleteCustomer,
  updateCustomer,
} from '../../../services/customer.action';
import { ListComponentProps } from './props';
import { ICustomer, Status } from '../models';

const CardStyle = styled(Grid)(({ theme }) => ({
  height: '80vh',
  overflowY: 'auto',
}));

const useStyles = makeStyles({
  cardView: {
    background: '#F1F6F9',
  },
  iconStyle: {
    padding: '0px',
  },
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  buttonStyle: {
    padding: '0px',
  },
});

type INewCustomer = {
  newCustomer: ICustomer;
};

type IActiveCustomer = {
  activeCustomer: ICustomer;
};
type IInActiveCustomer = {
  inActiveCustomer: ICustomer;
};
function CustomerKanbanView({ customer }: ListComponentProps) {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newCustomers = customer.filter(
    (ele: ICustomer) => ele.status == statusSet[0]
  );
  const activeCustomers = customer.filter(
    (ele: ICustomer) => ele.status == statusSet[1]
  );
  const inActiveCustomers = customer.filter(
    (ele: ICustomer) => ele.status == statusSet[2]
  );

  const classes = useStyles();
  return (
    <Grid container spacing={2} mt={1} pr={2}>
      <Grid item xs={4}>
        <CardStyle>
          <Paper variant="outlined" className={classes.cardView}>
            <CardContent>
              <Grid container>
                <Grid item xs={11} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="small" htmlColor="blue" />
                  <Typography variant="h6" pl={1}>
                    NEW
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={0.7}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid gray"
                  borderRadius="40px"
                  backgroundColor="lightgray"
                >
                  <Typography fontSize="12px">{newCustomers.length}</Typography>
                </Grid>
              </Grid>

              {newCustomers.reverse()?.map((newCustomer, index) => (
                <NewCustomerComponent newCustomer={newCustomer} key={index} />
              ))}
            </CardContent>
          </Paper>
        </CardStyle>
      </Grid>
      <Grid item xs={4}>
        <CardStyle>
          <Paper variant="outlined" className={classes.cardView}>
            <CardContent>
              <Grid container>
                <Grid item xs={11} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="small" htmlColor="green" />
                  <Typography variant="h6" pl={1}>
                    ACTIVE
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={0.7}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid gray"
                  borderRadius="40px"
                  backgroundColor="lightgray"
                >
                  <Typography fontSize="12px">{newCustomers.length}</Typography>
                </Grid>
              </Grid>

              {activeCustomers.reverse()?.map((activeCustomer, index) => (
                <ActiveCustomerComponent
                  activeCustomer={activeCustomer}
                  key={index}
                />
              ))}
            </CardContent>
          </Paper>
        </CardStyle>
      </Grid>
      <Grid item xs={4}>
        <CardStyle>
          <Paper variant="outlined" className={classes.cardView}>
            <CardContent>
              <Grid container>
                <Grid item xs={11} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="small" htmlColor="red" />
                  <Typography variant="h6" pl={1}>
                    INACTIVE
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={0.7}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid gray"
                  borderRadius="40px"
                  backgroundColor="lightgray"
                >
                  <Typography fontSize="12px">
                    {inActiveCustomers.length}
                  </Typography>
                </Grid>
              </Grid>

              {inActiveCustomers.reverse()?.map((inActiveCustomer, index) => (
                <InActiveCustomerComponent
                  inActiveCustomer={inActiveCustomer}
                  key={index}
                />
              ))}
            </CardContent>
          </Paper>
        </CardStyle>
      </Grid>
    </Grid>
  );
}

function NewCustomerComponent({ newCustomer }: INewCustomer) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(newCustomer.status);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const handleupdateStatus = (event: SelectChangeEvent) => {
    setNewStatus(event.target.value as string);
  };

  const updateStatusHandler = async () => {
    try {
      const body = {
        status: newStatus,
      };
      await updateCustomer(newCustomer.id, body);

      handleEditModalClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={1}>
      <Card variant="outlined" style={{ borderRadius: '6px' }}>
        <Grid container>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <SupportAgentIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {`${newCustomer.firstName} ${newCustomer.lastName} `}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="flex-end"
            pl={2}
            pb={1}
          >
            <IconButton onClick={handleClick}>
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem>
                <IconButton
                  onClick={handleEditModalOpen}
                  className={classes.buttonStyle}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <Modal open={openEditModal} onClose={handleEditModalClose}>
                  <Box className={classes.modalStyle}>
                    <Card>
                      <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={newStatus}
                              onChange={handleupdateStatus}
                            >
                              <MenuItem value="NEW">NEW</MenuItem>
                              <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                              <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className={classes.buttonStyle}
                            onClick={updateStatusHandler}
                          >
                            Apply
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Box>
                </Modal>
              </MenuItem>
              <MenuItem>
                <IconButton
                  onClick={() => deleteCustomer(newCustomer.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {newCustomer.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr={2}
            pb={1}
          >
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={2}>
              {moment(newCustomer.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="blue">
              {newCustomer.status}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr={2}
            pb={1}
          >
            <CallIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {newCustomer.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function ActiveCustomerComponent({ activeCustomer }: IActiveCustomer) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(activeCustomer.status);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const handleupdateStatus = (event: SelectChangeEvent) => {
    setNewStatus(event.target.value as string);
  };

  const updateStatusHandler = async () => {
    console.log('update');
    try {
      const body = {
        status: newStatus,
      };
      await updateCustomer(activeCustomer.id, body);

      handleEditModalClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <SupportAgentIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {`${activeCustomer.firstName} ${activeCustomer.lastName} `}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="flex-end"
            pl={2}
            pb={1}
          >
            <IconButton onClick={handleClick}>
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem>
                <IconButton
                  onClick={handleEditModalOpen}
                  className={classes.buttonStyle}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <Modal open={openEditModal} onClose={handleEditModalClose}>
                  <Box className={classes.modalStyle}>
                    <Card>
                      <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={newStatus}
                              onChange={handleupdateStatus}
                            >
                              <MenuItem value="NEW">NEW</MenuItem>
                              <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                              <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className={classes.buttonStyle}
                            onClick={updateStatusHandler}
                          >
                            Apply
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Box>
                </Modal>
              </MenuItem>
              <MenuItem>
                <IconButton
                  onClick={() => deleteCustomer(activeCustomer.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {activeCustomer.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr={2}
            pb={1}
          >
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={2}>
              {moment(activeCustomer.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="green">
              {activeCustomer.status}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr={2}
            pb={1}
          >
            <CallIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {activeCustomer.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function InActiveCustomerComponent({ inActiveCustomer }: IInActiveCustomer) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(inActiveCustomer.status);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const handleupdateStatus = (event: SelectChangeEvent) => {
    setNewStatus(event.target.value as string);
  };

  const updateStatusHandler = async () => {
    try {
      const body = {
        status: newStatus,
      };
      await updateCustomer(inActiveCustomer.id, body);

      handleEditModalClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <SupportAgentIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {`${inActiveCustomer.firstName} ${inActiveCustomer.lastName} `}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="flex-end"
            pl={2}
            pb={1}
          >
            <IconButton onClick={handleClick}>
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem>
                <IconButton
                  onClick={handleEditModalOpen}
                  className={classes.buttonStyle}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <Modal
                  open={openEditModal}
                  onClose={handleEditModalClose}
                  style={{ opacity: 1 }}
                >
                  <Box className={classes.modalStyle}>
                    <Card>
                      <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={newStatus}
                              onChange={handleupdateStatus}
                            >
                              <MenuItem value="NEW">NEW</MenuItem>
                              <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                              <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className={classes.buttonStyle}
                            onClick={updateStatusHandler}
                          >
                            Apply
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Box>
                </Modal>
              </MenuItem>
              <MenuItem>
                <IconButton
                  onClick={() => deleteCustomer(inActiveCustomer.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {inActiveCustomer.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr={2}
            pb={1}
          >
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={2}>
              {moment(inActiveCustomer.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="red">
              {inActiveCustomer.status}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr={2}
            pb={1}
          >
            <CallIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {inActiveCustomer.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default CustomerKanbanView;
