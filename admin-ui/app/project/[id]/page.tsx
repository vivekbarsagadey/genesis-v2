'use client';

import React, { use } from 'react';
import { findById } from '../../../services/api.service';
import CompanyEditComponent from '.';

type Company = {
  name: string;
  address: string;
  firstName: string;
  lastname: string;
  email: string;
  mobile: string;
  website: string;
  foundationYear: string;
};
function Page({ params }: any) {
  const { id } = params;

  const company = use<Company>(findById('companies', id));
  return <div>{ company && <CompanyEditComponent company={company} id={id} />}</div>;
}

export default Page;
