'use client';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { ViewTypes } from '../utility';
import ProjectFilterComponent from './filter';
import ProjectCalendarView from './list/calendar.view';
import ProjectExportComponent from './list/export.component';
import ProjectGraphView from './list/graph.view';
import ProjectGridView from './list/grid.view';
import ProjectKanbanView from './list/kanban.view';
import ProjectListViewComponent from './list/list.screen';
import IProject from './project.model';
import ProjectSearch from './search';
import ProjectViewComponent from './view';
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
  const myRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });

  return (
    <Box ml={1.5}>
      <Grid mt={1}>
        <Grid container spacing={1}>
          <Grid item xs={2} md={3} lg={3} sm={3}>
            <ProjectSearch
              projects={projects}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={4} md={8} sm={8} lg={8} display={'flex'}>
            <Grid container spacing={1}>
              <Grid item xs={'auto'} mt={0.3}>
                <ProjectFilterComponent
                  projects={projects}
                  onFilterHandler={onSearchHandler}
                />
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <ProjectExportComponent projects={copyProject} />
              </Grid>
              <Grid item xs={'auto'} mt={0.2}>
                <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={4}>
                <ProjectViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link
              href={'/project/projectreport'}
              passHref
              style={{ textDecoration: 'none' }}
            >
              <Button variant="contained" size="small">
                Report
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link
              href={'/project/create'}
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
                <ProjectGridView projects={projects} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <Grid ref={myRef}>
                <ProjectGraphView projects={projects} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <Grid ref={myRef}>
                <ProjectKanbanView projects={projects} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <Grid ref={myRef}>
                <ProjectCalendarView projects={projects} />
              </Grid>
            </Case>
            <Default>
              <Grid ref={myRef}>
                <ProjectListViewComponent projects={copyProject} />
              </Grid>
            </Default>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectHomeComponent;
