"use client"
import React, { useEffect, useState } from 'react'
import CompanyHome from '.'
import ICompany from './company.model';



const company = Array<ICompany>()

const page = () => {
  const [company, setCompany] = useState([]);
  const fetchData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`)
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
    <div>
      <CompanyHome companyData={company}> </CompanyHome>
    </div>
  )
}

export default page