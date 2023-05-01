'use client';

import {
	Box, Button, Grid, IconButton, Tooltip,
} from '@mui/material';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Case, Default, Switch } from 'react-if';
import { useReactToPrint } from 'react-to-print';
import PrintIcon from '@mui/icons-material/Print';
import { ViewTypes } from '../utility';
import FilterComponent from './filter';
import UserCalendarView from './list/calendar.view';
import ExportComponent from './list/export.component';
import UserGraphView from './list/graph.view';
import UserGridView from './list/grid.view';
import UserKanbanView from './list/kanban.view';
import ListViewComponent from './list/list.screen';
import UserSearchDetails from './search';
import IUser from './user.model';
import UserViewComponent from './view';

interface UserComponentProps {
  user: Array<IUser>;
}

function UserComponentHome({ user }: UserComponentProps) {
	const [copyUser, setCopyUser] = useState<Array<IUser>>([...user]);
	const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

	const onSearchHandler = (c: Array<IUser>) => {
		setCopyUser(c);
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
  <Grid item xs={4} md={3} lg={3} sm={2}>
  <UserSearchDetails user={user} onSearchHandler={onSearchHandler} />
				</Grid>

  <Grid item xs={4} md={8} sm={8} lg={7} display="flex">
  <Grid container>
  <Grid item xs="auto" mt={0.4}>
  <FilterComponent user={user} onFilterHandler={onSearchHandler} />
						</Grid>
  <Grid item xs="auto" mt={0.5}>
  <ExportComponent user={copyUser} />
						</Grid>
  <Grid item xs="auto" mt={0.5}>
  <Tooltip title="Print">
  <IconButton onClick={() => handlePrint()}>
  <PrintIcon fontSize="small" />
								</IconButton>
							</Tooltip>
						</Grid>

  <Grid item xs={9}>
  <UserViewComponent onViewSelect={onViewSelect} />
						</Grid>
					</Grid>
				</Grid>

  <Grid item xs={1} mt={0.7}>
  <Link
  href="/user/userreport"
  passHref
  style={{ textDecoration: 'none' }}
					>
  <Button variant="contained" size="small">
  Report
						</Button>
					</Link>
				</Grid>
  <Grid item xs={1} mt={0.7}>
  <Link href="/user/create" passHref style={{ textDecoration: 'none' }}>
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
  <Grid>
  <UserGridView user={copyUser} myRef={myRef} />
						</Grid>
					</Case>
  <Case condition={viewType === ViewTypes.GRAPH}>
  <Grid>
  <UserGraphView user={copyUser} myRef={myRef} />
						</Grid>
					</Case>
  <Case condition={viewType === ViewTypes.KANBAN}>
  <UserKanbanView user={copyUser} myRef={myRef} />
					</Case>
  <Case condition={viewType === ViewTypes.CALENDAR}>
  <UserCalendarView user={copyUser} myRef={myRef} />
					</Case>
  <Default>
  <ListViewComponent user={copyUser} myRef={myRef} />
					</Default>
				</Switch>
			</Grid>
		</Box>
	);
}

export default UserComponentHome;
