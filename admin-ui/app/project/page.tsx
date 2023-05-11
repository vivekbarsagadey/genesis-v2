'use client';

import { Suspense, use } from 'react';
import ProjectComponentHome from '.';
import { findAll } from '../../services/api.service';
import { IProjects } from './models';

const URL = 'project';
function Page() {
  const project = use<Array<IProjects>>(findAll(URL));
  return (
    <Suspense>
      <ProjectComponentHome projects={project} />
    </Suspense>
  );
}

export default Page;
