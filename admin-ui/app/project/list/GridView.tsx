import Card from "@mui/material/Card/Card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";
import IProject from "../project.model";
import { ListStyle as style } from "./ListStyle";
import projectGridPagination from "./ProjectGridPagination";

interface IProjectProp {
  copyProject: IProject;
}

const ProjectGridView = ({ copyProject }: IProjectProp) => {
  // Pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(copyProject.length / PER_PAGE);
  const _DATA = projectGridPagination(copyProject, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      <Box>
        <Grid container spacing={1.5} mt={0.5} style={style.paginationheader}>
          {_DATA
            .currentData()
            .reverse()
            .map((item: any) => {
              return (
                <Grid item lg={4} xs={12} sm={6} md={4} mt={0} key={item.id}>
                  <Card style={style.box}>
                    <Box>
                      <Grid container style={style.card}>
                        <Grid item xs={5}>
                          <Typography style={style.gridfontsize}>
                            
                            Project Name
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography style={style.gridfontsize}> :</Typography>
                        </Grid>
                        <Grid item xs={5.5}>
                          <Typography style={style.gridfontsize} noWrap>
                            {item?.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1}>
                      <Grid container>
                        <Grid item xs={5.3} style={style.card}>
                          <Typography style={style.gridfontsize}>
                            Customer Name
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography style={style.gridfontsize}> :</Typography>
                        </Grid>
                        <Grid item xs={5.2}>
                          <Typography style={style.gridfontsize} noWrap>
                            {" "}
                            {item?.customerName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1}>
                      <Grid container>
                        <Grid item xs={5.3} style={style.card}>
                          <Typography style={style.gridfontsize}>
                            Application
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography style={style.gridfontsize}> :</Typography>
                        </Grid>
                        <Grid item xs={5.2}>
                          <Typography style={style.gridfontsize}>
                            {item?.application}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
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
      </Box>
    </>
  );
};

export default ProjectGridView;
