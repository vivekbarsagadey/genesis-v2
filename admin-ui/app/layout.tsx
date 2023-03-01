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
