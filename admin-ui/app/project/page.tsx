'use client';

import React, { use, Suspense } from 'react';
import CompanyComponentHome from '.';
import { findAll } from '../../services/api.service';
import { IProjects } from './models';

const URL = 'project';
function Page() {
  const project = use<Array<IProjects>>(findAll(URL));
  return (
    <Suspense>
      <CompanyComponentHome projects={project} />
    </Suspense>
  )
}

export default Page;
 