"use client";
import { use } from "react";
import CompanyComponentHome from ".";
import { findAll } from "../../services/company/api.service";
import {ICompany} from "./models/company.model";

const URL = "companies";

const Page = () => {
  const companies = use<Array<ICompany>>(findAll(URL));
  return <CompanyComponentHome companies={companies}/>;
};

export default Page;
