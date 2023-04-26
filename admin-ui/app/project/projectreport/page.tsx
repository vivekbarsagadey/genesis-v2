import React,{use} from 'react'
import ReportButtonComponent from '.'
import IProject from '../project.model';
import { findAll } from '../../../services/api.service';

const URL = "projects";

console.log(URL)
const Page = () => {
  const projects = use<Array<IProject>>(findAll(URL));
  return <ReportButtonComponent projects={projects}/>;
};

export default Page;
