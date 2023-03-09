"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./index";
import IUser from "./user.model";
import axios from "axios";

const users = Array<IUser>();

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users`);
    const result = await users.json();
    // companies.push(...result)
    setUsers(result);
  };
  return (
    <>
      <HomeComponent items={users}></HomeComponent>
    </>
  );
};

export default Home;
