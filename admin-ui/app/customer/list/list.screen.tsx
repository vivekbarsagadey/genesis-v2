'use client';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoCustomerComponent from '../info';
import { ICustomer } from '../models';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ListViewComponent = ({ customer, setCopyCustomer }: any) => {
  const [increaseAdd, setIncreaseAdd] = useState(false);
  const [increaseEmail, setIncreaseEmail] = useState(false);
  const [increaseUser, setIncreaseUser] = useState(false);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(customer.length / PER_PAGE);
  const paginationHandler = PaginationHandler(customer, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  // const emailInc = () => {
  //   setIncreaseEmail(!increaseEmail);
  //   setData(customer.sort((a, b) => {
  //     return a.email > b.email ? 1 : -1;
  //   }));
  // };

  // const addressInc = () => {
  //   setIncreaseAdd(!increaseAdd);
  //   setData(customer.sort((a, b) => {
  //     return a.address > b.address ? 1 : -1;
  //   }));
  // };
  // const userNameInc = () => {
  //   setIncreaseUser(!increaseUser);
  //   setData(customer.sort((a, b) => {
  //     return a.address > b.address ? 1 : -1;
  //   }));
  // };
  // console.log("setCopyCustomer >>",setCopyCustomer);

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

            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                // onClick={() => userNameInc()}
              >
                Customer Name
                {/* {increaseUser ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Typography variant="subtitle2" noWrap>
                Date Created
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                //  onClick={() => emailInc()}
              >
                Email
                {/* {increaseEmail ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                style={{ display: 'flex', justifyContent: 'space-around' }}
              >
                Contact
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle2"
                noWrap
                // onClick={() => addressInc()}
              >
                Address
                {/* {increaseAdd ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
              </Typography>
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
