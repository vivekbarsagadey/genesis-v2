<<<<<<< HEAD
'use client';

import React, { use, Suspense } from 'react';
import CompanyComponentHome from '.';
import { findAll } from '../../services/api.service';
import { ICompany } from './models/company.model';

const URL = 'companies';
function Page() {
  const companies = use<Array<ICompany>>(findAll(URL));
  return (
    <Suspense>
      <CompanyComponentHome companies={companies} />
    </Suspense>
  )
}
=======
"use client";
import { use } from "react";
import CompanyComponentHome from ".";
import { findAll } from "../../services/api.service";
import {ICompany} from "./models/company.model";

const URL = "companies";

const Page = () => {
  const companies = use<Array<ICompany>>(findAll(URL));
  return <CompanyComponentHome companies={companies}/>;
};
>>>>>>> dev

export default Page;
 