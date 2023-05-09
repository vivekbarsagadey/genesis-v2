'use client';

import AdjustIcon from '@mui/icons-material/Adjust';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import ReportIcon from '@mui/icons-material/Report';
import StoreIcon from '@mui/icons-material/Store';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import MetaDataSidebar from '../metaDataSidebar/meta.data.sidebar';

interface sidebarProps {
  toggleMenu: boolean;
}

function ProjectSidebar({ toggleMenu }: sidebarProps) {
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openCustomer, setOpenCustomer] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);

  const handleOpenDashboard = () => {
    setOpenDashboard((s) => !s);
  };
  const handleOpenProject = () => {
    setOpenProject((s) => !s);
  };
  const handleOpenCompany = () => {
    setOpenCompany((s) => !s);
  };
  const handleOpenCustomer = () => {
    setOpenCustomer((s) => !s);
  };
  const handleOpenUser = () => {
    setOpenUser((s) => !s);
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
 
    <div
      style={{
        display: 'flex',
        height: '88vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <Box>
        <List>
          <ListItemButton onClick={handleOpenDashboard}>
            <Grid container>
              <Grid item xs={2}>
                <DashboardIcon fontSize="small" />
              </Grid>
              <Typography>Dashboard</Typography>
            </Grid>
          </ListItemButton>

          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <AdjustIcon fontSize="small" />
                  </Grid>
                  <Typography>Overview</Typography>
                </Grid>
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  <Typography>Report</Typography>
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <Grid container>
              <Grid item xs={2}>
                <ReportIcon fontSize="small" />
              </Grid>
              <Typography>Report</Typography>
            </Grid>
          </ListItemButton>

          <ListItemButton onClick={handleOpenProject}>
            <Grid container>
              <Grid item xs={2}>
                <AppsIcon fontSize="small" />
              </Grid>
              <Typography>Project</Typography>
            </Grid>
          </ListItemButton>
          <Collapse in={openProject} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <AdjustIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Overview</Typography>
                </Grid>
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Report</Typography>
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenCompany}>
            <Grid container>
              <Grid item xs={2}>
                <StoreIcon fontSize="small" />
              </Grid>
              <Typography>Company</Typography>
            </Grid>
          </ListItemButton>
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <AdjustIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Overview</Typography>
                </Grid>
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Report</Typography>
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenCustomer}>
            <Grid container>
              <Grid item xs={2}>
                <SupportAgentIcon fontSize="small" />
              </Grid>
              <Typography>Customer</Typography>
            </Grid>
          </ListItemButton>
          <Collapse in={openCustomer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <AdjustIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Overview</Typography>
                </Grid>
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Report</Typography>
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenUser}>
            <Grid container>
              <Grid item xs={2}>
                <Person2Icon fontSize="small" />
              </Grid>
              <Typography>User</Typography>
            </Grid>
          </ListItemButton>
          <Collapse in={openUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <AdjustIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Overview</Typography>
                </Grid>
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  <Typography variant="h1">Report</Typography>
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <MetaDataSidebar toggleMenu={toggleMenu} />
    </div>
  );
}
export default ProjectSidebar;
