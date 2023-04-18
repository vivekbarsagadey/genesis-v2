"use client";
import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import SignIn from "./login/page";

const page = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <p>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
        {/* <Dashboard /> */}
      </p>
    );
  }
  return (
    <>
      <SignIn />
    </>
  );
};

export default page;
