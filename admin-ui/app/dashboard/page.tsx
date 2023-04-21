"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./index";

import axios from "axios";
import Dashboard from "./index";


const Home = () => {
  // const[users,setUsers]=useState([])
  // useEffect(() => {
  //   fetchData()
  //  }, []);
  // const fetchData =async()=>{
  // const users=  await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users`)
  // const result = await users.json()
  // setUsers(result)
  // }

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
};

export default Home;
