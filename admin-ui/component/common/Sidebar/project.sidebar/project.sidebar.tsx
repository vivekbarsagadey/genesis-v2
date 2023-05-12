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
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import React from 'react';
import MetaDataSidebar from '../metaDataSidebar/meta.data.sidebar';

const useStyles = makeStyles({
  gridContainer: {
    display: 'flex',
    height: '88vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
    marginLeft: '0.7rem',
    marginRight: '0.7rem',
    paddingRight: '1.3rem',
    // background:'red',
    width:'105%'
  },
  link: { textDecoration: 'none', color: 'black' },
});

type sidebarProps = {
  toggleMenu: boolean;
};

function ProjectSidebar({ toggleMenu }: sidebarProps) {
  const classes = useStyles();
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
    <Grid className={classes.gridContainer}>
      <Box>
        <List>
          <ListItemButton
            onClick={handleOpenDashboard}
            selected={openDashboard ? true : false}
          >
            <Grid container>
              <Grid item xs={2}>
                <DashboardIcon fontSize="small" />
              </Grid>
              {toggleMenu && (
                <Typography
                  display={{ xs: 'none', sm: 'none', md: 'block' }}
                  style={{
                    fontSize: openDashboard ? 15 : 14,
                    fontWeight: openDashboard ? 'bold' : 'normal',
                  }}
                >
                  Dashboard
                </Typography>
              )}
            </Grid>
          </ListItemButton>
          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/dashboard" passHref className={classes.link}>
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Overview
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 5 }}>
                <Grid container>
                  <Grid item xs={3}>
                    <ReportIcon fontSize="small" />
                  </Grid>
                  {toggleMenu && (
                    <Typography
                      variant="h1"mt={0.5}
                      display={{ xs: 'none', sm: 'none', md: 'block' }}
                    >
                      Report
                    </Typography>
                  )}
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>

          <Link href="/report" passHref className={classes.link}>
            <ListItemButton>
              <Grid container>
                <Grid item xs={2}>
                  <ReportIcon fontSize="small" />
                </Grid>
                {toggleMenu && (
                  <Typography display={{ xs: 'none', sm: 'none', md: 'block' }}>
                    Report
                  </Typography>
                )}
              </Grid>
            </ListItemButton>
          </Link>

          <ListItemButton
            onClick={handleOpenProject}
            selected={openProject ? true : false}
          >
            <Grid container>
              <Grid item xs={2}>
                <AppsIcon fontSize="small" />
              </Grid>
              {toggleMenu && (
                <Typography
                  display={{ xs: 'none', sm: 'none', md: 'block' }}
                  style={{
                    fontSize: openProject ? 15 : 14,
                    fontWeight: openProject ? 'bold' : 'normal',
                  }}
                >
                  Project
                </Typography>
              )}
            </Grid>
          </ListItemButton>
          <Collapse in={openProject} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/project" passHref className={classes.link}>
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1" mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Overview
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/project/projectreport"
                passHref
                className={classes.link}
              >
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Report
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={handleOpenCompany}
            selected={openCompany ? true : false}
          >
            <Grid container>
              <Grid item xs={2}>
                <StoreIcon fontSize="small" />
              </Grid>
              {toggleMenu && (
                <Typography
                  display={{ xs: 'none', sm: 'none', md: 'block' }}
                  style={{
                    fontSize: openCompany ? 15 : 14,
                    fontWeight: openCompany ? 'bold' : 'normal',
                  }}
                >
                  Company
                </Typography>
              )}
            </Grid>
          </ListItemButton>
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/company" passHref className={classes.link}>
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Overview
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/company/companyreport"
                passHref
                className={classes.link}
              >
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Report
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={handleOpenCustomer}
            selected={openCustomer ? true : false}
          >
            <Grid container>
              <Grid item xs={2}>
                <SupportAgentIcon fontSize="small" />
              </Grid>
              {toggleMenu && (
                <Typography
                  display={{ xs: 'none', sm: 'none', md: 'block' }}
                  style={{
                    fontSize: openCustomer ? 15 : 14,
                    fontWeight: openCustomer ? 'bold' : 'normal',
                  }}
                >
                  Customer
                </Typography>
              )}
            </Grid>
          </ListItemButton>
          <Collapse in={openCustomer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/customer" passHref className={classes.link}>
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container>
                    <Grid item xs={3}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Overview
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link
                href="/customer/customerreport"
                passHref
                className={classes.link}
              >
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Report
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={handleOpenUser}
            selected={openUser ? true : false}
          >
            <Grid container>
              <Grid item xs={2}>
                <Person2Icon fontSize="small" />
              </Grid>
              {toggleMenu && (
                <Typography
                  display={{ xs: 'none', sm: 'none', md: 'block' }}
                  style={{
                    fontSize: openUser ? 15 : 14,
                    fontWeight: openUser ? 'bold' : 'normal',
                  }}
                >
                  User
                </Typography>
              )}
            </Grid>
          </ListItemButton>
          <Collapse in={openUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/user" passHref className={classes.link}>
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <AdjustIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Overview
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link href="/user/userreport" passHref className={classes.link}>
                <ListItemButton sx={{ pl: 5 }}>
                  <Grid container >
                    <Grid item xs={3}>
                      <ReportIcon fontSize="small" />
                    </Grid>
                    {toggleMenu && (
                      <Typography
                        variant="h1"mt={0.5}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                      >
                        Report
                      </Typography>
                    )}
                  </Grid>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </Box>
      <MetaDataSidebar toggleMenu={toggleMenu} />
    </Grid>
  );
}
export default ProjectSidebar;
