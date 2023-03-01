import { IconButton } from "@mui/material";
import Card from "@mui/material/Card/Card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
import projectGridPagination from "./ProjectGridPagination";

const useStyles = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    position: "relative",
  },
});

const ProjectGridView = ({ copyProject }: any) => {
  const classes = useStyles();
  // Pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(copyProject.length / PER_PAGE);
  const _DATA = projectGridPagination(copyProject, PER_PAGE);

  const handleChangePage = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      <Box>
        <Grid
          container
          spacing={1.5}
          mt={0.5}
          pr={2.8}
          style={{ height: "71.5vh" }}
        >
          {_DATA
            .currentData()
            .reverse()
            .map((item: any) => {
              return (
                <Grid item lg={4} xs={12} sm={6} md={4} mt={0} key={item.id}>
                  <Card style={{ padding: "0.8rem" }}>
                    <Box>
                      <Grid container style={{ paddingLeft: "1rem" }}>
                        <Grid item xs={5}>
                          <Typography fontSize={"0.75rem"}>
                            Project Name
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography fontSize={"0.75rem"}> :</Typography>
                        </Grid>
                        <Grid item xs={5.5}>
                          <Typography fontSize={"0.75rem"} noWrap>
                            {item?.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1}>
                      <Grid container>
                        <Grid item xs={5.3} style={{ paddingLeft: "1rem" }}>
                          <Typography fontSize={"0.75rem"}>
                            Customer Name
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography fontSize={"0.75rem"}> :</Typography>
                        </Grid>
                        <Grid item xs={5.2}>
                          <Typography fontSize={"0.75rem"} noWrap>
                            {" "}
                            {item?.customerName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1}>
                      <Grid container>
                        <Grid
                          item
                          xs={5.3}
                          style={{
                            paddingLeft: "1rem",
                            paddingBottom: "0.5rem",
                          }}
                        >
                          <Typography fontSize={"0.75rem"}>
                            Application
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography fontSize={"0.75rem"}> :</Typography>
                        </Grid>
                        <Grid item xs={5.2}>
                          <Typography fontSize={"0.75rem"}>
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
      </Box>
    </>
  );
};

export default ProjectGridView;
