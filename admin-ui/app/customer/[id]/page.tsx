/* eslint-disable react/react-in-jsx-scope */

'use client';

import { use } from 'react';
import CustomerEditComponent from '.';
import { findById } from '../../../services/api.service';

type Customer = {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  email: string;
  mobile: string;
  gender: string;
  status: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
};
function Page({ params }: any) {
  const { id } = params;

  const customers = use<Customer>(findById('customer', id));
  return (
    <div>{customers && <CustomerEditComponent customers={customers} id={id} />}</div>
  );
}

export default Page;
