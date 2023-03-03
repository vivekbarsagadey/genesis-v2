"use client";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import InfoProjectComponent from "../info";
import projectPagination from "./ProjectListPagination";
import { ListStyle as style } from "./ListStyle";

const ProjectListComponent = ({ copyProject, projectSearchList }) => {

  //pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(copyProject.length / PER_PAGE);
  const _DATA = projectPagination(copyProject, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  
  return (
    <div>
      <Box mt={2}>
        <Grid container style={style.container}>
          <Grid item xs={0.488}>
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={1.5} style={{ display: "flex" }}>
            <IconButton>
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={2.5} sm={2.5} style={style.grid}>
            <Typography style={style.typography}>Project Name</Typography>
          </Grid>
          <Grid item xs={2.7} sm={2.7} style={style.grid}>
            <Typography style={style.typography}>Customer Name</Typography>
          </Grid>
          <Grid item xs={2.8} sm={2.8} style={style.grid}>
            <Typography style={style.typography}>Application</Typography>
          </Grid>

          <Grid item xs={0.5} style={style.grid}>
            <Typography style={style.typography} noWrap>
              Action
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div style={{ height: "62vh" }}>
        {_DATA
          .currentData()
          .reverse()
          .filter((ele) =>
            ele.name.toLowerCase().includes(projectSearchList.toLowerCase())
          )
          .map((items, index) => {
            return (
              <div key={index}>
                <InfoProjectComponent items={items} />
              </div>
            );
          })}
      </div>
      <Grid container>
        <Grid item xs={11.8} style={style.pagination}>
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
