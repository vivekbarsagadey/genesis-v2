import React, { use } from 'react';
import CustomerReportComponent from '.';
import { findAll } from '../../../services/api.service';
import { IUser } from '../models';

const URL = 'user';

function Page() {
  const user = use<Array<IUser>>(findAll(URL));
  console.log(user);
  return <CustomerReportComponent user={user} />;
}
export default Page;
