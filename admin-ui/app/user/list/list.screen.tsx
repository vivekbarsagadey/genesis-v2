'use client';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  Box, Card, Divider, Grid, IconButton, Pagination, Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoUserComponent from '../info';
import { IUser } from '../models';

function ListViewComponent({ user, myRef }: any) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(user.length / PER_PAGE);
  const paginationHandler = PaginationHandler(user, PER_PAGE);

  const [nameSort, setNameSort] = useState(true);
  const [dateSort, setDateSort] = useState(true);
  const [emailSort, setEmailSort] = useState(true);
  const [contactSort, setContactSort] = useState(true);
  const [statusSort, setStatusSort] = useState(true);

  const handleNameSort = () => {
    if (nameSort) {
      user.sort((a:any, b:any) => {
        if (
          `${a.firstName}${a.lastName}`.toLowerCase()
          < `${b.firstName}${b.lastName}`.toLowerCase()
        ) {
          return -1;
        }
        if (
          `${a.firstName}${a.lastName}`.toLowerCase()
          > `${b.firstName}${b.lastName}`.toLowerCase()
        ) {
          return 1;
        }
        return 0;
      });
      setNameSort(false);
    } else {
      user
        .sort((a:any, b:any) => {
          if (
            `${a.firstName}${a.lastName}`.toLowerCase()
            < `${b.firstName}${b.lastName}`.toLowerCase()
          ) {
            return -1;
          }
          if (
            `${a.firstName}${a.lastName}`.toLowerCase()
            > `${b.firstName}${b.lastName}`.toLowerCase()
          ) {
            return 1;
          }
          return 0;
        })
        .reverse();
      setNameSort(true);
    }
  };
  const handleEmailSort = () => {
    if (emailSort) {
      user.sort((a:any, b:any) => {
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
      user
        .sort((a:any, b:any) => {
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
  const handleDateSort = () => {
    if (dateSort) {
      user.sort((a:any, b:any) => {
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
      user
        .sort((a:any, b:any) => {
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
  const handleStatusSort = () => {
    if (statusSort) {
      user.sort((a:any, b:any) => {
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
      user
        .sort((a:any, b:any) => {
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
  const handleContactSort = () => {
    if (contactSort) {
      user.sort((a:any, b:any) => {
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
      user
        .sort((a:any, b:any) => {
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
  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };
  return (
    <>
      <Grid ref={myRef}>
        <Box mr={2} mt={2}>
          <Card elevation={0}>
            <Grid container>
              <Grid item xs={1} display="flex" justifyContent="flex-end">
                <Grid container ml={1}>
                  <Grid item xs={2}>
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
                  User Name
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
                xs={2}
                style={{ display: 'flex', alignContent: 'center' }}
              >
                <Typography variant="subtitle2" noWrap>
                  Role
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
                xs={2}
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="subtitle2"
                  noWrap
                  display="flex"
                  justifyContent="space-around"
                >
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
                xs={2}
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
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
                  justifyContent="center"
                  noWrap
                >
                  Action
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Divider style={{width:'98.5%'}}/>
        <Grid style={{ height: '62vh' }}>
          {paginationHandler
            .currentData()
            .reverse()
            ?.map((user: IUser, index: number) => (
              <Typography key={index}>
                <InfoUserComponent user={user} />
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
            variant="outlined"
            color="primary"
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default ListViewComponent;
