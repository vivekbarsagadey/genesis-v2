"use client";
import { use } from "react";
import CustomerEditComponent from ".";
import { findById } from "../../../services/api.service";

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
const Page = ({ params }) => {
  const id = params.id;

  const customers = use<Customer>(findById("customer", id));
  return <>{customers && <CustomerEditComponent customers={customers} id={id} />}</>
  
};

export default Page;
