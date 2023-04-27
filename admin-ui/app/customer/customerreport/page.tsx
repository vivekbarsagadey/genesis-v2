import React, { use } from 'react';
import CustomerReportComponent from '.';
import { findAll } from '../../../services/api.service';
import { ICustomer } from '../models';

const URL = 'customer';

const Page = () => {
  const customer = use<Array<ICustomer>>(findAll(URL));

  return <CustomerReportComponent  customer={customer} />;
};
export default Page;
