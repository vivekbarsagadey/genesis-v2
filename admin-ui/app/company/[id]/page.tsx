'use client';

import React, { useEffect, useState, use } from 'react';
import CompanyEditComponent from '.';

import { findById } from '../../../services/api.service';

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
  return <>{company && <CompanyEditComponent company={company} id={id} />}</>;
}

export default Page;
