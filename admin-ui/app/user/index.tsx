"use client"
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { ViewTypes } from "../utility";
import FilterComponent from "./filter";
import UserCalendarView from "./list/calendar.view";
import ExportComponent from "./list/export.component";
import UserGraphView from "./list/graph.view";
import UserGridView from "./list/grid.view";
import UserKanbanView from "./list/kanban.view";
import ListViewComponent from "./list/list.screen";

import PrintComponent from "./print";
import UserSearchDetails from "./search";
import IUser from "./user.model";
import UserViewComponent from "./view";


interface UserComponentProps {
  user: Array<IUser>;
}

const UserComponentHome = ({ user }: UserComponentProps) => {
  const [copyUser, setCopyUser] = useState<Array<IUser>>([
    ...user,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

  const onSearchHandler = (c: Array<IUser>) => {
    setCopyUser(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  return (
    <>
      <Box mt={1} ml={1.5}>
        <Grid container spacing={1}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <UserSearchDetails
              user={user}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container>
              <Grid item xs={"auto"} mt={0.3}>
                <FilterComponent
              user={user}
              onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={"auto"} mt={0.3}>
                <ExportComponent user={copyUser} />
              </Grid>
              <Grid item xs={"auto"} mt={0.3}>
                <PrintComponent/>
              </Grid>

              <Grid item xs={9}>
                <UserViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link href={"/user/userreport"} passHref style={{textDecoration:'none'}}>
              <Button variant="contained" size="small">
                Report
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link href={"/user/create"} passHref style={{textDecoration:'none'}}>
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
              <UserGridView user={copyUser} />
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <UserGraphView user={copyUser} />
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <UserKanbanView user={copyUser} />
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <UserCalendarView user={copyUser} />
            </Case>
            <Default>
              <ListViewComponent user={copyUser} />
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default UserComponentHome;
