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

  // const getCompany = fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`
  // ).then((res) => res.json());
  const company = use<Company>(findById("companies", id));
  // const fetchData = async () => {
  //   const users = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`
  //   );
  //   const result = await users.json();

  //   setCompany(result);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return <>{company && <CompanyEditComponent company={company} id={id} />}</>;
};

export default Page;
