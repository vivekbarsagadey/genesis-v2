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
import { useState } from 'react';
import { PaginationHandler } from '../../../../utility';
import InfoDashBoardTemplateComponent from '../info';
import { IDashboardTemplateComponentProps } from '../models';

function ListViewComponent({ dashboard, setCopyDashbaord, show, setShow, myRef }: any) {

  const [page, setPage] = useState(1);
  const [multiSelect, setMultiSelect] = useState([]);

  const PER_PAGE = 9;
  const count = Math.ceil(dashboard.length / PER_PAGE);
  const paginationHandler = PaginationHandler(dashboard, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShow(event.target.checked);
  };

  const getMultiSelectedValue = (valRec) => {
    setMultiSelect([...multiSelect, valRec]);
  };

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
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle2" noWrap>
                  Email
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
            ?.map((dashboard: IDashboardTemplateComponentProps, index: number) => (
              <Typography key={index}>
                <InfoDashBoardTemplateComponent
                  dashboard={dashboard}
                  show={show}
                  getMultiSelectedValue={getMultiSelectedValue}
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
