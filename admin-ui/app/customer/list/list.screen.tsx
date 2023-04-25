'use client';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Grid, IconButton, Pagination, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoCustomerComponent from '../info';
import { ICustomer } from '../models';

const ListViewComponent = ({ customer }: any) => {
  console.log('customercustomer', customer);

  const [nameSort, setNameSort] = useState(true)
  const [dateSort, setDateSort] = useState(true)
  const [emailSort, setEmailSort] = useState(true)
  const [contactSort, setContactSort] = useState(true)
  const [addressSort, setAddressSort] = useState(true)

  const handleNameSort = () => {
    if (nameSort) {
      customer.sort((a, b) => {
        if (`${a.firstName}${a.lastName}`.toLowerCase() < `${b.firstName}${b.lastName}`.toLowerCase()) { return -1; }
        if (`${a.firstName}${a.lastName}`.toLowerCase() > `${b.firstName}${b.lastName}`.toLowerCase()) { return 1; }
        return 0;
      })
      setNameSort(false)
    }
    else {
      customer.sort((a, b) => {
        if (`${a.firstName}${a.lastName}`.toLowerCase() < `${b.firstName}${b.lastName}`.toLowerCase()) { return -1; }
        if (`${a.firstName}${a.lastName}`.toLowerCase() > `${b.firstName}${b.lastName}`.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setNameSort(true)
    }
  }
  const handleDateSort = () => {
    if (dateSort) {
      customer.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      })
      setDateSort(false)
    }
    else {
      customer.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setDateSort(true)
    }
  }
  const handleEmailSort = () => {
    if (emailSort) {
      customer.sort((a, b) => {
        if (a.email.toLowerCase() < b.email.toLowerCase()) { return -1; }
        if (a.email.toLowerCase() > b.email.toLowerCase()) { return 1; }
        return 0;
      })
      setEmailSort(false)
    }
    else {
      customer.sort((a, b) => {
        if (a.email.toLowerCase() < b.email.toLowerCase()) { return -1; }
        if (a.email.toLowerCase() > b.email.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setEmailSort(true)
    }
  }
  const handleContactSort = () => {
    if (contactSort) {
      customer.sort((a, b) => {
        if (a.mobile.toLowerCase() < b.mobile.toLowerCase()) { return -1; }
        if (a.mobile.toLowerCase() > b.mobile.toLowerCase()) { return 1; }
        return 0;
      })
      setContactSort(false)
    }
    else {
      customer.sort((a, b) => {
        if (a.mobile.toLowerCase() < b.mobile.toLowerCase()) { return -1; }
        if (a.mobile.toLowerCase() > b.mobile.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setContactSort(true)
    }
  }
  const handleAddressSort = () => {
    if (addressSort) {
      customer.sort((a, b) => {
        if (a.address.toLowerCase() < b.address.toLowerCase()) { return -1; }
        if (a.address.toLowerCase() > b.address.toLowerCase()) { return 1; }
        return 0;
      })
      setAddressSort(false)
    }
    else {
      customer.sort((a, b) => {
        if (a.address.toLowerCase() < b.address.toLowerCase()) { return -1; }
        if (a.address.toLowerCase() > b.address.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setAddressSort(true)
    }
  }

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(customer.length / PER_PAGE);
  const paginationHandler = PaginationHandler(customer, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };


  return (
    <>
      <Box mr={2} mt={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={1} display={'flex'} justifyContent={'flex-end'}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
              <Typography variant="subtitle2" noWrap>
                Customer Name
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
            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
              <Typography
                variant="subtitle2"
                noWrap
              >
                Email
              </Typography>
              {emailSort ? <IconButton onClick={() => handleEmailSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleEmailSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
              <Typography
                variant="subtitle2"
                noWrap
              >
                Contact
              </Typography>
              {emailSort ? <IconButton onClick={() => handleContactSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleContactSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
            </Grid>
            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center'}}>
              <Typography
                variant="subtitle2"
                noWrap
              >
                Address
              </Typography>
              {addressSort ? <IconButton onClick={() => handleAddressSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleAddressSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
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
          ?.map((customer: ICustomer, index: number) => {
            return (
              <Typography key={index}>
                <InfoCustomerComponent customer={customer} />
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
