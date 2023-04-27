import React, { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  Paper,
  Tooltip,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { ICompany, Status } from '../models';
import { ListComponentProps } from './props';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  company,
  createCompany,
  deleteCompany,
  updateCompany,
} from '../../../services/company.action';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';

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

type IActiveCompany = {
  activeCompany: ICompany;
};
type INewCompany = {
  newCompany: ICompany;
};
type IInActiveCompany = {
  inActiveCompany: ICompany;
};
const CompanyKanbanView = ({ companies }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[0];
    //  NEW,
  });
  const activeCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[1];
    // ACTIVE,
  });
  const inActiveCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[2];
    // INACTIVE
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
                        {newCompanies.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                {newCompanies.reverse()?.map((newCompany, index) => {
                  return (
                    <NewCompanyComponent newCompany={newCompany} key={index} />
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
                        {activeCompanies.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                {activeCompanies.reverse()?.map((activeCompany, index) => {
                  return (
                    <ActiveCompanyComponent
                      activeCompany={activeCompany}
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
                        {inActiveCompanies.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                {inActiveCompanies.reverse()?.map((inActiveCompany, index) => {
                  return (
                    <InActiveCompanyComponent
                      inActiveCompany={inActiveCompany}
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

const NewCompanyComponent = ({ newCompany }: INewCompany) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);
  const [newStatus, setNewStatus] = useState(newCompany.status);
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
      await updateCompany(newCompany.id, body);

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
            <LocationCityIcon fontSize="inherit" />
            <Typography noWrap pl={1} variant="h6">
              {$newCompany.name}
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
                              <MenuItem value={'NEW'}>NEW</MenuItem>
                              <MenuItem value={'ACTIVE'}>ACTIVE</MenuItem>
                              <MenuItem value={'INACTIVE'}>INACTIVE</MenuItem>
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
                  onClick={() => deleteCompany(newCompany.id)}
                  className={classes.buttonStyle}
                >
                  <DeleteIcon htmlColor="red" />
                </IconButton>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CalendarMonthIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {moment(newCompany.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <EmailIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {newCompany.email}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
            <CallIcon fontSize="inherit" />
            <Typography noWrap pl={1}>
              {newCompany.mobile}
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" pl={2} pb={2}>
            <Tooltip title="Edit Status">
              <Typography noWrap>Status -</Typography>
            </Tooltip>
            <Typography noWrap variant="h6" pl={1}>
              {newCompany.status}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
const ActiveCompanyComponent = ({ activeCompany }: IActiveCompany) => {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const handleEditModalOpen = () => setOpenEditModal(true);
    const handleEditModalClose = () => setOpenEditModal(false);
    const [newStatus, setNewStatus] = useState(activeCompany.status);
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
        await updateCompany(activeCompany.id, body);
  
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
              <LocationCityIcon fontSize="inherit" />
              <Typography noWrap pl={1} variant="h6">
                {activeCompany.name}
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
                                <MenuItem value={'NEW'}>NEW</MenuItem>
                                <MenuItem value={'ACTIVE'}>ACTIVE</MenuItem>
                                <MenuItem value={'INACTIVE'}>INACTIVE</MenuItem>
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
                    onClick={() => deleteCompany(activeCompany.id)}
                    className={classes.buttonStyle}
                  >
                    <DeleteIcon htmlColor="red" />
                  </IconButton>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
              <CalendarMonthIcon fontSize="inherit" />
              <Typography noWrap pl={1}>
                {moment(activeCompany.createdAt).format('DD/MM/YYYY')}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
              <EmailIcon fontSize="inherit" />
              <Typography noWrap pl={1}>
                {activeCompany.email}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
              <CallIcon fontSize="inherit" />
              <Typography noWrap pl={1}>
                {activeCompany.mobile}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" pl={2} pb={2}>
              <Tooltip title="Edit Status">
                <Typography noWrap>Status -</Typography>
              </Tooltip>
              <Typography noWrap variant="h6" pl={1}>
                {activeCompany.status}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
};
const InActiveCompanyComponent = ({ inActiveCompany }: IInActiveCompany) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const handleEditModalOpen = () => setOpenEditModal(true);
    const handleEditModalClose = () => setOpenEditModal(false);
    const [newStatus, setNewStatus] = useState(inActiveCompany.status);
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
        await updateCompany(inActiveCompany.id, body);
  
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
              <LocationCityIcon fontSize="inherit" />
              <Typography noWrap pl={1} variant="h6">
                {inActiveCompany.name}
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
                  <Modal open={openEditModal} onClose={handleEditModalClose} style={{opacity:1}}>
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
                                <MenuItem value={'NEW'}>NEW</MenuItem>
                                <MenuItem value={'ACTIVE'}>ACTIVE</MenuItem>
                                <MenuItem value={'INACTIVE'}>INACTIVE</MenuItem>
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
                    onClick={() => deleteCompany(inActiveCompany.id)}
                    className={classes.buttonStyle}
                  >
                    <DeleteIcon htmlColor="red" />
                  </IconButton>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
              <CalendarMonthIcon fontSize="inherit" />
              <Typography noWrap pl={1}>
                {moment(inActiveCompany.createdAt).format('DD/MM/YYYY')}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
              <EmailIcon fontSize="inherit" />
              <Typography noWrap pl={1}>
                {inActiveCompany.email}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" pl={2} pb={1}>
              <CallIcon fontSize="inherit" />
              <Typography noWrap pl={1}>
                {inActiveCompany.mobile}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" pl={2} pb={2}>
              <Tooltip title="Edit Status">
                <Typography noWrap>Status -</Typography>
              </Tooltip>
              <Typography noWrap variant="h6" pl={1}>
                {inActiveCompany.status}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
};

export default CompanyKanbanView;
