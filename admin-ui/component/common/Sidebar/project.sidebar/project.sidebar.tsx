'use client';

import AdjustIcon from '@mui/icons-material/Adjust';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import ReportIcon from '@mui/icons-material/Report';
import StoreIcon from '@mui/icons-material/Store';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';
import React from 'react';
import MetaDataSidebar from '../metaDataSidebar/meta.data.sidebar';

type sidebarProps = {
  toggleMenu: boolean;
}

function ProjectSidebar({ toggleMenu }: sidebarProps) {
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openCustomer, setOpenCustomer] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);

  const handleOpenDashboard = () => {
    setOpenDashboard(!openDashboard);
    setOpenProject(false);
    setOpenCompany(false);
    setOpenCustomer(false);
    setOpenUser(false);
  };
  const handleOpenProject = () => {
    setOpenDashboard(false);
    setOpenProject(!openProject);
    setOpenCompany(false);
    setOpenCustomer(false);
    setOpenUser(false);
  };
  const handleOpenCompany = () => {
    setOpenDashboard(false);
    setOpenProject(false);
    setOpenCompany(!openCompany);
    setOpenCustomer(false);
    setOpenUser(false);
  };
  const handleOpenCustomer = () => {
    setOpenDashboard(false);
    setOpenProject(false);
    setOpenCompany(false);
    setOpenCustomer(!openCustomer);
    setOpenUser(false);
  };
  const handleOpenUser = () => {
    setOpenDashboard(false);
    setOpenProject(false);
    setOpenCompany(false);
    setOpenCustomer(false);
    setOpenUser(!openUser);
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
          <ListItemButton onClick={handleOpenDashboard} selected={openDashboard ? true : false} >
            <Grid container>
              <Grid item xs={2}>
                <DashboardIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Dashboard</Typography>}
            </Grid>
          </ListItemButton>
          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/dashboard"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography variant="h1">Overview</Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  {toggleMenu && <Typography variant="h1">Report</Typography>}
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>

          <Link
            href="/report"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItemButton>
              <Grid container>
                <Grid item xs={2}>
                  <ReportIcon fontSize="small" />
                </Grid>
                {toggleMenu && <Typography>Report</Typography>}
              </Grid>
            </ListItemButton>
          </Link>

          <ListItemButton onClick={handleOpenProject} selected={openProject ? true : false}>
            <Grid container>
              <Grid item xs={2}>
                <AppsIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Project</Typography>}
            </Grid>
          </ListItemButton>
          <Collapse in={openProject} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/project"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && <Typography variant="h1">Overview</Typography>}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/project/projectreport"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && <Typography variant="h1">Report</Typography>}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton onClick={handleOpenCompany} selected={openCompany ? true : false}>
            <Grid container>
              <Grid item xs={2}>
                <StoreIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Company</Typography>}
            </Grid>
          </ListItemButton>
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/company"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography variant="h1">Overview</Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/company/companyreport"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && <Typography variant="h1">Report</Typography>}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton onClick={handleOpenCustomer} selected={openCustomer ? true : false}>
            <Grid container>
              <Grid item xs={2}>
                <SupportAgentIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Customer</Typography>}
            </Grid>
          </ListItemButton>
          <Collapse in={openCustomer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/customer"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography variant="h1">Overview</Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/customer/customerreport"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && <Typography variant="h1">Report</Typography>}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton onClick={handleOpenUser} selected={openUser ? true : false}>
            <Grid container>
              <Grid item xs={2}>
                <Person2Icon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>User</Typography>}
            </Grid>
          </ListItemButton>
          <Collapse in={openUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/user"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography variant="h1">Overview</Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/user/userreport"
                passHref
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <Grid container>
                    <Grid item xs={2}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && <Typography variant="h1">Report</Typography>}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

        </List>
      </Box>
      <MetaDataSidebar toggleMenu={toggleMenu} />
    </div>
  );
}
export default ProjectSidebar;
