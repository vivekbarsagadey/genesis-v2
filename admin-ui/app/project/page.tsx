<<<<<<< HEAD
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
=======
"use client";
import { use } from "react";
import ProjectHomeComponent from ".";
import CustomerComponentHome from ".";
import { findAll } from "../../services/api.service";
import IProject from "./project.model";


const URL = "projects";

const Page = () => {
  const projects = use<Array<IProject>>(findAll(URL));
  return <ProjectHomeComponent projects={projects}/>;
};
>>>>>>> dev

export default Page;
