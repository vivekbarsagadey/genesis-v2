import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ApiIcon from '@mui/icons-material/Api';
import { Card, IconButton, Paper, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { IProject, Status } from '../models';
import { ListComponentProps } from './props';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';

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

const ProjectKanbanView = ({ projects }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newProjects = projects.filter((ele: IProject) => {
    return ele.status == statusSet[2];
  });
  const activeProjects = projects.filter((ele: IProject) => {
    return ele.status == statusSet[0];
  });
  const inActiveProjects = projects.filter((ele: IProject) => {
    return ele.status == statusSet[1];
  });
  

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} mt={1} pr={2}>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined" className={classes.cardView}>
              <CardContent>
                <Card>
                  <Grid container p={1}>
                    <Grid item xs={11} display="flex" alignItems="center">
                      <FiberManualRecordIcon
                        fontSize="small"
                        htmlColor="blue"
                      />
                      <Typography variant="h6">NEW</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid gray"
                      borderRadius="6rem"
                      backgroundColor="lightgray"
                    >
                      <Typography fontSize="12px">
                        {newProjects.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                {newProjects.reverse()?.map((newProject, index) => {
                  return (
                    <NewProjectComponent newProject={newProject} key={index} />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined" className={classes.cardView}>
              <CardContent>
                <Card>
                  <Grid container p={1}>
                    <Grid item xs={11} display="flex" alignItems="center">
                      <FiberManualRecordIcon
                        fontSize="small"
                        htmlColor="green"
                      />
                      <Typography variant="h6">ACTIVE</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid gray"
                      borderRadius="5rem"
                      backgroundColor="lightgray"
                    >
                      <Typography fontSize="13px">
                        {activeProjects.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                {activeProjects.reverse()?.map((activeProject, index) => {
                  return (
                    <ActiveProjectComponent
                      activeProject={activeProject}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined" className={classes.cardView}>
              <CardContent>
                <Card>
                  <Grid container p={1}>
                    <Grid item xs={11} display="flex" alignItems="center">
                      <FiberManualRecordIcon fontSize="small" htmlColor="red" />
                      <Typography variant="h6">INACTIVE</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid gray"
                      borderRadius="5rem"
                      backgroundColor="lightgray"
                    >
                      <Typography fontSize="13px">
                        {inActiveProjects.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                {inActiveProjects.reverse()?.map((inActiveProject, index) => {
                  return (
                    <InActiveProjectComponent
                      inActiveProject={inActiveProject}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
      </Grid>
    </>
  );
};

const NewProjectComponent = ({ newProject }: INewProject) => {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={6} display="flex" alignItems="center" p={2}>
            <ApiIcon />
            <Typography noWrap pl={1}>
              {newProject.name}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent='flex-end' p={2}>
            <IconButton>
            <DeleteIcon fontSize='small'/>
            </IconButton>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon />
            <Typography noWrap pl={1}>
              {moment(newProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
          <Tooltip title='Edit Status'><Typography noWrap>Status -</Typography></Tooltip>
          <Typography noWrap variant="h6" pl={1}>
              {newProject.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
const ActiveProjectComponent = ({ activeProject }: IActiveProject) => {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={6} display="flex" alignItems="center" p={2}>
            <ApiIcon />
            <Typography noWrap pl={1}>
              {activeProject.name}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end" p={2}>
          <IconButton>
            <DeleteIcon fontSize='small'/>
            </IconButton>
            </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon />
            <Typography noWrap pl={1}>
              {moment(activeProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Tooltip title='Edit Status'><Typography noWrap>Status -</Typography></Tooltip>
            <Typography noWrap variant="h6" pl={1}>
              {activeProject.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
const InActiveProjectComponent = ({ inActiveProject }: IInActiveProject) => {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={6} display="flex" alignItems="center" p={2}>
            <ApiIcon />
            <Typography noWrap pl={1}>
              {inActiveProject.name}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end" p={2}>
          <IconButton>
            <DeleteIcon  fontSize='small'/>
            </IconButton>
                      </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon />
            <Typography noWrap pl={1}>
              {moment(inActiveProject.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
          <Tooltip title='Edit Status'><Typography noWrap>Status -</Typography></Tooltip>
          <Typography noWrap variant="h6" pl={1}>
              {inActiveProject.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ProjectKanbanView;
