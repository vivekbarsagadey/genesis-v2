<<<<<<< HEAD
'use client';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Divider, Grid, IconButton, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { baseStyle, colors } from '../../themes';
import { ViewTypes } from '../utility';
import FilterComponent from './filters';
import ProjectsCalendarView from './list/calendar.view';
import ProjectGraphView from './list/graph.view';
import ProjectGridView from './list/grid.view';
import ProjectKanbanView from './list/kanban.view';
import ProjectListViewComponent from './list/list.view.component';
import { IProjects } from './models/projects.model';
import ProjectsSearchDetails from './search';
import CompanyViewComponent from './view';
import ExportComponent from './list/export.component';

interface ProjectComponentProps {
  projects: Array<IProjects>;
}
const useStyles = makeStyles({
  root: {
    backgroundColor: colors.white,
    borderRadius: baseStyle.borderRadius.small,
  },
  textDecor: { textDecoration: baseStyle.textDecoration.none },
  display: { display: baseStyle.display },
  divider: { background: '#009688', height: '0.1rem', marginTop: '0.2rem' },
  checkbox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function ProjectComponentHome({ projects }: ProjectComponentProps) {
  const [copyProjects, setCopyProjects] = useState<Array<IProjects>>([
    ...projects,
  ]);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const onSearchHandler = (c: Array<IProjects>) => {
    setCopyProjects(c);
  };
  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };
  const myRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });

  const classes = useStyles();

  const itemsCallBackHandler = (_items: Array<IProjects>) => {
    setCopyProjects(_items);
  };

  // const removeData = (f: any) => {
  //   getRemove(f);
  // };

  // const getRemove = async (id: any) => {
  //   await deleteCompany(id);
  //   // router.push("/company");
  //   window.location.reload();
  // };

  console.log('projectsprojectsprojects', projects);

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
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <ProjectsSearchDetails
=======
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
import ProjectListViewComponent from "./list/list.screen";
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
    <>
      <Box sx={{ flexGrow: 1 }} mt={1}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <ProjectSearch
>>>>>>> dev
              projects={projects}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
<<<<<<< HEAD
          <Grid item xs={5} md={6} sm={5} lg={8} className={classes.display}>
            <Grid container>
              <Grid item xs="auto" mt={0.3}>
                <FilterComponent
                  projects={projects}
                  onFilterHandler={onSearchHandler}
                  itemsCallBackHandler={itemsCallBackHandler}
                />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                <ExportComponent copyProjectData={copyProjects} />
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={3} md={6} sm={3}>
                <CompanyViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={2} sm={2.3} lg={1} md={1.6} mt={0.7} className={classes.checkbox}>
            {show && (
              <Tooltip title="Delete All" arrow>
                <IconButton aria-label="delete" onClick={() => removeData(projects)}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Grid> */}
          <Grid item xs={1} mt={1}>
            <Link href="/project/create" passHref className={classes.textDecor}>
=======
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container spacing={1}>
              <Grid item xs={"auto"}>
                <ProjectFilterComponent
                  projects={projects}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={"auto"}>
                <ProjectExportComponent projects={copyProject}/>
              </Grid>

              <Grid item xs={10}>
                <ProjectViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link href={"/project/create"} passHref>
>>>>>>> dev
              <Button variant="contained" size="small">
                Create
              </Button>
            </Link>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid item xs={12} className={classes.divider}></Grid>
        <Grid item xs={12} pl={2}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <Grid ref={myRef}>
                <ProjectGridView projects={copyProjects} myRef={myRef} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <Grid>
                <ProjectGraphView projects={copyProjects} myRef={myRef} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <Grid ref={myRef}>
                <ProjectKanbanView projects={copyProjects} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <Grid ref={myRef}>
                <ProjectsCalendarView projects={copyProjects} />
              </Grid>
            </Case>
            <Default>
              <Grid>
                <ProjectListViewComponent
                  projects={copyProjects}
                  myRef={myRef}
                  show={show}
                  setShow={setShow}
                />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Grid>
    </Box>
=======
        <Grid item xs={12}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <ProjectGridView projects={projects} />
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <ProjectGraphView projects={projects} />
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              {/* <ProjectKanbanView  /> */}
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <ProjectCalendarView projects={projects}  />
            </Case>
            <Default>
              <ProjectListViewComponent projects={copyProject} />
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
>>>>>>> dev
  );
}

<<<<<<< HEAD
export default ProjectComponentHome;
=======
export default ProjectHomeComponent;
>>>>>>> dev
