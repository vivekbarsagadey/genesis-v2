'use client';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { ViewTypes } from '../utility';
import FilterComponent from './filter';
import CustomerCalendarView from './list/calendar.view';
import ExportComponent from './list/export.component';
import CustomerGraphView from './list/graph.view';
import CustomerGridView from './list/grid.view';
import CustomerKanbanView from './list/kanban.view';
import CustomerListScereen from './list/list.screen';
import { ICustomer } from './models';
import CustomerSearchDetails from './search';
import CustomerViewComponent from './view';

interface CustomerComponentProps {
  customer: Array<ICustomer>;
}

const CustomerComponentHome = ({ customer }: CustomerComponentProps) => {
  const [copyCustomer, setCopyCustomer] = useState<Array<ICustomer>>([
    ...customer,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

  const onSearchHandler = (c: Array<ICustomer>) => {
    setCopyCustomer(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  const myRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });

  return (
    <>
      <Box mt={1} ml={1.5}>
        <Grid container spacing={1}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <CustomerSearchDetails
              customer={customer}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={'flex'}>
            <Grid container>
              <Grid item xs={'auto'} mt={0.3}>
                <FilterComponent
                  customer={customer}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <ExportComponent customer={copyCustomer} />
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={9}>
                <CustomerViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
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
            <Case condition={viewType === ViewTypes.GRID}>
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
              </Grid>
            </Case>
            <Default>
              <Grid ref={myRef}>
                <CustomerListScereen
                  customer={copyCustomer}
                  setCopyCustomer={setCopyCustomer}
                />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default CustomerComponentHome;
