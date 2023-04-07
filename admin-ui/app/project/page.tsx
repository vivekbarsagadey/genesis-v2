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

export default Page;
