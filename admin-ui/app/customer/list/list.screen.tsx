/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import {
  Box,
  Card,
  Divider,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoCustomerComponent from '../info';
import { ICustomer } from '../models';

function ListViewComponent({
  customer,
  setShow,
  show,
  myRef,
}: any) {
  const [increaseAdd, setIncreaseAdd] = useState(false);
  const [increaseEmail, setIncreaseEmail] = useState(false);
  const [increaseUser, setIncreaseUser] = useState(false);
  const [, setData] = useState();
  const [page, setPage] = useState(1);
  const [multiSelect, setMultiSelect] = useState([]);
  const PER_PAGE = 9;
  const count = Math.ceil(customer.length / PER_PAGE);
  const paginationHandler = PaginationHandler(customer, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShow(event.target.checked);
  };

  const emailInc = () => {
    setIncreaseEmail(!increaseEmail);
    setData(customer.sort((a:any, b:any) => (a.email > b.email ? 1 : -1)));
  };

  const addressInc = () => {
    setIncreaseAdd(!increaseAdd);
    setData(customer.sort((a:any, b:any) => (a.address > b.address ? 1 : -1)));
  };
  const userNameInc = () => {
    setIncreaseUser(!increaseUser);
    setData(customer.sort((a:any, b:any) => (a.address > b.address ? 1 : -1)));
  };
  // console.log("setCopyCustomer >>",setCopyCustomer);

  const getMultiSelectedValue = (valRec:string) => {
    setMultiSelect([...multiSelect, valRec]);
    // console.log("valRec",valRec);
  };
  console.log('multiSelect', multiSelect);

  return (
    <>
      <Box ref={myRef}>
        <Box mr={2} mt={2}>
          <Card elevation={0}>
            <Grid container>
              <Grid item xs={0.7} display="flex" justifyContent="flex-end">
                <Grid container ml={1}>
                  <Grid item xs={4}>
                    <Checkbox
                      checked={show}
                      onChange={handleChange}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle2" noWrap>
                  Date Created
                </Typography>
              </Grid>

              <Grid item xs={2.5}>
                <Typography variant="subtitle2" noWrap>
                  Customer Name
                  {/* {increaseUser ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle2" noWrap>
                  Email
                  {/* {increaseEmail ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
                </Typography>
              </Grid>

              <Grid item xs={2.2}>
                <Typography variant="subtitle2" noWrap>
                  Contact
                </Typography>
              </Grid>

              <Grid item xs={1.2}>
                <Typography variant="subtitle2" noWrap>
                  Address
                  {/* {increaseAdd ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} */}
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <Typography
                  variant="subtitle2"
                  display="flex"
                  justifyContent="flex-end"
                  noWrap
                >
                  Action
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Divider style={{ width: '98.7%' }} />
        <Grid style={{ height: '62vh' }}>
          {paginationHandler
            .currentData()
            .reverse()
            ?.map((customer: ICustomer, index: number) => (
              <Typography key={index}>
                <InfoCustomerComponent
                  customer={customer}
                  show={show}
                  getMultiSelectedValue={getMultiSelectedValue}
                  increase={false}
                />
              </Typography>
            ))}
        </Grid>
      </Box>
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
