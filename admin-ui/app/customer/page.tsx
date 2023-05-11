/* eslint-disable react/react-in-jsx-scope */

'use client';

import { use } from 'react';
import CustomerComponentHome from '.';
import { findAll } from '../../services/api.service';
import { ICustomer } from './models';

const URL = 'customer';

function Page() {
  const customer = use<Array<ICustomer>>(findAll(URL));
  return <CustomerComponentHome customer={customer} />;
}

export default Page;
