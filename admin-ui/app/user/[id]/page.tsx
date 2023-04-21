"use client";
import { use } from "react";
import UserEditComponent from ".";

<<<<<<< HEAD
import { findById } from "../../../services/api.service";
=======
const page = () => {
  return (
    <>
      <UserComponent/>
    </>
  )
}
>>>>>>> 5ea9868b9c91d9d66c81f7ce7ff5573ea14de14d

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

const Page = ({ params }) => {
  const id = params.id;

  const users = use<User>(findById("user", id));
  return <>{users && <UserEditComponent users={users} id={id} />}</>
  
};

export default Page;
