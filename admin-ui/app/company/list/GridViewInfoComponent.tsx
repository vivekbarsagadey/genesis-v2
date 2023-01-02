import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import ICompanyComponentProps from "../company.props";
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { deleteCompany } from "../services/CompanyServices";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ICompany from "../company.model";
import Link from "next/link";
import { Tooltip } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const useStyles = makeStyles({
    expandIcon: {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
    },
  });

interface GridViewInfoComponentProps extends ICompanyComponentProps {

    c:ICompany,
    show: boolean;
}

const GridViewInfoComponent = ({c,checked}:any) => {
    const [show, setShow] = useState(checked);
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

    useEffect(() => {
      setShow(checked);
      }, [checked]);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShow(event.target.checked);
      };

      const removeItem = async(c:any)=>{
        await deleteCompany(c);
  
      }

      const deleteItem = (c:any) =>{
        removeItem(c)
        handleClick
      }
     
   
    const classes = useStyles();
  return (
    <>
    <Box style={{ background: "#f8fafc",marginTop: "0.7rem"}}>
        <Grid container className={classes.expandIcon}>
          <Grid item xs={12} lg={1} sm={1} md={1} className={classes.expandIcon}>
            <Checkbox checked={show} onChange={handleChange}/>
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5} className={classes.expandIcon} >
            <Typography fontSize='small' noWrap>{c.name}</Typography>
           
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5} className={classes.expandIcon}>
            <Typography fontSize='small' noWrap>{c.email}</Typography>
           
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5} className={classes.expandIcon}>
            <Typography fontSize='small' noWrap>{c.mobile}</Typography>
           
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5} className={classes.expandIcon}>
            <Typography fontSize='small' noWrap >{c.address}</Typography>
           
          </Grid>
          <Grid item xs={1} lg={1} sm={1} md={1} >
            
        {show && 
          <Tooltip title="Delete">
          <IconButton onClick={()=>deleteItem(c)}>
           <DeleteOutlineIcon/>
           </IconButton>
           </Tooltip>}
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Item Deleted Successfully !!
              </Alert>
            </Snackbar>
          <Link href={`/company/${c._id}`}>
            <Tooltip title="Edit">
           <IconButton>
           <EditIcon/>
           </IconButton>
           </Tooltip>
           </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default GridViewInfoComponent
