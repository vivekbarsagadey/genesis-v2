"use client";
import React, { useEffect, useState } from "react";
import CompanyHome from ".";
import ICompany from "./company.model";

const company = Array<ICompany>();

const page = () => {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`);
    const result = await users.json();
    setCompany(result);
  };

  return (
    <div>
      <CompanyHome companyData={company}> </CompanyHome>
    </div>
  );
};

export default page;
