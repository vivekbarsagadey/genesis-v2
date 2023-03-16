"use client";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import ICompany from "../company.model";
import InfoCompanyComponent from "../info";
import CompanyPagination from "./company.list.pagination";

type CompanyComponentProps = {
  companyData: Array<ICompany>;
  companySearchList: any;
  Items: any;
};

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

            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Company Name
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Email
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Address
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
            ele.name.toLowerCase().includes(companySearchList.toLowerCase())
          )
          ?.map((Items: CompanyComponentProps, index) => {
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
    </>
  );
};

export default ListViewComponent;
