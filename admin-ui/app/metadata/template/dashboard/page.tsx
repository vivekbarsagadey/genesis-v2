'use client';

import { use } from 'react';
import CustomerComponentHome from '.';
import { IDashboardTemplate } from './models';
import { findAll } from '../../../../services/api.service';

const URL = 'template/dashboard';

function Page() {
  const dashboardTemplate = use<Array<IDashboardTemplate>>(findAll(URL));
  return <CustomerComponentHome customer={customer} />;
}

export default Page;
