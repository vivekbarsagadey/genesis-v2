import { Pagination, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";
import companyGridPagination from "./company.grid.pagination";

const CompanyGridView = ({ copyCompanyData }) => {
  // Pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(copyCompanyData.length / PER_PAGE);
  const _DATA = companyGridPagination(copyCompanyData, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      <Box style={{ height: "70.6vh" }}>
        <Grid container spacing={1.5} mt={0.5}>
          {_DATA
            .currentData()
            .reverse()
            ?.map((item) => {
              return (
                <Grid item lg={4} xs={12} sm={6} md={4} mt={0} key={item.id}>
                  <Paper variant="outlined">
                    <Box paddingLeft={2} paddingTop={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1">
                            Company Name
                          </Typography>
                        </Grid>
                        <Grid item xs={1.5} paddingLeft={1}>
                          <Typography variant="subtitle1"> :</Typography>
                        </Grid>
                        <Grid item xs={5.5} paddingLeft={3}>
                          <Typography noWrap variant="subtitle1">
                            {item?.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1} paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5.3}>
                          <Typography variant="subtitle1">Email</Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography variant="subtitle1"> :</Typography>
                        </Grid>
                        <Grid item xs={5.2} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1">
                            {item?.email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mt={1} paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5.3}>
                          <Typography variant="subtitle1">Contact</Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography variant="subtitle1"> :</Typography>
                        </Grid>
                        <Grid item xs={5.2} paddingLeft={2}>
                          <Typography variant="subtitle1" noWrap>
                            {item?.mobile}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1} paddingLeft={2} paddingBottom={2}>
                      <Grid container>
                        <Grid item xs={5.3}>
                          <Typography variant="subtitle1">Address</Typography>
                        </Grid>
                        <Grid item xs={1.5}>
                          <Typography variant="subtitle1"> :</Typography>
                        </Grid>
                        <Grid item xs={5.2} paddingLeft={2}>
                          <Typography variant="subtitle1" noWrap>
                            {item?.address}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Box>
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

export default CompanyGridView;
