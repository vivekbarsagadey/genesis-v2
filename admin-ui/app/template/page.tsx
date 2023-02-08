"use client";
import React from "react";
import LayoutTemplate from "./LayoutTemplate";

const page = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutTemplate children={children} />
    </>
  );
};

export default page;
