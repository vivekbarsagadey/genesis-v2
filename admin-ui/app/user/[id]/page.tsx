'use client';

import { use } from 'react';
import UserEditComponent from '.';

import { findById } from '../../../services/api.service';

type User = {
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

	const users = use<User>(findById('user', id));
	return <>{users && <UserEditComponent users={users} id={id} />}</>;
}

export default Page;
