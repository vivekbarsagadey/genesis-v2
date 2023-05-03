'use client';

import { use } from 'react';
import { IDashboardTemplate } from './models';
import { findAll } from '../../../../services/api.service';
import DashBoardComponentHome from '.';

const URL = 'template/dashboard';

function Page() {
  const dashboardTemplate = use<Array<IDashboardTemplate>>(findAll(URL));
  return <DashBoardComponentHome dashboard={dashboardTemplate} />;
}

export default Page;
