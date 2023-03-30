"use client";
import React, { useEffect, useState } from "react";
import ProjectHomeComponent from "./index";

const Page = () => {
  // const [project, setProject] = useState([]);

  // const fetchData = async () => {
  //   const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  //   const result = await users.json();
  //   setProject(result);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [project, setProject] = useState([]);

  const fetchData = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    const result = await users.json();
    setProject(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("project >>><<<",project)
  return (
    <div>
      <ProjectHomeComponent projectData={project} />
    </div>
  );
};

export default Page;
