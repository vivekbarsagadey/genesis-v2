"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import InfoProjectComponent from "../info";
import IProject from "../project.model";
import projectPagination from "./project.list.pagination";

const ProjectListComponent = ({
  copyProject,
  projectSearchList,
}) => {
  //pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(copyProject.length / PER_PAGE);
  const _DATA = projectPagination(copyProject, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Box mt={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={0.12}></Grid>
            <Grid item xs={0.488}>
              <Checkbox size="small" />
            </Grid>
            <Grid item xs={1.45} style={{ display: "flex" }}>
              <IconButton>
                <RemoveRedEyeIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={2.5} sm={2.5}>
              <Typography variant="subtitle2">Project Name</Typography>
            </Grid>
            <Grid item xs={2.7} sm={2.7}>
              <Typography variant="subtitle2">Customer Name</Typography>
            </Grid>
            <Grid item xs={2.8} sm={3.4}>
              <Typography variant="subtitle2">Application</Typography>
            </Grid>

            <Grid item xs={0.8}>
              <Typography variant="subtitle2" noWrap>
                Action
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Grid style={{ height: "62vh" }}>
        {_DATA
          .currentData()
          .reverse()
          .filter((ele) => ele.name.toLowerCase().includes(projectSearchList.toLowerCase()) )
          .map((items, index) => {
            return (
              <Typography key={index}>
                <InfoProjectComponent items={items} />
              </Typography>
            );
          })}
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={11.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}>
            <Pagination
              count={count}
              size="small"
              page={page}
              variant="outlined"
              color="primary"
              onChange={handleChangePage}
            />
          </Grid>
        </Grid>
        <Grid item xs={0.2}></Grid>
      </Grid>
    </>
  );
};

export default ProjectListComponent;
