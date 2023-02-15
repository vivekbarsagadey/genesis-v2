
"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import SignIn from "./login/page";
import Registration from "./register/page";


const page = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
      </>
    ) 
  }
  return (
    <>
    <SignIn />
    </>
  )
}

export default page


// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Home() {
//   const { data: session } = useSession();
//   console.log(session)
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {!session ? (
//         <>
//           <p>Not signed in</p>
//           <br />
//           <button onClick={() => signIn()}>Sign in</button>
//         </>
//       ) : (
//         <main className={styles.main}>
//           <div className={styles.header}>
//             {/* <h4>Signed in as {session.user.name}</h4> */}
//             <button onClick={() => signOut()}>Sign out</button>
//           </div>
//           <main className={styles.main}>
//         <h1 className={styles.title}>This is home page</h1>
//       </main>
//         </main>
//       )}

      
//     </div>
//   );
// }
