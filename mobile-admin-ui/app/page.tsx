"use client";
import { Grid } from "@mui/material";
import React from "react";
import HeaderComponent from "./components/header";
import Button from '@mui/material/Button';
import Link from "next/link";

const page = () => {
  return (
    <div>
            <Link href={"/create"}>
            <Button>create</Button></Link>
    </div>
  );
};

export default page;
