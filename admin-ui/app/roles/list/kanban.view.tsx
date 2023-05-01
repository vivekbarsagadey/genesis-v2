import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, IconButton, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { IRole } from '../models';
import { ListComponentProps } from './props';

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

type IActiveRole = {
  activeRole: IRole;
};
type INewRole = {
  newRole: IRole;
};
type IInActiveRole = {
  inActiveRole: IRole;
};
function RoleKanbanView({ roles }: ListComponentProps) {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newRoles = roles.filter((ele: IRole) => ele.status == statusSet[0]);
  const activeRole = roles.filter((ele: IRole) => ele.status == statusSet[1]);
  const inActiveRole = roles.filter((ele: IRole) => ele.status == statusSet[2]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <Grid container spacing={2} mt={1} pr={2}>
      <Grid item xs={4}>
        <CardStyle>
          <Paper variant="outlined" className={classes.cardView}>
            <CardContent>
              <Grid container>
                <Grid item xs={6} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="inherit" htmlColor="blue" />
                  <Typography variant="h6">NEW</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                  <IconButton className={classes.iconStyle}>
                    <MoreHorizIcon
                      htmlColor="black"
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    />
                  </IconButton>
                </Grid>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleDropdownClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleDropdownClose}>
                    <EditIcon fontSize="small" />
                    <Typography>Edit</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleDropdownClose}>
                    <DeleteIcon fontSize="small" htmlColor="red" />
                    <Typography color="red">Delete</Typography>
                  </MenuItem>
                </Menu>
              </Grid>
              {newRoles.reverse()?.map((newRole, index) => (
                <NewRolesComponent newRole={newRole} key={index} />
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
                <Grid item xs={6} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="inherit" htmlColor="green" />
                  <Typography variant="h6">ACTIVE</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                  <IconButton className={classes.iconStyle}>
                    <MoreHorizIcon
                      htmlColor="black"
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleDropdownClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleDropdownClose}>
                      <EditIcon fontSize="small" />
                      <Typography>Edit</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleDropdownClose}>
                      <DeleteIcon fontSize="small" htmlColor="red" />
                      <Typography color="red">Delete</Typography>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
              {activeRole.reverse()?.map((activeRole, index) => (
                <ActiveRoleComponent activeRole={activeRole} key={index} />
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
                <Grid item xs={6} display="flex" alignItems="center">
                  <FiberManualRecordIcon fontSize="inherit" htmlColor="red" />
                  <Typography variant="h6">INACTIVE</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                  <IconButton className={classes.iconStyle}>
                    <MoreHorizIcon
                      htmlColor="black"
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    />
                  </IconButton>
                </Grid>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleDropdownClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleDropdownClose}>
                    <EditIcon fontSize="small" />
                    <Typography>Edit</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleDropdownClose}>
                    <DeleteIcon fontSize="small" htmlColor="red" />
                    <Typography color="red">Delete</Typography>
                  </MenuItem>
                </Menu>
              </Grid>
              {inActiveRole.reverse()?.map((inActiveRole, index) => (
                <InActiveRoleComponent
                  inActiveRole={inActiveRole}
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

function NewRolesComponent({ newRole }: INewRole) {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center" p={2}>
            <LocationCityIcon />
            <Typography noWrap pl={1}>
              {newRole.name}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" pl={1}>
              {newRole.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function ActiveRoleComponent({ activeRole }: IActiveRole) {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center" p={2}>
            <LocationCityIcon />
            <Typography noWrap pl={1}>
              {activeRole.name}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" pl={1}>
              {activeRole.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
function InActiveRoleComponent({ inActiveRole }: IInActiveRole) {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center" p={2}>
            <LocationCityIcon />
            <Typography noWrap pl={1}>
              {inActiveRole.name}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" pl={1}>
              {inActiveRole.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default RoleKanbanView;
