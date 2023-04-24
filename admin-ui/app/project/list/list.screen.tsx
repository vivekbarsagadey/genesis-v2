'use client';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Grid, IconButton, Pagination, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoProjectComponent from '../info';
import IProject from '../project.model';
import { ListComponentProps } from './props';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProjectListViewComponent = ({ projects }: ListComponentProps) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState()
  const PER_PAGE = 9;
  const count = Math.ceil(projects.length / PER_PAGE);
  const paginationHandler = PaginationHandler(projects, PER_PAGE);

  const handleClick = () => {
    setData(projects.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    }))
  }
  const handleDecClick = () => {
    setData(projects.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    }).reverse())
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
            <Grid item xs={1} display={'flex'} justifyContent={'flex-end'}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Project Name
              </Typography>
              <IconButton onClick={() => handleClick()}>
                <ArrowDropUpIcon />
              </IconButton>
              <IconButton onClick={() => handleDecClick()}>
                <ArrowDropDownIcon />
              </IconButton>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Date Created
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Company Name
              </Typography>

            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle2" noWrap>
                Application
              </Typography>

            </Grid>
            <Grid
              item
              xs={2}
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Typography variant="subtitle2" noWrap>
                Status
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <Typography
                variant="subtitle2"
                display={'flex'}
                noWrap
                justifyContent={'space-around'}
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
          ?.map((items: IProject, index: number) => {
            return (
              <Typography key={index}>
                <InfoProjectComponent items={items} />
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

export default ProjectListViewComponent;
