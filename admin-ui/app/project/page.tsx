import React, { use } from 'react';
import ProjectHomeComponent from '.';
import { findAll } from '../../services/api.service';
import IProject from './project.model';

const URL = 'projects';
console.log(URL);
function Page() {
  const projects = use<Array<IProject>>(findAll(URL));
  return <ProjectHomeComponent projects={projects} />;
}

export default Page;
