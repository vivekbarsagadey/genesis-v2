'use client';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import RoleListScreen from './list/list.screen';

const RoleHomeComponent = () => {
  return (
    <>
    
    <Box mt={1} ml={1.5}>
        <Grid container spacing={1}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            {/* <CustomerSearchDetails
              customer={customer}
              onSearchHandler={onSearchHandler}
            /> */}
          </Grid>
          <Grid item xs={7} md={7} sm={7} lg={7} display={'flex'}>
            <Grid container>
              <Grid item xs={'auto'} mt={0.3}>
                {/* <FilterComponent
                  customer={customer}
                  onFilterHandler={onSearchHandler}
                /> */}
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                {/* <ExportComponent customer={copyCustomer} /> */}
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={9}>
                {/* <CustomerViewComponent onViewSelect={onViewSelect} /> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1} mt={1}>
            <Link
              href={'/customer/create'}
              passHref
              style={{ textDecoration: 'none' }}
            >
              <Button variant="contained" size="small">
                Create
                <span>+</span>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            {/* <Case condition={viewType === ViewTypes.GRID}>
              <Grid ref={myRef}>
                <CustomerGridView customer={copyCustomer} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <Grid ref={myRef}>
                <CustomerGraphView customer={copyCustomer} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <Grid ref={myRef}>
                <CustomerKanbanView customer={copyCustomer} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <Grid ref={myRef}>
                <CustomerCalendarView customer={copyCustomer} />
              </Grid> */}
            {/* </Case> */}
            <Default>
              <Grid 
              // ref={myRef}
              >
                <RoleListScreen
                //   customer={copyCustomer}
                //   setCopyCustomer={setCopyCustomer}
                //   show={show}
                //   setShow={setShow}
                //   myRef={myRef}
                />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Box>



{/*     
    RoleHomeComponent
    <RoleListScreen/> */}
    
    </>
  )
}

export default RoleHomeComponent