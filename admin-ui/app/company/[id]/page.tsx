"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import CompanyComponent from ".";
import ICompany from "../company.model";

const fetchData = async (id: string) => {
  const res = await axios.get<ICompany>(
    `http://localhost:8000/api/v1/companies/${id}`
  );
  return await res.data;
};

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { _id: string };
}) {
  const [company, setCompany] = useState<ICompany>();
  const { data, error, isError, isLoading } = useQuery(
    [`company-${params?.id}`],
    async () => await fetchData(params?.id)
  );

  if (isLoading) {
    return <>Please wait .....</>;
  }
  if (isError) {
    return <>Please wait there is some error</>;
  }

  return <CompanyComponent company={data} />;
}
