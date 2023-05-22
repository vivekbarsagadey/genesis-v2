"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import CompanyComponent from ".";
import ICompany from '../company.model';




const fetchData = async (id: string) => {
  const res = await axios.get<ICompany>(`http://localhost:8000/api/v1/companies/${id}`)
  return await res.data 
} 

export default function Page({ params, searchParams }: {
  params: { id: string },
  searchParams: { _id: string },
}) {

  const [company, setCompany] = useState<ICompany>();
  const { data , error, isError, isLoading } = useQuery([`company-${params?.id}`], async() => await fetchData(params?.id))

  if (isLoading) { 
   return <>Please wait .....</>
  }
  if (isError) { 
    return <>Please wait there is some error</>
  }
  if (data) {
    console.log(data)
  }
    
  return <CompanyComponent company={data} />
  

}
<<<<<<< HEAD
'use client';

import React, { use } from 'react';
import { findById } from '../../../services/api.service';
import CompanyEditComponent from '.';

type Company = {
  name: string;
  address: string;
  firstName: string;
  lastname: string;
  email: string;
  mobile: string;
  website: string;
  foundationYear: string;
=======
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
  const id = params.id;

  const company = use<Company>(findById("companies", id));
 

  return <>{company && <CompanyEditComponent company={company} id={id} />}</>;
>>>>>>> dev
};
function Page({ params }: any) {
  const { id } = params;

  const company = use<Company>(findById('companies', id));
  return <div>{ company && <CompanyEditComponent company={company} id={id} />}</div>;
}

export default Page;
