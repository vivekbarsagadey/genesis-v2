import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ICompanyComponentProps from "../company.props";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { makeStyles } from "@mui/styles";
import GridViewInfoComponent from "./GridViewInfoComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "@mui/material/Pagination";
import usePagination from "./pagination";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const useStyles = makeStyles({
  expandIcon: {
    display: "flex",
    textAlign: "center",
    
    alignItems: "center",
  },
});

interface ListComponentProps extends ICompanyComponentProps {
  companies:any,
  setCompanies:any
  checked:any,
  setChecked:any
}
const ListViewComponent = ({ companies, setCompanies,checked,setChecked }: ListComponentProps) => {
 
  const [sortCompanyName, setSortCompanyName] = useState(true);
  const [sortCompanyEmail, setSortCompanyEmail] = useState(true)
  const [sortCompanyContact, setSortCompanyContact] = useState(true)
  const [sortCompanyAddress, setSortCompanyAddress] = useState(true)
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const count = Math.ceil(companies.length / PER_PAGE);
  const _DATA = usePagination(companies, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
const handleCheck =()=>{
  setChecked(!checked)
}
  
  const handleClick = () => {
    setSortCompanyName(!sortCompanyName);
    const sortData = [...companies].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setCompanies(sortData);
  };
  const handleSort = () => {
    setSortCompanyName(!sortCompanyName);
    const sortData = [...companies].sort().reverse();
    setCompanies(sortData);
  };

  const handleClickEmail = () => {
    setSortCompanyEmail(!sortCompanyEmail);
    const sortData = [...companies].sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    });
    setCompanies(sortData);
  };
  const handleSortEmail = () => {
    setSortCompanyEmail(!sortCompanyEmail);
    const sortData = [...companies].sort().reverse();
    setCompanies(sortData);
  };

  const handleClickContact = () => {
    setSortCompanyContact(!sortCompanyContact);
    const sortData = [...companies].sort((a, b) => {
      return a.contact > b.contact ? 1 : -1;
    });
    setCompanies(sortData);
  };
  const handleSortContact = () => {
    setSortCompanyContact(!sortCompanyContact);
    const sortData = [...companies].sort().reverse();
    setCompanies(sortData);
  };

  const handleClickAddress = () => {
    setSortCompanyAddress(!sortCompanyContact);
    const sortData = [...companies].sort((a, b) => {
      return a.address > b.address ? 1 : -1;
    });
    setCompanies(sortData);
  };
  const handleSortAddress = () => {
    setSortCompanyAddress(!sortCompanyContact);
    const sortData = [...companies].sort().reverse();
    setCompanies(sortData);
  };

 
  const classes = useStyles();
  return (
    <>
    
      <Box style={{ background: "#f8fafc" }}>
        <Grid container>
          <Grid item xs={12} lg={1} sm={1} md={1}>
            <Checkbox checked={checked} onChange={handleCheck} />
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5}  className={classes.expandIcon} >
            <Typography fontWeight="bold" fontSize="small" noWrap>
              Company Name
            </Typography>
            

            {sortCompanyName === true ? (
              <IconButton onClick={handleClick} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSort}>  
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5}  className={classes.expandIcon}>
            <Typography fontWeight="bold" fontSize="small" noWrap>
              Email
            </Typography>
            {sortCompanyEmail === true ? (
              <IconButton onClick={handleClickEmail} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortEmail}>  
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5}  className={classes.expandIcon}>
            <Typography fontWeight="bold" fontSize="small" noWrap>
              Contact
            </Typography>
            {sortCompanyContact === true ? (
              <IconButton onClick={handleClickContact} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortContact}>  
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={2.5} lg={2.5} sm={2.5} md={2.5}  className={classes.expandIcon}>
            <Typography fontWeight="bold" fontSize="small" noWrap>
              Address
            </Typography>
            {sortCompanyAddress === true ? (
              <IconButton onClick={handleClickAddress} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortAddress}>  
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={1} lg={1} sm={1} md={1} className={classes.expandIcon}>
            <Typography fontWeight="bold" fontSize="small" noWrap>
              Action
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {_DATA.currentData().map((c) => {
        return <GridViewInfoComponent checked={checked} key={c._id} c={c} />;
      })}


<Grid container style={{display:'flex',justifyContent:'flex-end',position:'relative'}} pt={2}>
        <div style={{position:'fixed'}}>
          <Pagination
            count={count}
            size="medium"
            page={page}
            color="primary"
            variant="outlined"
            onChange={handleChange}
          />
       </div>
      </Grid>
    </>
  );
};

export default ListViewComponent;
