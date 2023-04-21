"use client";
import { use } from "react";
import UserComponentHome from ".";
import { findAll } from "../../services/api.service";
import { IUser } from "./models";

const URL = "user";
const Page = () => {
  const user = use<Array<IUser>>(findAll(URL));
  return <UserComponentHome user={user} />;
};

export default Page;
