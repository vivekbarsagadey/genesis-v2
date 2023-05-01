'use client';

import React, { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ApiIcon from '@mui/icons-material/Api';
import {
  Card,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Select,
  Tooltip,
  Button,
} from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { deleteProject, updateProject } from '../../../services/project.action';
import { ListComponentProps } from './props';
import { IProject, Status } from '../models';

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

type IActiveProject = {
  activeProject: IProject;
};
type INewProject = {
  newProject: IProject;
};
type IInActiveProject = {
  inActiveProject: IProject;
};

function ProjectKanbanView({ projects }: ListComponentProps) {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newProjects = projects.filter(
    (ele: IProject) => ele.status == statusSet[0],
  );
  const activeProjects = projects.filter(
    (ele: IProject) => ele.status == statusSet[1],
  );
  const inActiveProjects = projects.filter(
    (ele: IProject) => ele.status == statusSet[2],
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
                  <Typography fontSize="12px">{newProjects.length}</Typography>
                </Grid>
              </Grid>

              {newProjects.reverse()?.map((newProject, index) => (
                <NewProjectComponent newProject={newProject} key={index} />
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
                  <Typography fontSize="12px">
                    {activeProjects.length}
                  </Typography>
                </Grid>
              </Grid>

              {activeProjects.reverse()?.map((activeProject, index) => (
                <ActiveProjectComponent
                  activeProject={activeProject}
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
                    {inActiveProjects.length}
                  </Typography>
                </Grid>
              </Grid>

              {inActiveProjects.reverse()?.map((inActiveProject, index) => (
                <InActiveProjectComponent
                  inActiveProject={inActiveProject}
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

function NewProjectComponent({ newProject }: INewProject) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(newProject.status);
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
            <ApiIcon fontSize="inherit" />
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
                  onClick={() => deleteProject(newProject.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>

          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={2}>
              {moment(newProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="blue">
              {newProject.status}
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
            <ApiIcon fontSize="inherit" />
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
                  onClick={() => deleteProject(activeProject.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={2}>
              {moment(activeProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="green">
              {activeProject.status}
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
            <ApiIcon fontSize="inherit" />
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
                  onClick={() => deleteProject(inActiveProject.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>

          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={2}>
              {moment(inActiveProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1} color="red">
              {inActiveProject.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default ProjectKanbanView;
