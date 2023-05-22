<<<<<<< HEAD
'use client';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { PaginationHandler } from '../../utility';
import InfoCompanyComponent from '../info';
import { ICompany } from '../models/company.model';
import { baseStyle } from '../../../themes';

const useStyles = makeStyles({
  headerContent: { display: 'flex', alignContent: 'center' },
  footer: { display: 'flex', justifyContent: 'flex-end' },
  pagination: { position: 'fixed' },
  divider: { width: '98.5%' },
  infoCom: { height: '62vh' },
  contactCenter: { display: 'flex', justifyContent: 'center' },
  unknownContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

function ListViewComponent({
  companies,
  myRef,
  setShow,
  show,
  multiSelect,
  setMultiSelect,
  setSelectedCheckbox,
  setShowDelAll
}: any) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(companies.length / PER_PAGE);
  const paginationHandler = PaginationHandler(companies, PER_PAGE);
  const [nameSort, setNameSort] = useState(true);
  const [dateSort, setDateSort] = useState(true);
  const [emailSort, setEmailSort] = useState(true);
  const [contactSort, setContactSort] = useState(true);
  const [addressSort, setAddressSort] = useState(true);
  const [statusSort, setStatusSort] = useState(true);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list] = useState(companies);

  const handleNameSort = () => {
    if (nameSort) {
      companies.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setNameSort(false);
    } else {
      companies
        .sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setNameSort(true);
    }
  };
  const handleDateSort = () => {
    if (dateSort) {
      companies.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) {
          return -1;
        }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setDateSort(false);
    } else {
      companies
        .sort((a, b) => {
          if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) {
            return -1;
          }
          if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setDateSort(true);
    }
  };
  const handleEmailSort = () => {
    if (emailSort) {
      companies.sort((a: any, b: any) => {
        if (a.email.toLowerCase() < b.email.toLowerCase()) {
          return -1;
        }
        if (a.email.toLowerCase() > b.email.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setEmailSort(false);
    } else {
      companies
        .sort((a, b) => {
          if (a.email.toLowerCase() < b.email.toLowerCase()) {
            return -1;
          }
          if (a.email.toLowerCase() > b.email.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setEmailSort(true);
    }
  };
  const handleContactSort = () => {
    if (contactSort) {
      companies.sort((a, b) => {
        if (a.mobile.toLowerCase() < b.mobile.toLowerCase()) {
          return -1;
        }
        if (a.mobile.toLowerCase() > b.mobile.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setContactSort(false);
    } else {
      companies
        .sort((a, b) => {
          if (a.mobile.toLowerCase() < b.mobile.toLowerCase()) {
            return -1;
          }
          if (a.mobile.toLowerCase() > b.mobile.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setContactSort(true);
    }
  };
  const handleStatusSort = () => {
    if (statusSort) {
      companies.sort((a, b) => {
        if (a.status.toLowerCase() < b.status.toLowerCase()) {
          return -1;
        }
        if (a.status.toLowerCase() > b.status.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setStatusSort(false);
    } else {
      companies
        .sort((a, b) => {
          if (a.status.toLowerCase() < b.status.toLowerCase()) {
            return -1;
          }
          if (a.status.toLowerCase() > b.status.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setStatusSort(true);
    }
  };
  const handleAddressSort = () => {
    if (addressSort) {
      companies.sort((a, b) => {
        if (a.address.toLowerCase() < b.address.toLowerCase()) {
          return -1;
        }
        if (a.address.toLowerCase() > b.address.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setAddressSort(false);
    } else {
      companies
        .sort((a, b) => {
          if (a.address.toLowerCase() < b.address.toLowerCase()) {
            return -1;
          }
          if (a.address.toLowerCase() > b.address.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setAddressSort(true);
    }
  };

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShow(event.target.checked);
    setShowDelAll((s) => !s);
=======
"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
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
>>>>>>> dev
  };

  return (
    <>
<<<<<<< HEAD
      <Grid ref={myRef}>
        <Box mr={2} mt={2}>
          <Card elevation={0}>
            <Grid container>
              <Grid item xs={1}>
                <Grid container ml={1}>
                  <Grid item xs={4}>
                    <Checkbox
                      checked={show}
                      onChange={handleChange}
                      size="small"
                    />
                  </Grid>
=======
      <Box mr={2} mt={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
                <Grid item xs={6}>
                  <IconButton>
                    <RemoveRedEyeIcon fontSize="small" />
                  </IconButton>
>>>>>>> dev
                </Grid>
              </Grid>

              <Grid item xs={2} className={classes.headerContent}>
                <Typography variant="subtitle2" noWrap>
                  Created Date
                </Typography>
                {dateSort ? (
                  <IconButton onClick={() => handleDateSort()}>
                    <ArrowDropUpIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleDateSort()}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={2} className={classes.headerContent}>
                <Typography variant="subtitle2" noWrap>
                  Company Name
                </Typography>
                {nameSort ? (
                  <IconButton onClick={() => handleNameSort()}>
                    <ArrowDropUpIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleNameSort()}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={2} className={classes.headerContent}>
                <Typography variant="subtitle2" noWrap>
                  Email
                </Typography>
                {emailSort ? (
                  <IconButton onClick={() => handleEmailSort()}>
                    <ArrowDropUpIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleEmailSort()}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={2} className={classes.contactCenter}>
                <Typography variant="subtitle2" noWrap>
                  Contact
                </Typography>
                {contactSort ? (
                  <IconButton onClick={() => handleContactSort()}>
                    <ArrowDropUpIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleContactSort()}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={1} className={classes.headerContent}>
                <Typography variant="subtitle2" noWrap>
                  Address
                </Typography>
                {addressSort ? (
                  <IconButton onClick={() => handleAddressSort()}>
                    <ArrowDropUpIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleAddressSort()}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={1} className={classes.headerContent}>
                <Typography variant="subtitle2" noWrap>
                  Status
                </Typography>
                {statusSort ? (
                  <IconButton onClick={() => handleStatusSort()}>
                    <ArrowDropUpIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleStatusSort()}>
                    <ArrowDropDownIcon />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={1}>
                <Typography
                  variant="subtitle2"
                  display="flex"
                  justifyContent="space-around"
                  noWrap
                >
                  Action
                </Typography>
              </Grid>
            </Grid>
<<<<<<< HEAD
          </Card>
        </Box>
        <Divider className={classes.divider} />
        <Grid className={classes.infoCom}>
          {companies.length === 0 ? (
            <Box className={classes.unknownContent}>
              <Typography fontWeight="bold">data not found</Typography>
            </Box>
          ) : (
            paginationHandler
              .currentData()
              .reverse()
              ?.map((company: ICompany, index: number) => (
                <Typography key={index}>
                  <InfoCompanyComponent
                    company={company}
                    show={show}
                    setMultiSelect={setMultiSelect}
                    multiSelect={multiSelect}
                  />
                </Typography>
              ))
          )}
        </Grid>
      </Grid>

      <Grid container mt={4}>
        <Grid item xs={12} className={classes.footer}>
          <Grid className={classes.pagination} />
=======
            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Email
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                Contact
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
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
>>>>>>> dev
          <Pagination
            count={count}
            size="small"
            page={page}
<<<<<<< HEAD
=======
            variant="outlined"
>>>>>>> dev
            color="primary"
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ListViewComponent;
