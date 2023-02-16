"use client";
import { Button, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import TestingCreateButton from "./create";
import TestingFilter from "./filter";
import TestingListComponent from "./list";
import TestingGridView from "./list/GridView";

import TestingSearch from "./search";

import TestingCalendarView from "./list/CalendarView";
import TestingGraphView from "./list/GraphView";
import TestingKanbanView from "./list/KanbanView";
import DownloadAll from "./list/DownloadAll";
import ViewsTestingComponent from "./view";

const TestingHome = () => {
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={2.7}>
          <TestingSearch />
        </Grid>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={0.4}>
          <TestingFilter />
        </Grid>
        <Grid item xs={4}>
          <DownloadAll />
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={1.5}>
              <TestingGridView />
            </Grid>
            <Grid item xs={1.5}>
              <TestingCalendarView />
            </Grid>
            <Grid item xs={1.5}>
              <TestingGraphView />
            </Grid>
            <Grid item xs={1.5}>
              <TestingKanbanView />
            </Grid>
          </Grid>
          {/* <ViewsTestingComponent/> */}
        </Grid>
        <Grid item xs={1}>
          <Grid item xs={11.5} display={"flex"} justifyContent={"flex-end"}>
            <Link href={"/testing/create"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
                style={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  padding: "0.2rem 1.1rem ",
                }}
              >
                Create
                <span style={{ marginLeft: "0.8rem", fontSize: "1rem" }}>
                  +
                </span>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <TestingListComponent />
    </>
  );
};

export default TestingHome;
