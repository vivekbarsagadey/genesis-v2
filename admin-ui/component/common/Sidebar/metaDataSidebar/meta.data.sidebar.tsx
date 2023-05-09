import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { Grid } from '@mui/material';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import CabinIcon from '@mui/icons-material/Cabin';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import RoomIcon from '@mui/icons-material/Room';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import Link from 'next/link';

function MetaDataSidebar() {
  const [address, setAddress] = React.useState(false);
  const [roles, setRoles] = React.useState(false);
  const [dashboard, setDashboard] = React.useState(false);

  const handleClickAddress = () => {
    setAddress(!address);
  };
  const handleClickRoles = () => {
    setRoles(!roles);
  };
  const handleClickDashboard = () => {
    setDashboard(!dashboard);
  };

  return (
    <List>
      <Grid container>
        <Typography fontSize="1.2rem" ml={2}>
          Master Data
        </Typography>
      </Grid>

      <ListItemButton onClick={handleClickAddress}>
        {/* <Link
                  href="/metadata/address"
                  passHref
                  style={{ textDecoration: 'none' }}
                > */}
        <Grid container>
          <Grid item xs={2}>
            <RoomIcon fontSize="small" />
          </Grid>
          <Typography>Address</Typography>
        </Grid>
        {/* {/ </Link> /} */}
      </ListItemButton>
      <Collapse in={address} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={2}>
                <AssistantPhotoIcon fontSize="small" />
              </Grid>
              <Typography variant="h1">Country</Typography>
            </Grid>
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={2}>
                <CabinIcon fontSize="small" />
              </Grid>
              <Typography variant="h1">State</Typography>
            </Grid>
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={2}>
                <FmdBadIcon fontSize="small" />
              </Grid>
              <Typography variant="h1">City</Typography>
            </Grid>
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={2}>
                <HomeIcon fontSize="small" />
              </Grid>
              <Typography variant="h1">Pin Code</Typography>
            </Grid>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickRoles}>
        <Grid container>
          <Grid item xs={2}>
            <DirectionsWalkIcon fontSize="small" />
          </Grid>

          <Typography>Roles</Typography>
        </Grid>
      </ListItemButton>
      <Collapse in={roles} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            href="/roles"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItemButton sx={{ pl: 3 }}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={2}>
                  <SportsHandballIcon fontSize="small" />
                </Grid>

                <Typography variant="h1">Role</Typography>
              </Grid>
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickDashboard}>
        <Grid container>
          <Grid item xs={2}>
            <DashboardIcon fontSize="small" />
          </Grid>
          <Typography>Dashboard</Typography>
        </Grid>
      </ListItemButton>
      <Collapse in={dashboard} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            href="/metadatadashboard/templates"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItemButton sx={{ pl: 3 }}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={2}>
                  <HomeIcon fontSize="small" />
                </Grid>
                <Typography variant="h1">Templates</Typography>
              </Grid>
            </ListItemButton>
          </Link>

          <Link
            href="/metadatadashboard/widgets"
            passHref
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItemButton sx={{ pl: 3 }}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={2}>
                  <HomeIcon fontSize="small" />
                </Grid>
                <Typography variant="h1">Widgets</Typography>
              </Grid>
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}

export default MetaDataSidebar;
