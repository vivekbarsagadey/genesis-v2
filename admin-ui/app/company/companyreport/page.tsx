"use client"

import React,{ useEffect, useState } from 'react';
import CompanyReportComponent from '.';

function Page() {
  const [companies, setCompanies] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies`
    );
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setCompanies(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  // const companies = use<Array<ICompany>>(findAll(URL));
  console.log('companies >>', companies);

  return <CompanyReportComponent company={companies} />;
}

export default Page;
