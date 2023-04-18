"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Link from "next/link";
import SignIn from "./auth/login/page";

const page = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        signed in as {session.user.email}
        <Link href={"/create"}>
          <Button>create</Button>
        </Link>
        <button onClick={() => signOut()}>SignOut </button>
      </>
    );
  } 
  
    return (
      <>
        <SignIn />
      </>
    );
  
  
};

export default page;
