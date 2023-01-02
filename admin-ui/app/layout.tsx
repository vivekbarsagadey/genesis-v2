"use client";
import Head from "./head";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../themes/com-light";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import LayoutComponent from "../component/common/LayoutComponent";

const queryClient = new QueryClient();
export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider session={props.session}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <body>
                <main>
                  <>
                    <LayoutComponent>{children}</LayoutComponent>
                  </>
                </main>
              </body>
            </ThemeProvider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

// "use client";
// import HeaderComponent from "../component/common/Header/HeaderComponent";
// import Head from "./head";
// import * as React from "react";
// import { Grid, IconButton, Typography } from "@mui/material";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { theme } from "../themes/com-light";
// import SidebarComponent from "../component/common/Sidebar/SidebarComponent";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
// import Image from "next/image";
// import Logo from "../component/common/Sidebar/Logo";
// import { SessionProvider } from "next-auth/react";
// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// const queryClient = new QueryClient();
// export default function RootLayout({
//   children,
//   ...props
// }: {
//   children: React.ReactNode;
// }) {
//   const [show, setShow] = React.useState(true);

//   const handleMenu = () => {
//     setShow(!show);
//   };

//   return (
//     <html>
//       <head>
//         <Head />
//       </head>

//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <body>
//             <main>
//               <>
//               <SessionProvider session={props.session}>
//                 <Grid container>
//                   <Grid
//                     pl={2}
//                     pt={2}
//                     pr={1}
//                     item
//                     xs={show ? 1.5 : 1.5}
//                     sm={show ? 1.5 : 0.5}
//                     md={show ? 2 : 0.5}
//                     lg={show ? 2 : 0.5}
//                     textAlign={show ? "right" : "left"}
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <Logo handleMenu={handleMenu} show={show} />
//                     <SidebarComponent show={show} />
//                   </Grid>
//                   <Grid
//                     item
//                     xs={show ? 10.5 : 10.5}
//                     sm={show ? 10.5 : 11.5}
//                     md={show ? 10 : 11.5}
//                     lg={show ? 10 : 11.5}
//                   >
//                     <HeaderComponent />
//                     {children}
//                   </Grid>
//                 </Grid>
//                 </SessionProvider>
//               </>
//             </main>
//           </body>
//         </ThemeProvider>
//       </QueryClientProvider>

//     </html>
//   );
// }

// // "use client";

// // import { SessionProvider } from "next-auth/react";

// // export default function RootLayout({
// //   children,
// //   ...props
// // }) {
// //   console.log("layout", { props }); // empty
// //   return (
// //     <html>
// //       <head></head>
// //       <body>
// //         <SessionProvider session={props.session}>{children}</SessionProvider>
// //       </body>
// //     </html>
// //   );
// // }
