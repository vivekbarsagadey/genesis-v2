"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import UserComponent from ".";
import IUser from "../user.model"


const fetchData = async (id: string) => {
  const res = await axios.get<IUser>(`http://localhost:8000/api/v1/users/${id}`)
  return res.data 
} 

export default function Page({ params, searchParams }: {
  params: { id: string },
  searchParams: { _id: string },
}) {


  const { data , error, isError, isLoading } = useQuery([`user-${params?.id}`], async() => await fetchData(params?.id))

  if (isLoading) { 
   return (<>Please wait .....</>)
  }
  if (isError) { 
    return (<>Please wait there is some error</>)
  }
  if (data) {
  }
    
  return <UserComponent user={data} />
  

}