/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/react-in-jsx-scope */

'use client';

import { use } from 'react';
import RoleEditComponent from '.';
import { findById } from '../../../services/api.service';

type Role = {
  name: string;
  description: string;
  code: string;
};
function Page({ params }: any) {
  const { id } = params;

  const roles = use<Role>(findById('roles', id));
  return <>{roles && <RoleEditComponent roles={roles} id={id} />}</>;
}

export default Page;
