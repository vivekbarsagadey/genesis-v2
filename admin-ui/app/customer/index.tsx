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

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={1}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <CustomerSearchDetails
              customer={customer}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container spacing={1}>
              <Grid item xs={"auto"}>
                <FilterComponent
                  customer={customer}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={"auto"}>
                <ExportComponent customer={copyCustomer} />
              </Grid>

              <Grid item xs={10}>
                <CustomerViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link href={"/customer/create"} passHref>
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

export default CustomerComponentHome;
