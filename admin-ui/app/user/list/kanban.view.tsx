import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import {
  Card,
  FormControl,
  IconButton,
  Modal,
  Paper,
  Select,
  Button,
  Tooltip,
} from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
import { deleteUser, updateUser } from '../../../services/user.action';
import { IUser, Status } from '../models';

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
type INewUser = {
  newUser: IUser;
};
type IActiveUser = {
  activeUser: IUser;
};
type IInActiveUser = {
  inActiveUser: IUser;
};
function UserKanbanView({ user, myRef }: any) {
  const classes = useStyles();
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const newUsers = user.filter((ele: IUser) => ele.status == statusSet[0]);
  const activeUsers = user.filter((ele: IUser) => ele.status == statusSet[1]);
  const inActiveUsers = user.filter((ele: IUser) => ele.status == statusSet[2]);

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
                  <Typography fontSize="12px">{newUsers.length}</Typography>
                </Grid>
              </Grid>

              {newUsers.reverse()?.map((newUser, index) => (
                <NewUserComponent newUser={newUser} key={index} />
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
                  <Typography fontSize="12px">{activeUsers.length}</Typography>
                </Grid>
              </Grid>

              {activeUsers.reverse()?.map((activeUser, index) => (
                <ActiveUserComponent activeUser={activeUser} key={index} />
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
                    {inActiveUsers.length}
                  </Typography>
                </Grid>
              </Grid>

              {inActiveUsers.reverse()?.map((inActiveUser, index) => (
                <InActiveUserComponent
                  inActiveUser={inActiveUser}
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

function NewUserComponent({ newUser }: INewUser) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(newUser.status);
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
      await updateUser(newUser.id, body);

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
            <PersonIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {`${newUser.firstName} ${newUser.lastName} `}{' '}
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
                  onClick={() => deleteUser(newUser.id)}
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
              {newUser.email}
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
              {moment(newUser.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="blue">
              {newUser.status}
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
              {newUser.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function ActiveUserComponent({ activeUser }: IActiveUser) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(activeUser.status);
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
      await updateUser(activeUser.id, body);

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
            <PersonIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {`${activeUser.firstName} ${activeUser.lastName} `}{' '}
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
                  onClick={() => deleteUser(activeUser.id)}
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
              {activeUser.email}
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
              {moment(activeUser.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="green">
              {activeUser.status}
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
              {activeUser.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function InActiveUserComponent({ inActiveUser }: IInActiveUser) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(inActiveUser.status);
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
      await updateUser(inActiveUser.id, body);

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
            <PersonIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {`${inActiveUser.firstName} ${inActiveUser.lastName} `}{' '}
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
                  onClick={() => deleteUser(inActiveUser.id)}
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
              {inActiveUser.email}
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
              {moment(inActiveUser.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="red">
              {inActiveUser.status}
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
              {inActiveUser.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
export default UserKanbanView;
