'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import { border_Radius, colors } from '../../../../themes';
import { ViewTypes } from '../../../utility';
import DashBoardTemplateListScreen from './list/list.screen';
import { IDashboardTemplate } from './models';
import CustomerViewComponent from './view';

interface DashBoardTemplateComponentProps {
  dashboard: Array<IDashboardTemplate>;
}

function DashBoardComponentHome({ dashboard }: DashBoardTemplateComponentProps) {
  const [copyDashbaord, setCopyDashbaord] = useState<Array<IDashboardTemplate>>([
    ...dashboard,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const [show, setShow] = useState(false);
  const onSearchHandler = (c: Array<IDashboardTemplate>) => {
    setCopyDashbaord(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  const myRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });
  const router = useRouter();

  return (
    <Box
      ml={1.5}
      style={{
        backgroundColor: colors.white,
        borderRadius: border_Radius.borderRadius,
      }}
      pl={2}
      pb={1}
      pt={1}
      mr={2.5}
    >
      <Grid mt={1}>
        <Grid container spacing={1}>
          <Grid item xs={2} md={2} lg={3} sm={2}>
            {/* <CustomerSearchDetails
              dashboard={dashboard}
              onSearchHandler={onSearchHandler}
            /> */}
          </Grid>
          <Grid item xs={7} md={7} sm={7} lg={6} display="flex">
            <Grid container>
              <Grid item xs="auto" mt={0.3}>
                {/* <FilterComponent
                  dashboard={dashboard}
                  onFilterHandler={onSearchHandler}
                /> */}
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                {/* <ExportComponent dashboard={dashboard} /> */}
              </Grid>
              <Grid item xs="auto" mt={0.2}>
                {/* <Tooltip title="Print">
                  <IconButton onClick={() => handlePrint()}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip> */}
              </Grid>

              <Grid item xs={9}>
                <CustomerViewComponent onViewSelect={onViewSelect} />
              </Grid>
            </Grid>
          </Grid>

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
              href="/metadata/dashbaord/dashbaord.report"
              passHref
              style={{ textDecoration: 'none' }}
            >
              <Button variant="contained" size="small">
                Report
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1} mt={1}>
            <Link
              href="/metadata/template/dashbaord/create"
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
            {/* <Case condition={viewType === ViewTypes.GRID}>
              <Grid ref={myRef}>
                <DashbaordTemplateGridView dashboard={copyDashbaord} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <Grid ref={myRef}>
                <CustomerGraphView dashboard={copyDashbaord} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <Grid ref={myRef}>
                <CustomerKanbanView dashboard={copyDashbaord} />
              </Grid>
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <Grid ref={myRef}>
                <CustomerCalendarView dashboard={copyDashbaord} />
              </Grid>
            </Case> */}
            <Default>
              <Grid>
                <DashBoardTemplateListScreen
                  dashboard={copyDashbaord}
                  setCopyDashbaord={copyDashbaord}
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

export default DashBoardComponentHome;
