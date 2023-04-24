"use client";
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { ViewTypes } from "../utility";
import ProjectFilterComponent from "./filter";
import ProjectCalendarView from "./list/calendar.view";
import ProjectExportComponent from "./list/export.component";
import ProjectGraphView from "./list/graph.view";
import ProjectGridView from "./list/grid.view";
import ProjectKanbanView from "./list/kanban.view";
import ProjectListViewComponent from "./list/list.screen";
import PrintComponent from "./print";
import IProject from "./project.model";
import ProjectSearch from "./search";
import ProjectViewComponent from "./view";

interface ProjectComponentProps {
  projects: Array<IProject>;
}

const ProjectHomeComponent = ({ projects }: ProjectComponentProps) => {
  const [copyProject, setCopyProject] = useState<Array<IProject>>([
    ...projects,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

  const onSearchHandler = (c: Array<IProject>) => {
    setCopyProject(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  return (
    <Box ml={1.5}>
      <Grid mt={1}>
        <Grid container spacing={1}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <ProjectSearch
              projects={projects}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container spacing={1}>
              <Grid item xs={"auto"}>
                <ProjectFilterComponent
                  projects={projects}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={"auto"}>
                <ProjectExportComponent projects={copyProject} />
              </Grid>

              <Grid item xs={"auto"}>
                <PrintComponent/>
              </Grid>

              <Grid item xs={10}>
                <ProjectViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link
              href={"/project/create"}
              passHref
              style={{ textDecoration: "none" }}
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
              <ProjectGridView projects={projects} />
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <ProjectGraphView projects={projects} />
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <ProjectKanbanView projects={projects} />
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <ProjectCalendarView projects={projects} />
            </Case>
            <Default>
              <ProjectListViewComponent projects={copyProject} />
            </Default>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectHomeComponent;
