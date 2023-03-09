import { Grid, Typography, Box, IconButton } from "@mui/material";
import IUserComponentProps from "../user.props";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import InfoUserComponent from "../info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import usePagination from "./pagination";
import { Pagination } from "@mui/material";


interface ListComponentProps extends IUserComponentProps {
  setUsers: any;
  show: boolean;
  setShow: any;
}
const ListComponent = ({
  items,
  setShow,
  show,
  setUsers,
  itemsCallBackHandler = () => {},
}: ListComponentProps) => {
  const [sortedIcon, setSortedIcon] = useState(true);
  const [sortedIconLastName, setSortedIconLastName] = useState(true);
  const [sortedIconEmail, setSortedIconEmail] = useState(true);
  const [sortedIconMobile, setSortedIconMobile] = useState(true);
  const [sortedIconAddress, setSortedIconAddress] = useState(true);
  // Pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(items.length / PER_PAGE);
  const _DATA = usePagination(items, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // Sorting logic
  const handleClick = () => {
    setSortedIcon(!sortedIcon);
    const sortData = [...items].sort((a, b) => {
      return a.firstName > b.firstName ? 1 : -1;
    });
    setUsers(sortData);
  };
  const handleSort = () => {
    setSortedIcon(!sortedIcon);
    const sortData = [...items].reverse();
    setUsers(sortData);
  };
  const handleClickLastName = () => {
    setSortedIconLastName(!sortedIconLastName);
    const sortedLastName = [...items].sort((a, b) => {
      return a.lastName > b.lastName ? 1 : -1;
    });
    setUsers(sortedLastName);
  };
  const handleSortlastName = () => {
    setSortedIconLastName(!sortedIconLastName);
    const sortedLastName = [...items].sort().reverse();
    setUsers(sortedLastName);
  };
  const handleClickEmail = () => {
    setSortedIconEmail(!sortedIconEmail);
    const sortedEmail = [...items].sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    });
    setUsers(sortedEmail);
  };
  const handleSortEmail = () => {
    setSortedIconEmail(!sortedIconEmail);
    const sortedEmail = [...items].sort().reverse();
    setUsers(sortedEmail);
  };
  const handleClickMobile = () => {
    setSortedIconMobile(!sortedIconMobile);
    const sortedMobile = [...items].sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    });
    setUsers(sortedMobile);
  };
  const handleSortMobile = () => {
    setSortedIconMobile(!sortedIconAddress);
    const sortedMobile = [...items].sort().reverse();
    setUsers(sortedMobile);
  };
  const handleClickAddress = () => {
    setSortedIconAddress(!sortedIconAddress);
    const sortedAdress = [...items].sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    });
    setUsers(sortedAdress);
  };
  const handleSortAddress = () => {
    setSortedIconAddress(!sortedIconAddress);
    const sortedAdress = [...items].sort().reverse();
    setUsers(sortedAdress);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShow(event.target.checked);
  };

  return (
    <>
      <Box px={3}>
        <Grid container >
          <Grid
            item
            xs={0.8}
           
          >
            <Checkbox checked={show} onChange={handleChange} size="small" />
          </Grid>
          <Grid
            item
            xs={2.2}
            sm={2.2}
          
          >
            <Typography  >
              First Name
            </Typography>
            {sortedIcon === true ? (
              <IconButton onClick={handleClick} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSort}>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid
            item
            xs={2.1}
            sm={2.1}
          
          >
            <Typography >Last Name</Typography>
            {sortedIconLastName === true ? (
              <IconButton onClick={handleClickLastName} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortlastName}>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid
            item
            xs={2.4}
            sm={2.6}
           
          >
            <Typography >Email</Typography>
            {sortedIconEmail === true ? (
              <IconButton onClick={handleClickEmail} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortEmail}>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
         
          >
            <Typography >Contact No.</Typography>
            {sortedIconMobile === true ? (
              <IconButton onClick={handleClickMobile} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortMobile}>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid
            item
            xs={1.5}
            sm={1.5}
            lg={1.6}
         
          >
            <Typography  noWrap>
              Address
            </Typography>
            {sortedIconAddress === true ? (
              <IconButton onClick={handleClickAddress} id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSortAddress}>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>

          <Grid item xs={0.5}>
            <Typography  noWrap>
              Action
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <div >
        {_DATA.currentData().map((f) => {
          return <InfoUserComponent f={f} key={f.id} />;
        })}
      </div>
      <div>
        <Grid container>
          <Grid item xs={11.8}>
            <div >
              <Pagination
                count={count}
                size="small"
                page={page}
                variant="outlined"
                color="primary"
                onChange={handleChangePage}
              />
            </div>
          </Grid>
          <Grid item xs={0.2}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default ListComponent;
