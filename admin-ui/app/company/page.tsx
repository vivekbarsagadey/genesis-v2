"use client";
import React, { useEffect, useState, Suspense, use } from "react";
import CompanyComponentHome from ".";
import ICompany from "./models/company.model";
import { findAll } from "../../services/api.service";

const Page = () => {
  const companies = use<Array<ICompany>>(findAll("companies"));
  return <CompanyComponentHome companies={companies}/>;
};

export default Page;
