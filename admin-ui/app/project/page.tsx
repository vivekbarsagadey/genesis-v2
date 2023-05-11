'use client';

import React, { useEffect, useState } from 'react';
import ProjectHomeComponent from '.';

function Page() {
  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setProjects(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <ProjectHomeComponent projects={projects} />
    </>
  );
}

export default Page;
