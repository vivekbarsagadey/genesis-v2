'use client';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Grid, IconButton, Pagination, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { PaginationHandler } from '../../utility';
import InfoProjectComponent from '../info';
import IProject from '../project.model';
import { ListComponentProps } from './props';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProjectListViewComponent = ({ projects }: ListComponentProps) => {
  const [page, setPage] = useState(1);
  const [nameSort, setNameSort] = useState(true)
  const [applicationSort, setApplicationSort] = useState(true)
  const [dateSort, setDateSort] = useState(true)
  const [statusSort, setStatusSort] = useState(true)
  const PER_PAGE = 9;
  const count = Math.ceil(projects.length / PER_PAGE);
  const paginationHandler = PaginationHandler(projects, PER_PAGE);

  const handleNameSort = () => {
    if (nameSort) {
      projects.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      })
      setNameSort(false)
    }
    else {
      projects.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setNameSort(true)
    }
  }
  const handleApplicationSort = () => {
    if (applicationSort) {
      projects.sort((a, b) => {
        if (a.application.toLowerCase() < b.application.toLowerCase()) { return -1; }
        if (a.application.toLowerCase() > b.application.toLowerCase()) { return 1; }
        return 0;
      })
      setApplicationSort(false)
    }
    else {
      projects.sort((a, b) => {
        if (a.application.toLowerCase() < b.application.toLowerCase()) { return -1; }
        if (a.application.toLowerCase() > b.application.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setApplicationSort(true)
    }
  }
  const handleDateSort = () => {
    if (dateSort) {
      projects.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      })
      setDateSort(false)
    }
    else {
      projects.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setDateSort(true)
    }
  }
  const handleStatusSort = () => {
    if (statusSort) {
      projects.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      })
      setStatusSort(false)
    }
    else {
      projects.sort((a, b) => {
        if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) { return -1; }
        if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) { return 1; }
        return 0;
      }).reverse()
      setStatusSort(true)
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
            <Grid item xs={1} display={'flex'} justifyContent={'flex-end'}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
              <Typography variant="subtitle2" noWrap>
                Project Name
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
                Company Name
              </Typography>
            </Grid>

            <Grid item xs={2} style={{ display: 'flex', alignContent: 'center' }}>
              <Typography variant="subtitle2" noWrap>
                Application
              </Typography>
              {applicationSort ? <IconButton onClick={() => handleStatusSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleStatusSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
            </Grid>
            <Grid
              item
              xs={2} style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}
            >
              <Typography variant="subtitle2" noWrap>
                Status
              </Typography>
              {handleStatusSort ? <IconButton onClick={() => handleApplicationSort()}>
                <ArrowDropUpIcon />
              </IconButton> : <IconButton onClick={() => handleApplicationSort()}>
                <ArrowDropDownIcon />
              </IconButton>}
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
