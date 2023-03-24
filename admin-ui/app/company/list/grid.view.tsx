import { Pagination, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";
import companyGridPagination from "./company.grid.pagination";
import { ListComponentProps } from "./props";

const CompanyGridView = ({ companies }: ListComponentProps) => {
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
        <Grid container spacing={2}  mt={1}>
          {_DATA
            .currentData()
            .reverse()
            .filter((ele) =>
              ele.name.toLowerCase().includes(searchCompany.toLowerCase())
            )
            .map((item) => {
              return (
                <Grid item xs={4} md={4} sm={4} lg={4}  key={item.id}>
                  <Paper variant="outlined">
                    <Box paddingLeft={2} paddingTop={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography>Company Name</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap>{item?.name}</Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1} paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography>Email</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap>{item?.email}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mt={1} paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography>Contact</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap>{item?.mobile}</Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box mt={1} paddingLeft={2} paddingBottom={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography>Address</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap>{item?.address}</Typography>
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
