"use client";
import { use } from "react";
import CustomerEditComponent from ".";
import { findById } from "../../../services/api.service";

type Customer = {
  name: string;
  address: string;
  firstName: string;
  lastname: string;
  email: string;
  mobile: string;
  website: string;
  foundationYear: string;
};
const Page = ({ params }) => {
  const id = params.id;

  const customers = use<Customer>(findById("customer", id));

  return (
    <>{customers && <CustomerEditComponent customers={customers} id={id} />}</>
  );
};

export default Page;
