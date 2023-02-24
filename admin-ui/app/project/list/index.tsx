"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InfoTestingComponent from "../info";
import { makeStyles } from "@mui/styles";
import InfoUserComponent from "../info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProjectPagination from "./ProjectListPagination";
import usePagination from "./ProjectListPagination";
import Pagination from "@mui/material/Pagination";
import projectPagination from "./ProjectListPagination";
import InfoProjectComponent from "../info";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    backgroundColor: "#f1f5f9",
    paddingLeft: "0.5rem",
    width: "98.5%",
    borderRadius: "15px 15px 0px 0px ",
    borderBottom: "3px solid #0284c7",
  },
  typography: {
    color: "#494a49",
    fontWeight: "600",
    fontSize: "0.75rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    position: "relative",
  },
});

const ProjectListComponent = ({ newproject }: any) => {
  const [sortedIcon, setSortedIcon] = useState(true);
  const [sortedIconLastName, setSortedIconLastName] = useState(true);
  const [sortedIconEmail, setSortedIconEmail] = useState(true);
  const classes = useStyles();

  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(newproject.length / PER_PAGE);
  const _DATA = projectPagination(newproject, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // // Sorting logic
  // const handleClick = () => {
  //   setSortedIcon(!sortedIcon);
  //   const sortData = [...items].sort((a, b) => {
  //     return a.firstName > b.firstName ? 1 : -1;
  //   });
  //   setUsers(sortData);
  // };
  // const handleSort = () => {
  //   setSortedIcon(!sortedIcon);
  //   const sortData = [...items].reverse();
  //   setUsers(sortData);
  // };
  // const handleClickLastName = () => {
  //   setSortedIconLastName(!sortedIconLastName);
  //   const sortedLastName = [...items].sort((a, b) => {
  //     return a.lastName > b.lastName ? 1 : -1;
  //   });
  //   setUsers(sortedLastName);
  // };
  // const handleSortlastName = () => {
  //   setSortedIconLastName(!sortedIconLastName);
  //   const sortedLastName = [...items].sort().reverse();
  //   setUsers(sortedLastName);
  // };
  // const handleClickEmail = () => {
  //   setSortedIconEmail(!sortedIconEmail);
  //   const sortedEmail = [...items].sort((a, b) => {
  //     return a.email > b.email ? 1 : -1;
  //   });
  //   setUsers(sortedEmail);
  // };
  // const handleSortEmail = () => {
  //   setSortedIconEmail(!sortedIconEmail);
  //   const sortedEmail = [...items].sort().reverse();
  //   setUsers(sortedEmail);
  // };
  // const handleClickMobile = () => {
  //   setSortedIconMobile(!sortedIconMobile);
  //   const sortedMobile = [...items].sort((a, b) => {
  //     return a.email > b.email ? 1 : -1;
  //   });
  //   setUsers(sortedMobile);
  // };
  // const handleSortMobile = () => {
  //   setSortedIconMobile(!sortedIconAddress);
  //   const sortedMobile = [...items].sort().reverse();
  //   setUsers(sortedMobile);
  // };
  // const handleClickAddress = () => {
  //   setSortedIconAddress(!sortedIconAddress);
  //   const sortedAdress = [...items].sort((a, b) => {
  //     return a.email > b.email ? 1 : -1;
  //   });
  //   setUsers(sortedAdress);
  // };
  // const handleSortAddress = () => {
  //   setSortedIconAddress(!sortedIconAddress);
  //   const sortedAdress = [...items].sort().reverse();
  //   setUsers(sortedAdress);
  // };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setShow(event.target.checked);
  // };

  return (
    <div>
      <Box style={{ marginTop: "1rem" }}>
        <Grid container className={classes.container}>
          <Grid
            item
            xs={0.488}
            style={{ display: "flex", justifyContent: "left" }}
          >
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={1.5} style={{ display: "flex" }}>
            <IconButton>
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={2.5}
            sm={2.5}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography className={classes.typography}>
              Project Name
            </Typography>
            {sortedIcon === true ? (
              <IconButton id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid
            item
            xs={2.7}
            sm={2.7}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography className={classes.typography}>
              Customer Name
            </Typography>
            {sortedIconLastName === true ? (
              <IconButton id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>
          <Grid
            item
            xs={2.8}
            sm={2.8}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography className={classes.typography}>Application</Typography>
            {sortedIconEmail === true ? (
              <IconButton id="sort-a-z">
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton>
                {" "}
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Grid>

          <Grid item xs={0.5} style={{ display: "flex", alignItems: "center" }}>
            <Typography className={classes.typography} noWrap>
              Action
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div style={{ height: "62vh" }}>
        {_DATA.currentData().map((items: any, index: any) => {
          return (
            <div key={index}>
              <InfoProjectComponent items={items} />
            </div>
          );
        })}
      </div>
      <Grid container>
        <Grid item xs={11.8} className={classes.pagination}>
          <div style={{ position: "fixed" }}>
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
  );
};

export default ProjectListComponent;
