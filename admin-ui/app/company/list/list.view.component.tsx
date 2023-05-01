'use client';

import { Box, Grid, Pagination, Typography, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { PaginationHandler } from '../../utility';
import InfoCompanyComponent from '../info';
import { ICompany } from '../models/company.model';
import { ListComponentProps } from './props';

function ListViewComponent({ companies, myRef }: any) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(companies.length / PER_PAGE);
  const paginationHandler = PaginationHandler(companies, PER_PAGE);

  const [nameSort, setNameSort] = useState(true);
  const [dateSort, setDateSort] = useState(true);
  const [emailSort, setEmailSort] = useState(true);
  const [contactSort, setContactSort] = useState(true);
  const [addressSort, setAddressSort] = useState(true);

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
      companies.sort((a, b) => {
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
  return (
    <>
      <Grid ref={myRef}>
        <Box mr={2} mt={2}>
          <Paper variant="outlined">
            <Grid container>
              <Grid item xs={0.7} display="flex" justifyContent="flex-end">
                <Grid container ml={1}>
                  <Grid item xs={4}>
                    <Checkbox size="small" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={2}
                style={{ display: 'flex', alignContent: 'center' }}
              >
                <Typography variant="subtitle2" noWrap>
                  Created Date
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

              <Grid
                item
                xs={2.5}
                style={{ display: 'flex', alignContent: 'center' }}
              >
                <Typography variant="subtitle2" noWrap>
                  Company Name
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

              <Grid
                item
                xs={2}
                style={{ display: 'flex', alignContent: 'center' }}
              >
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

              <Grid
                item
                xs={2.1}
                style={{ display: 'flex', alignContent: 'center' }}
              >
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

              <Grid
                item
                xs={1.7}
                style={{ display: 'flex', alignContent: 'center' }}
              >
                <Typography
                  variant="subtitle2"
                  noWrap
                  display="flex"
                  justifyContent="space-around"
                >
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
          </Paper>
        </Box>
        <Grid style={{ height: '62vh' }}>
          {paginationHandler
            .currentData()
            .reverse()
            ?.map((company: ICompany, index: number) => (
              <Typography key={index}>
                <InfoCompanyComponent company={company} />
              </Typography>
            ))}
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Grid style={{ position: 'fixed' }} />
          <Pagination
            count={count}
            size="small"
            page={page}
            color="primary"
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ListViewComponent;
