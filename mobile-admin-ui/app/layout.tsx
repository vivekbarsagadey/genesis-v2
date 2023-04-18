"use client";


import { SessionProvider } from "next-auth/react";
import LayoutComponent from "./components/LayoutComponent";


export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
         <SessionProvider session={props.session}>
           <LayoutComponent>{children}</LayoutComponent>
        </SessionProvider>
      </body>
    </html>
  );
}
