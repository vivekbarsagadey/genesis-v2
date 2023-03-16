"use client";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import InfoProjectComponent from "../info";
import IProject from "../project.model";
import projectPagination from "./project.list.pagination";
type ProjectComponentProps = {
  copyProject: Array<IProject>;
  projectSearchList: any;
};

const ProjectListComponent = ({
  copyProject,
  projectSearchList,
}: ProjectComponentProps) => {
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
      <Box mr={2} mt={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <IconButton>
                    <CheckBoxOutlineBlankIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  <IconButton>
                    <RemoveRedEyeIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="subtitle2" noWrap>
                Project Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" noWrap>
                Company Name
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Application
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                display={"flex"}
                justifyContent={"space-around"}
                noWrap
              >
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
          .filter((ele) =>
            ele.name.toLowerCase().includes(projectSearchList.toLowerCase())
          )
          ?.map((items, index) => {
            return (
              <Typography key={index}>
                <InfoProjectComponent items={items} />
              </Typography>
            );
          })}
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
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
      </Grid>
    </>
  );
};

export default ProjectListComponent;
