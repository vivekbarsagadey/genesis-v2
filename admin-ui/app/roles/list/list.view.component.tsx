'use client';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Grid, IconButton, Pagination, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoRoleComponent from '../info';
import { IRole } from '../models';

const ListViewComponent = ({ roles }: any) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(roles.length / PER_PAGE);
  const paginationHandler = PaginationHandler(roles, PER_PAGE);

  const [nameSort, setNameSort] = useState(true);
  const [dateSort, setDateSort] = useState(true);
  const [emailSort, setEmailSort] = useState(true);
  const [contactSort, setContactSort] = useState(true);
  const [addressSort, setAddressSort] = useState(true);

  const handleNameSort = () => {
    if (nameSort) {
      roles.sort((a, b) => {
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
      roles
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
      roles.sort((a, b) => {
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
      roles
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
      roles.sort((a, b) => {
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
      roles
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
      roles.sort((a, b) => {
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
      roles
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
      roles.sort((a, b) => {
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
      roles
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
      <Box mr={2} mt={2}>
        <Paper variant="outlined">
          <Grid container paddingLeft={3}>
            <Grid
              item
              xs={3}
              style={{ display: 'flex', alignContent: 'center' }}
            >
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

            <Grid
              item
              xs={2.5}
              style={{ display: 'flex', alignContent: 'center' }}
            >
              <Typography variant="subtitle2" noWrap>
                Name
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
              xs={3}
              style={{ display: 'flex', alignContent: 'center' }}
            >
              <Typography variant="subtitle2" noWrap>
                Description
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
              xs={2.2}
              style={{ display: 'flex', alignContent: 'center' }}
            >
              <Typography
                variant="subtitle2"
                noWrap
                display={'flex'}
                justifyContent={'space-around'}
              >
                Code
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
                display={'flex'}
                justifyContent={'space-around'}
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
          ?.map((role: IRole, index: number) => {
            return (
              <Typography key={index}>
                <InfoRoleComponent role={role} />
              </Typography>
            );
          })}
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
          <Grid style={{ position: 'fixed' }}></Grid>
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
};

export default ListViewComponent;
