'use client';
import { use } from "react";
import RoleEditComponent from ".";
import { findById } from "../../../services/api.service";

type Role = {
  name: string;
  description: string;
  code: string;
};
const Page = ({ params }: any) => {
  const id = params.id;

  const roles = use<Role>(findById('roles', id));
  return <>{roles && <RoleEditComponent roles={roles} id={id} />}</>;
};

export default Page;
