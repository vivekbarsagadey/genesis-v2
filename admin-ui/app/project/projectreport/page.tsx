import React, { use } from 'react';
import ProjectReportComponent from '.';
import IProject from '../project.model';
import { findAll } from '../../../services/api.service';

const URL = 'projects';

function Page() {
	const projects = use<Array<IProject>>(findAll(URL));
	return <ProjectReportComponent projects={projects} />;
}

export default Page;
