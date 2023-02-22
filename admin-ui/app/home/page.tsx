"use client";
import { useState } from "react";

const Page = () => {
  const [show, setShow] = useState(true);
  const handleMenu = () => {
    setShow(!show);
  };
  
  return (
    <>
      this is main page
    </>
  );
};

export default Page;
