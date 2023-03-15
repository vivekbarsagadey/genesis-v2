"use client";
import React, { useEffect, useState } from "react";
import CompanyHome from ".";
import ICompany from "./company.model";

const company = Array<ICompany>();

const Page = () => {
  const [company, setCompany] = useState([]);

  const fetchData = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`);
    const result = await users.json();
    setCompany(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CompanyHome companyData={company}> </CompanyHome>
    </div>
  );
};

export default Page;
