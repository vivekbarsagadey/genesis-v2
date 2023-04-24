import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { IUser, Status } from '../models';
import { ListComponentProps } from './props';
import { Card, IconButton, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
type NewUser = {
  newUser: IUser;
};
type IActiveUser = {
  activeUser: IUser;
};
type IInActiveUser = {
  inActiveUser: IUser;
};
const UserKanbanView = ({ user }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const newUsers = user.filter((ele: IUser) => {
    return ele.status == statusSet[0];
  });
  const activeUsers = user.filter((ele: IUser) => {
    return ele.status == statusSet[1];
  });
  const inActiveUsers = user.filter((ele: IUser) => {
    return ele.status == statusSet[2];
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  console.log("user >>>",user)
  return (
    <>
      <Grid container spacing={2} mt={1} pr={2}>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined" className={classes.cardView}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6} display="flex" alignItems="center">
                    <FiberManualRecordIcon
                      fontSize="inherit"
                      htmlColor="blue"
                    />
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
                {newUsers.reverse()?.map((newUser, index) => {
                  return <NewUserComponent newUser={newUser} key={index} />;
                })}
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
                    <FiberManualRecordIcon
                      fontSize="inherit"
                      htmlColor="green"
                    />
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
                {activeUsers.reverse()?.map((activeUser, index) => {
                  return (
                    <ActiveUserComponent activeUser={activeUser} key={index} />
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
                {inActiveUsers.reverse()?.map((inActiveUser, index) => {
                  return (
                    <InActiveUserComponent
                      inActiveUser={inActiveUser}
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

const NewUserComponent = ({ newUser }: INewCompany) => {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center" p={2}>
            <PersonIcon />
            <Typography noWrap pl={1}>
              {newUser.firstName}
            </Typography>
            <Typography noWrap pl={1}>
              {newUser.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" pl={1}>
              {newUser.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
const ActiveUserComponent = ({ activeUser }: IActiveUser) => {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center" p={2}>
            <PersonIcon />
            <Typography noWrap pl={1}>
              {activeUser.firstName}
            </Typography>
            <Typography noWrap pl={1}>
              {activeUser.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" pl={1}>
              {activeUser.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
const InActiveUserComponent = ({ inActiveUser }: IInActiveUser) => {
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center" p={2}>
            <PersonIcon />
            <Typography noWrap pl={1}>
              {inActiveUser.firstName}
            </Typography>
            <Typography noWrap pl={1}>
              {inActiveUser.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Typography noWrap>Status -</Typography>
            <Typography noWrap variant="h6" pl={1}>
              {inActiveUser.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
export default UserKanbanView;
