"use client";
import React, { useEffect, useState } from "react";
import CompanyEditComponent from ".";

const _id = "641034daa9cd62cbc29a3099";

const Page = () => {
  const [company, setCompany] = useState([]);

  const fetchData = async () => {
    const users = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies/${_id}`
    );
    const result = await users.json();
    setCompany(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CompanyEditComponent company={company} _id={_id} />
    </>
  );
};
export default Page;
