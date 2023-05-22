"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./index";


const Page = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\companies`);
    const result = await users.json();
    setCompanies(result);
  };

  return (
    <>
      <HomeComponent items={companies}></HomeComponent>
    </>
  );
};

export default Page;
