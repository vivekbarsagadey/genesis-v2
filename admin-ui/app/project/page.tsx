import React, { Suspense, use } from 'react';
import ProjectHomeComponent from '.';
import { findAll } from '../../services/api.service';
import IProject from './project.model';

const URL = 'projects';
function Page() {
  const projects = use<Array<IProject>>(findAll(URL));
  console.log('this is projects', projects);

  return (
    <Suspense>
      <ProjectHomeComponent projects={projects} />
    </Suspense>
  );
}

export default Page;
