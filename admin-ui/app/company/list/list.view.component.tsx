"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import ICompany from "../company.model";
import InfoCompanyComponent from "../info";
import InfoCompany from "../info";
import CompanyPagination from "./company.list.pagination";

type CompanyComponentProps={
  companyData: Array<ICompany>;
  companySearchList: any;
}

const ListViewComponent = ({
  companyData,
  companySearchList,
}: CompanyComponentProps) => {
  //pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(companyData.length / PER_PAGE);
  const _DATA = CompanyPagination(companyData, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div>
      <Box mt={2} width={"98.2%"}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={0.12}></Grid>
            <Grid item xs={0.6}>
              <Checkbox size="small" />
            </Grid>
            <Grid item xs={1.25} style={{ display: "flex" }}>
              <IconButton>
                <RemoveRedEyeIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={2.2} sm={2.2}>
              <Typography variant="subtitle2" noWrap>Company Name</Typography>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography variant="subtitle2">Email</Typography>
            </Grid>
            <Grid item xs={1.8} sm={2.4}>
              <Typography variant="subtitle2">Contact</Typography>
            </Grid>

            <Grid item xs={2.3}>
              <Typography variant="subtitle2" noWrap>
                Address
              </Typography>
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
          .filter((ele) =>
            ele.name.toLowerCase().includes(companySearchList.toLowerCase())
          )
          ?.map((Items, index) => {
            return (
              <Typography key={index}>
                <InfoCompanyComponent Items={Items} />
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
    </div>
  );
};

export default ListViewComponent;
