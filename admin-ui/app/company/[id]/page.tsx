"use client";
import React, { useEffect, useState } from "react";
import CompanyEditComponent from ".";

const id = "641034daa9cd62cbc29a3099";

const Page = () => {
  const [company, setCompany] = useState([]);

  const fetchData = async () => {
    const users = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`
    );
    const result = await users.json();
    setCompany(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CompanyEditComponent company={company} id={id} />
    </>
  );
};
export default Page;
