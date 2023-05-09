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
import Link from 'next/link';

type sidebarProps= {
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
          {/* <Link
            href="/dashboard"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          > */}
          <ListItemButton onClick={handleOpenDashboard}>
            <Grid container>
              <Grid item xs={2}>
                <DashboardIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Dashboard</Typography>}
            </Grid>
          </ListItemButton>
          {/* </Link> */}
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
          <Link
            href="/project"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItemButton onClick={handleOpenProject}>
              <Grid container>
                <Grid item xs={2}>
                  <AppsIcon fontSize="small" />
                </Grid>
                {toggleMenu && <Typography>Project</Typography>}
              </Grid>
            </ListItemButton>
          </Link>

          <Collapse in={openProject} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Grid container>
                  <Grid item xs={2}>
                    <AdjustIcon fontSize="small" />
                  </Grid>
                  {toggleMenu && <Typography variant="h1">Overview</Typography>}
                </Grid>
              </ListItemButton>
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
          {/* <Link
            href="/company"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          > */}
          <ListItemButton onClick={handleOpenCompany}>
            <Grid container>
              <Grid item xs={2}>
                <StoreIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Company</Typography>}
            </Grid>
          </ListItemButton>
          {/* </Link> */}
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

          {/* <Link
            href="/customer"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          > */}
          <ListItemButton onClick={handleOpenCustomer}>
            <Grid container>
              <Grid item xs={2}>
                <SupportAgentIcon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>Customer</Typography>}
            </Grid>
          </ListItemButton>
          {/* </Link> */}
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

          {/* <Link
            href="/user"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          > */}
          <ListItemButton onClick={handleOpenUser}>
            <Grid container>
              <Grid item xs={2}>
                <Person2Icon fontSize="small" />
              </Grid>
              {toggleMenu && <Typography>User</Typography>}
            </Grid>
          </ListItemButton>
          {/* </Link> */}

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
        </List>
      </Box>
      <MetaDataSidebar toggleMenu={toggleMenu} />
    </div>
  );
}
export default ProjectSidebar;
