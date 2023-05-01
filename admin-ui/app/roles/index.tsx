'use client';

import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { ViewTypes } from '../utility';
import RolesFilterComponent from './filters';
import RoleCalendarView from './list/calendar.view';
import ExportComponent from './list/export.component';
import RoleGraphView from './list/graph.view';
import RoleGridView from './list/grid.view';
import RoleKanbanView from './list/kanban.view';
import ListViewComponent from './list/list.view.component';
import RolesSearchDetails from './search';
import RoleViewComponent from './view';

interface RoleComponentProps {
  roles: Array<IRoles>;
}
function RoleComponentHome({ roles }: RoleComponentProps) {
  const [copyRoles, setCopyRoles] = useState<Array<IRoleComponentProps>>([
    ...roles,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const onSearchHandler = (c: Array<IRoles>) => {
    setCopyRoles(c);
  };
  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };
  const myRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });

  return (
    <Box mt={1} ml={1.5}>
      <Grid container spacing={1}>
        <Grid item xs={3} md={3} lg={3} sm={3}>
          <RolesSearchDetails roles={roles} onSearchHandler={onSearchHandler} />
        </Grid>
        <Grid item xs={8} md={8} sm={8} lg={8} display="flex">
          <Grid container>
            <Grid item xs="auto" mt={0.3}>
              <RolesFilterComponent
                roles={roles}
                onFilterHandler={onSearchHandler}
              />
            </Grid>
            <Grid item xs="auto" mt={0.2}>
              <ExportComponent copyRoles={roles} />
            </Grid>
            <Grid item xs="auto" mt={0.2}>
              <Tooltip title="Print">
                <IconButton onClick={() => handlePrint()}>
                  <PrintIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item xs={9}>
              <RoleViewComponent onViewSelect={onViewSelect} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Link
            href="/roles/create"
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
              <RoleGridView roles={copyRoles} />
            </Grid>
          </Case>
          <Case condition={viewType === ViewTypes.GRAPH}>
            <Grid ref={myRef}>
              <RoleGraphView roles={copyRoles} />
            </Grid>
          </Case>
          <Case condition={viewType === ViewTypes.KANBAN}>
            <Grid ref={myRef}>
              <RoleKanbanView roles={copyRoles} />
            </Grid>
          </Case>
          <Case condition={viewType === ViewTypes.CALENDAR}>
            <Grid ref={myRef}>
              <RoleCalendarView roles={copyRoles} />
            </Grid>
          </Case>
          <Default>
            <Grid ref={myRef}>
              <ListViewComponent roles={copyRoles} />
            </Grid>
          </Default>
        </Switch>
      </Grid>
    </Box>
  );
}

export default RoleComponentHome;
