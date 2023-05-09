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
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div style={{ overflowY: 'auto', height: '87vh' }}>
      <Box px={2} style={{ height: '58vh' }}>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleOpenDashboard}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AdjustIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItemButton>

          <ListItemButton onClick={handleOpenProject}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
          </ListItemButton>
          <Collapse in={openProject} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AdjustIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenCompany}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Company" />
          </ListItemButton>
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AdjustIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenCustomer}>
            <ListItemIcon>
              <SupportAgentIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItemButton>
          <Collapse in={openCustomer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AdjustIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenUser}>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
          <Collapse in={openUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AdjustIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
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
