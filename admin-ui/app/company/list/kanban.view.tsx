import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, IconButton, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import React from 'react';
import { ICompany, Status } from "../models";
import { ListComponentProps } from "./props";

const CardStyle = styled(Grid)(({ theme }) => ({
  height: "80vh",
  overflowY: "auto",
}));

const useStyles = makeStyles({
  cardView:{
    background:'#F1F6F9',
  },
  iconStyle:{
    padding:'0px'
  }
 
})

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
  });
  const activeCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[1];
  });
  const inActiveCompanies = companies.filter((ele: ICompany) => {
    return ele.status == statusSet[2];
  });


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined" className={classes.cardView}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6} display='flex' alignItems='center'>
                  <FiberManualRecordIcon fontSize="inherit" htmlColor="blue"/>
                  <Typography variant="h6" >NEW</Typography> 
                  </Grid>
                  <Grid item xs={6}  display='flex' justifyContent='flex-end'>
                  <IconButton className={classes.iconStyle}>
                    <MoreHorizIcon htmlColor='black' id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
                    </IconButton>
                  </Grid>
                  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
                </Grid>
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
            <Paper variant="outlined" className={classes.cardView} >
              <CardContent>
                <Grid container>
                  <Grid item xs={6} display='flex' alignItems='center'>
                  <FiberManualRecordIcon fontSize="inherit" htmlColor="green"/>
                  <Typography variant="h6">ACTIVE</Typography>
                  </Grid>
                  <Grid item xs={6}  display='flex' justifyContent='flex-end'>
                  <IconButton
                  className={classes.iconStyle}>
                     <MoreHorizIcon htmlColor='black'
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
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
                  </Grid>


                </Grid>
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
              <Grid container >
                  <Grid item xs={6} display='flex' alignItems='center'>
                  <FiberManualRecordIcon fontSize="inherit" htmlColor="red"/>
                  <Typography variant="h6">INACTIVE</Typography>
                  </Grid>
                  <Grid item xs={6}  display='flex' justifyContent='flex-end'>
                    <IconButton className={classes.iconStyle}>
                    <MoreHorizIcon htmlColor='black'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}/>
                    </IconButton>
                  </Grid>
                  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
                </Grid>
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
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display='flex' alignItems='center' p={2}>
            <LocationCityIcon/>
            <Typography noWrap pl={1}>{newCompany.name}</Typography>
          </Grid>
          <Grid item xs={12} display= 'flex' pl={2} pb={2} >
          <Typography noWrap>
          Status -
        </Typography>
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
  return (
    <Box mt={1} >
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display='flex' alignItems='center' p={2}>
            <LocationCityIcon/>
            <Typography noWrap pl={1}>{activeCompany.name}</Typography>
          </Grid>
          <Grid item xs={12} display= 'flex' pl={2} pb={2} >
          <Typography noWrap>
          Status -
        </Typography>
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
  return (
    <Box mt={1}>
      <Card variant="outlined">
        <Grid container>
          <Grid item xs={12} display='flex' alignItems='center' p={2}>
            <LocationCityIcon/>
            <Typography noWrap pl={1}>{inActiveCompany.name}</Typography>
          </Grid>
          <Grid item xs={12} display= 'flex' pl={2} pb={2} >
          <Typography noWrap>
          Status -
        </Typography>
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
