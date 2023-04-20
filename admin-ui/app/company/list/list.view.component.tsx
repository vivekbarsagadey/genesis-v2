"use client";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { PaginationHandler } from "../../utility";
import InfoCompanyComponent from "../info";
import { ICompany } from "../models/company.model";
import { ListComponentProps } from "./props";

const ListViewComponent = ({ companies }: ListComponentProps) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(companies.length / PER_PAGE);
  const paginationHandler = PaginationHandler(companies, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <>
      <Box mr={2} mt={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={1} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="subtitle2" noWrap >
                Company Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" noWrap>
                Email
              </Typography>
            </Grid>


            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                // display={"flex"}
                // justifyContent={"space-around"}
              >
                Contact
              </Typography>
            </Grid>


            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                // display={"flex"}
                // justifyContent={"space-around"}
              >
                Address
              </Typography>
            </Grid>


            <Grid item xs={1}>
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
        {paginationHandler
          .currentData()
          .reverse()
          ?.map((company: ICompany, index: number) => {
            return (
              <Typography key={index}>
                <InfoCompanyComponent company={company} />
              </Typography>
            );
          })}
      </Grid>

      <Grid container mt={4}>
        <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}></Grid>
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
    </>
  );
};

export default ListViewComponent;
