"use client";
import { Box, Grid, Pagination, Typography, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { PaginationHandler } from "../../utility";
import InfoCompanyComponent from "../info";
import { ICompany } from "../models/company.model";
import { ListComponentProps } from "./props";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ListViewComponent = ({ companies }: ListComponentProps) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(companies.length / PER_PAGE);
  const paginationHandler = PaginationHandler(companies, PER_PAGE);

  const [nameSort, setNameSort] = useState(true)
  const [dateSort, setDateSort] = useState(true)

  const handleNameSort = () => {
    if (nameSort) {
      companies.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      })
      setNameSort(false)
    }
    else {
      companies.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setNameSort(true)
    }
  }
  const handleDateSort = () => {
    if (dateSort) {
      companies.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      })
      setDateSort(false)
    }
    else {
      companies.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setDateSort(true)
    }
  }

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

            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
              <Typography variant="subtitle2" noWrap >
                Company Name
              </Typography>
              {nameSort ? <IconButton onClick={() => handleNameSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleNameSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
              <Typography variant="subtitle2" noWrap>
                Created Date
              </Typography>
              {dateSort ? <IconButton onClick={() => handleDateSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleDateSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
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
            <Grid item xs={1}>
              <Typography variant="subtitle2" display={"flex"} justifyContent={"space-around"} noWrap >
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
          <Pagination count={count} size="small" page={page} color="primary"
            onChange={handleChangePage} />
        </Grid>
      </Grid>
    </>
  );
};

export default ListViewComponent;
