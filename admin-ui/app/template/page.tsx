"use client";
import React from "react";
import LayoutTemplate from "./layout.template";

const page = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutTemplate children={children} />
    </>
  );
};

export default page;
