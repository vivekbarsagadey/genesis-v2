"use client";
import React, { useEffect, useState } from "react";
import CompanyEditComponent from ".";
import { use } from "react";
import { findById } from "../../../services/api.service";

type Company = {
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
  // const [company, setCompany] = useState(null);
  const id = params.id;

  const company = use<Company>(findById("companies", id));
 

  return <>{company && <CompanyEditComponent company={company} id={id} />}</>;
};

export default Page;
