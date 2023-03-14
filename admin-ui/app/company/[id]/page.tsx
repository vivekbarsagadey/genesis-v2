"use client";
import React, { useEffect, useState } from "react";
import CompanyEditComponent from ".";

const _id = "641034daa9cd62cbc29a3099";

const page = () => {
  const [company, setCompany] = useState([]);
  const fetchData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies/${_id}`)
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setCompany(d);
      });
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
export default page;
