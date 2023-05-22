<<<<<<< HEAD
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
=======
"use client";
import { use } from "react";
import CustomerComponentHome from ".";
import { findAll } from "../../services/api.service";
import { ICustomer } from "./models";

const URL = "customer";

const Page = () => {
  const customer = use<Array<ICustomer>>(findAll(URL));
  return <CustomerComponentHome customer={customer}/>;
};
>>>>>>> dev

export default Page;
