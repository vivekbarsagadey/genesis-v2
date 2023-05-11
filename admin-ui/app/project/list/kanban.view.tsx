import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Badge,
  Button,
  Card,
  FormControl,
  IconButton,
  Paper,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import React, { useState } from 'react';
import { IProjects, Status } from '../models';
import { ListComponentProps } from './props';
import { deleteProject, updateProject } from '../../../services/project.action';

const CardStyle = styled(Grid)(() => ({
  height: '80vh',
  overflowY: 'auto',
}));
const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const useStyles = makeStyles({
  cardView: {
    background: '#F1F6F9',
  },
  iconStyle: {
    padding: '0px',
  },
  modalStyle: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: '24px',
    p: 3,
    borderRadius: '7px',
  },
  buttonStyle: {
    padding: '0px',
  },
});

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
type IActiveProject = {
  activeProject: IProjects;
};
type INewProject = {
  newProject: IProjects;
};
type IInActiveProject = {
  inActiveProject: IProjects;
};
function ProjectKanbanView({ projects }: ListComponentProps) {
  // eslint-disable-next-line no-restricted-globals
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newProjects = projects.filter(
    (ele: IProjects) => ele.status === statusSet[0],
    //  NEW,
  );
  const activeCompanies = projects.filter(
    (ele: IProjects) => ele.status === statusSet[1],
    // ACTIVE,
  );
  const inActiveCompanies = projects.filter(
    (ele: IProjects) => ele.status === statusSet[2],
    // INACTIVE
  );

  const classes = useStyles();
  return (
    <Grid container spacing={2} mt={1} pr={2}>
      <Grid item xs={4}>
        <CardStyle>
          <Paper variant="outlined" className={classes.cardView}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={11} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="small" htmlColor="blue" />
                  <Typography variant="h6" pl={1}>
                    NEW
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Badge badgeContent={newProjects.length} color="info" overlap="circular" />
                </Grid>
              </Grid>

              {newProjects.reverse()?.map((newProject) => (
                // eslint-disable-next-line no-use-before-define
                <NewProjectComponent newProject={newProject} />
              ))}
            </CardContent>
          </Paper>
        </CardStyle>
      </Grid>
      <Grid item xs={4}>
        <CardStyle>
          <Paper variant="outlined" className={classes.cardView}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={11} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="small" htmlColor="green" />
                  <Typography variant="h6" pl={1}>
                    ACTIVE
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Badge
                    badgeContent={activeCompanies.length}
                    color="success"
                    overlap="circular"
                  />
                </Grid>
              </Grid>

              {activeCompanies.reverse()?.map((activeProject) => (
                // eslint-disable-next-line no-use-before-define
                <ActiveProjectComponent
                activeProject={activeProject}
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
              <Grid container spacing={2}>
                <Grid item xs={11} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="small" htmlColor="red" />
                  <Typography variant="h6" pl={1}>
                    INACTIVE
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Badge badgeContent={inActiveCompanies.length} color="warning" />
                </Grid>
              </Grid>

              {inActiveCompanies.reverse()?.map((inActiveProject) => (
                // eslint-disable-next-line no-use-before-define
                <InActiveProjectComponent
                  inActiveProject={inActiveProject}
                />
              ))}
            </CardContent>
          </Paper>
        </CardStyle>
      </Grid>
    </Grid>
  );
}

function NewProjectComponent({ newProject }: INewProject) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(newProject.status);
  const [newDeleteModal, setNewDeleteModal] = React.useState(false);
  const handleOpen = () => setNewDeleteModal(true);
  const handleDeleteModalClose = () => setNewDeleteModal(false);
  const [alert, setAlert] = React.useState(false);

  const handleClickSnackbar = () => {
    setAlert(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickAway') {
      return;
    }
    setAlert(false);
  };

  const removeData = (f: any) => {
    deleteProject(f.id);
    handleClickSnackbar();
    window.location.reload();
  };

  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const handleUpdateStatus = (event: SelectChangeEvent) => {
    setNewStatus(event.target.value as string);
  };

  const updateStatusHandler = async () => {
    try {
      const body = {
        status: newStatus,
      };
      await updateProject(newProject.id, body);

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
            <LocationCityIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {newProject.name}
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
                <Tooltip title="Edit">
                  <IconButton
                    onClick={handleEditModalOpen}
                    className={classes.buttonStyle}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Modal open={openEditModal} onClose={handleEditModalClose}>
                  <Box className={classes.modalStyle}>
                    <Card>
                      <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                          <Typography fontWeight="bold">
                            Current Selected Status
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth size="small">
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={newStatus}
                              onChange={handleUpdateStatus}
                            >
                              <MenuItem value="NEW">NEW</MenuItem>
                              <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                              <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          display="flex"
                          justifyContent="flex-end"
                        >
                          <Button
                            variant="contained"
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
                <Tooltip title="Delete">
                  <IconButton className={classes.buttonStyle}>
                    <DeleteIcon htmlColor="red" onClick={handleOpen} />
                  </IconButton>
                </Tooltip>
              </MenuItem>
            </Menu>
            <Snackbar
              open={alert}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Items Deleted Successfully...
              </Alert>
            </Snackbar>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={newDeleteModal}
              onClose={handleDeleteModalClose}
              closeAfterTransition
            >
              <Fade in={newDeleteModal}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-description"
                    fontSize="0.9rem"
                  >
                    Are you sure you want to delete the selected project?
                  </Typography>
                  <Grid container mt={4}>
                    <Grid item xs={6} />
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleDeleteModalClose()}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => removeData(newProject)}
                      >
                        Ok
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {newProject.email}
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
              {moment(newProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <Typography noWrap>Status - </Typography>
            <Typography noWrap variant="h6" color="blue">
              {newProject.status}
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
            <Typography noWrap pl={1.5}>
              {newProject.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

function ActiveProjectComponent({ activeProject }: IActiveProject) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(activeProject.status);

  const [activeDeleteModal, setActiveDeleteModal] = React.useState(false);
  const handleOpen = () => setActiveDeleteModal(true);
  const handleDeleteModalClose = () => setActiveDeleteModal(false);
  const [alert, setAlert] = React.useState(false);

  const handleClickSnackbar = () => {
    setAlert(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickAway') {
      return;
    }
    setAlert(false);
  };

  const removeData = (f: IProjects) => {
    deleteProject(f.id);
    handleClickSnackbar();
    window.location.reload();
  };

  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const handleUpdateStatus = (event: SelectChangeEvent) => {
    setNewStatus(event.target.value as string);
  };

  const updateStatusHandler = async () => {
    try {
      const body = {
        status: newStatus,
      };
      await updateProject(activeProject.id, body);

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
            <LocationCityIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {activeProject.name}
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
                <Tooltip title="Edit">
                  <IconButton
                    onClick={handleEditModalOpen}
                    className={classes.buttonStyle}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>

                <Modal open={openEditModal} onClose={handleEditModalClose}>
                  <Box className={classes.modalStyle}>
                    <Card>
                      <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                          <Typography fontWeight="bold">
                            Current Selected Status
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth size="small">
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={newStatus}
                              onChange={handleUpdateStatus}
                            >
                              <MenuItem value="NEW">NEW</MenuItem>
                              <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                              <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          display="flex"
                          justifyContent="flex-end"
                        >
                          <Button
                            variant="contained"
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
                <Tooltip title="Delete">
                  <IconButton
                    className={classes.buttonStyle}
                  >
                    <DeleteIcon htmlColor="red" onClick={handleOpen} />
                  </IconButton>
                </Tooltip>
              </MenuItem>
            </Menu>

            <Snackbar
              open={alert}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Items Deleted Successfully...
              </Alert>
            </Snackbar>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={activeDeleteModal}
              onClose={handleDeleteModalClose}
              closeAfterTransition
            >
              <Fade in={activeDeleteModal}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-description"
                    fontSize="0.9rem"
                  >
                    Are you sure you want to delete the selected project?
                  </Typography>
                  <Grid container mt={4}>
                    <Grid item xs={6} />
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleDeleteModalClose()}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => removeData(activeProject)}
                      >
                        Ok
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {activeProject.email}
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
              {moment(activeProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" color="green">
              {activeProject.status}
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
            <Typography noWrap pl={1.5}>
              {activeProject.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function InActiveProjectComponent({ inActiveProject }: IInActiveProject) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(inActiveProject.status);

  const [inActiveDeleteModal, setInActiveDeleteModal] = React.useState(false);
  const handleOpen = () => setInActiveDeleteModal(true);
  const handleDeleteModalClose = () => setInActiveDeleteModal(false);
  const [alert, setAlert] = React.useState(false);

  const handleClickSnackbar = () => {
    setAlert(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickAway') {
      return;
    }
    setAlert(false);
  };

  const removeData = (f: any) => {
    deleteProject(f.id);
    handleClickSnackbar();
    window.location.reload();
  };

  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const handleUpdateStatus = (event: SelectChangeEvent) => {
    setNewStatus(event.target.value as string);
  };

  const updateStatusHandler = async () => {
    try {
      const body = {
        status: newStatus,
      };
      await updateProject(inActiveProject.id, body);

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
            <LocationCityIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {inActiveProject.name}
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
                <Tooltip title="Edit">
                  <IconButton
                    onClick={handleEditModalOpen}
                    className={classes.buttonStyle}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Modal
                  open={openEditModal}
                  onClose={handleEditModalClose}
                  style={{ opacity: 1 }}
                >
                  <Box className={classes.modalStyle}>
                    <Card>
                      <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                          <Typography fontWeight="bold">
                            Current Selected Status
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth size="small">
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={newStatus}
                              onChange={handleUpdateStatus}
                            >
                              <MenuItem value="NEW">NEW</MenuItem>
                              <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                              <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          display="flex"
                          justifyContent="flex-end"
                        >
                          <Button
                            variant="contained"
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
                <Tooltip title="Delete">
                  <IconButton
                    className={classes.buttonStyle}
                  >
                    <DeleteIcon htmlColor="red" onClick={handleOpen} />
                  </IconButton>
                </Tooltip>
              </MenuItem>
            </Menu>
            <Snackbar
              open={alert}
              autoHideDuration={5000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Items Deleted Successfully...
              </Alert>
            </Snackbar>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={inActiveDeleteModal}
              onClose={handleDeleteModalClose}
              closeAfterTransition
            >
              <Fade in={inActiveDeleteModal}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-description"
                    fontSize="0.9rem"
                  >
                    Are you sure you want to delete the selected project?
                  </Typography>
                  <Grid container mt={4}>
                    <Grid item xs={6} />
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleDeleteModalClose()}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => removeData(inActiveProject)}
                      >
                        Ok
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {inActiveProject.email}
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
              {moment(inActiveProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" pl={2} pb={1}>
            <Typography noWrap>Status - </Typography>
            <Typography noWrap variant="h6" color="blue">
              {inActiveProject.status}
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
            <Typography noWrap pl={1.5}>
              {inActiveProject.mobile}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default ProjectKanbanView;
