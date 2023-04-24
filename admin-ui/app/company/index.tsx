'use client';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { ViewTypes } from '../utility';
import FilterComponent from './filters';
import CompanyCalendarView from './list/calendar.view';
import ExportComponent from './list/export.component';
import CompanyGraphView from './list/graph.view';
import CompanyGridView from './list/grid.view';
import CompanyKanbanView from './list/kanban.view';
import ListViewComponent from './list/list.view.component';
import { ICompany } from './models/company.model';
import CompanySearchDetails from './search';
import CompanyViewComponent from './view';

interface CompanyComponentProps {
  companies: Array<ICompany>;
}
const CompanyComponentHome = ({ companies }: CompanyComponentProps) => {
  const [copyCompanies, setCopyCompanies] = useState<Array<ICompany>>([
    ...companies,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const onSearchHandler = (c: Array<ICompany>) => {
    setCopyCompanies(c);
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
            <CompanySearchDetails
              companies={companies}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={'flex'}>
            <Grid container>
              <Grid item xs={'auto'} mt={0.3}>
                <FilterComponent
                  companies={companies}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <ExportComponent copyCompanyData={copyCompanies} />
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={9}>
                <CompanyViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link
              href={'/company/create'}
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
              <CompanyGridView companies={copyCompanies} />
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <CompanyGraphView companies={copyCompanies} />
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <CompanyKanbanView companies={copyCompanies} />
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <CompanyCalendarView companies={copyCompanies} />
            </Case>
            <Default>
              <Grid ref={myRef}>
                <ListViewComponent companies={copyCompanies} />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyComponentHome;
