'use client';

import React, { useRef, useState } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import {
  Box, Button, Divider, Grid, IconButton, Tooltip,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { baseStyle, colors } from '../../themes';
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
const useStyles = makeStyles({
  root: {
    backgroundColor: colors.white,
    borderRadius: baseStyle.borderRadius.small,
  },
  textDecor: { textDecoration: baseStyle.textDecoration.none },
  display: { display: baseStyle.display },
  divider: { width: '100%', marginTop: '0.5rem' },
});

function CompanyComponentHome({ companies }: CompanyComponentProps) {
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

  const classes = useStyles();

  const itemsCallBackHandler = (_items: Array<ICompany>) => {
    setCopyCompanies(_items);
  };


  return (
    <Box
      ml={1.5}
      // pl={2}
      pb={1}
      mr={2.5}
      className={classes.root}
    >
      <Grid mt={1}>
        <Grid container spacing={1} pl={2}>
          <Grid item xs={2} md={2} lg={3} sm={2}>
            <CompanySearchDetails
              companies={companies}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={7} className={classes.display}>
            <Grid container>
              <Grid item xs="auto" mt={0.3}>
                <FilterComponent
                  companies={companies}
                  onFilterHandler={onSearchHandler}
                  itemsCallBackHandler={itemsCallBackHandler}
                />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                <ExportComponent copyCompanyData={copyCompanies} />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
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
          <Grid item xs={1} mt={1}>
            <Link
              href="/company/create"
              passHref
              className={classes.textDecor}
            >
              <Button variant="contained" size="small">
                Create
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={12} pl={2}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <Grid ref={myRef}>
                <CompanyGridView companies={copyCompanies} myRef={myRef} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <Grid>
                <CompanyGraphView companies={copyCompanies} myRef={myRef} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <Grid ref={myRef}>
                <CompanyKanbanView companies={copyCompanies} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <Grid ref={myRef}>
                <CompanyCalendarView companies={copyCompanies} />
              </Grid>
            </Case>
            <Default>
              <Grid>
                <ListViewComponent companies={copyCompanies} myRef={myRef} />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}
export default CompanyComponentHome;
