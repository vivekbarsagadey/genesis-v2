"use client";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import InfoProjectComponent from "../info";
import projectPagination from "./ProjectListPagination";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    backgroundColor: "#f1f5f9",
    paddingLeft: "0.5rem",
    width: "98.5%",
    borderRadius: "8px 8px 0px 0px ",
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

const ProjectListComponent = ({ newproject, listSearch }: any) => {
  const classes = useStyles();
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(newproject.length / PER_PAGE);
  const _DATA = projectPagination(newproject, PER_PAGE);

  const handleChangePage = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };
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
            <Typography className={classes.typography}>Project Name</Typography>
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
          </Grid>
          <Grid
            item
            xs={2.8}
            sm={2.8}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography className={classes.typography}>Application</Typography>
          </Grid>

          <Grid item xs={0.5} style={{ display: "flex", alignItems: "center" }}>
            <Typography className={classes.typography} noWrap>
              Action
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div style={{ height: "62vh" }}>
        {_DATA
          .currentData()
          .reverse()
          .filter((ele: any) =>
            ele.name.toLowerCase().includes(listSearch.toLowerCase())
          )
          .map((items: any, index: any) => {
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
