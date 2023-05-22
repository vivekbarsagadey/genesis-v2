<<<<<<< HEAD
'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
import { baseStyle, colors } from '../../themes';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.white,
    borderRadius: baseStyle.borderRadius.small,
  },
  textDecor: { textDecoration: baseStyle.textDecoration.none },
  display: { display: baseStyle.display },
  divider: { background: '#009688', height: '0.1rem', marginTop: '0.2rem' },

});
=======
"use client";
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { ViewTypes } from "../utility";
import FilterComponent from "./filter";
import CustomerCalendarView from "./list/calendar.view";
import ExportComponent from "./list/export.component";
import CustomerGraphView from "./list/graph.view";
import CustomerGridView from "./list/grid.view";
import CustomerKanbanView from "./list/kanban.view";
import CustomerListScereen from "./list/list.screen";
import { ICustomer } from "./models";
import CustomerSearchDetails from "./search";
import CustomerViewComponent from "./view";

>>>>>>> dev
interface CustomerComponentProps {
  customer: Array<ICustomer>;
}

<<<<<<< HEAD
function CustomerComponentHome({ customer }: CustomerComponentProps) {
  const [copyCustomer, setCopyCustomer] = useState<Array<ICustomer>>([
    ...customer,
  ]);
  const classes = useStyles();
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const [show, setShow] = useState(false);
=======
const CustomerComponentHome = ({ customer }: CustomerComponentProps) => {
  const [copyCustomer, setCopyCustomer] = useState<Array<ICustomer>>([
    ...customer,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

>>>>>>> dev
  const onSearchHandler = (c: Array<ICustomer>) => {
    setCopyCustomer(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

<<<<<<< HEAD
  const myRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });
  const router = useRouter();

  return (
    <Box
    ml={1.5} pb={1} mr={2.5} className={classes.root}
    >
      <Grid mt={1}>
        <Grid container spacing={1} pl={2}>
          <Grid item xs={2} md={2} lg={3} sm={2}>
=======
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={1}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
>>>>>>> dev
            <CustomerSearchDetails
              customer={customer}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
<<<<<<< HEAD
          <Grid item xs={7} md={7} sm={7} lg={7} display="flex">
            <Grid container>
              <Grid item xs="auto" mt={0.3}>
=======
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container spacing={1}>
              <Grid item xs={"auto"}>
>>>>>>> dev
                <FilterComponent
                  customer={customer}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
<<<<<<< HEAD
              <Grid item xs="auto" mt={0.2}>
                <ExportComponent customer={copyCustomer} />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={9}>
=======
              <Grid item xs={"auto"}>
                <ExportComponent customer={copyCustomer} />
              </Grid>

              <Grid item xs={10}>
>>>>>>> dev
                <CustomerViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
<<<<<<< HEAD

          <Grid
            item
            xs={1}
            sm={1}
            lg={1}
            mt={0.5}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {show && (
              <Tooltip title="Delete All" arrow>
                <IconButton aria-label="delete">
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            {show && (
              <Tooltip title="Delete All" arrow>
                <IconButton aria-label="delete">
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
          <Grid item xs={1} mt={1}>
            <Link
              href="/customer/create"
              passHref
              style={{ textDecoration: 'none' }}
            >
=======
          <Grid item xs={1}>
            <Link href={"/customer/create"} passHref>
>>>>>>> dev
              <Button variant="contained" size="small">
                Create
                <span>+</span>
              </Button>
            </Link>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid item xs={12} className={classes.divider}></Grid>

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
              <Grid>
                <CustomerListScereen
                  customer={copyCustomer}
                  setCopyCustomer={setCopyCustomer}
                  show={show}
                  setShow={setShow}
                  myRef={myRef}
                />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}
=======
        <Grid item xs={12}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <CustomerGridView customer={copyCustomer} />
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <CustomerGraphView customer={copyCustomer} />
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <CustomerKanbanView customer={copyCustomer} />
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <CustomerCalendarView customer={copyCustomer} />
            </Case>
            <Default>
              <CustomerListScereen customer={copyCustomer} />
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
  );
};
>>>>>>> dev

export default CustomerComponentHome;
