import React, { use } from 'react';
import CompanyReportComponent from '.';
import { findAll } from '../../../services/api.service';
import { ICompany } from '../models';

const URL = 'companies';
function Page() {
  const companies = use<Array<ICompany>>(findAll(URL));
  return <CompanyReportComponent company={companies} />;
}

export default Page;
