'use client';

import { use } from 'react';
import RoleComponentHome from '.';
import { findAll } from '../../services/api.service';
import { IRole } from './models';

const URL = 'roles';

function Page() {
  const roles = use<Array<IRole>>(findAll(URL));
  return <RoleComponentHome roles={roles} />;
}

export default Page;
