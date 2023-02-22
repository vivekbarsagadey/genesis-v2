"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { theme } from "../themes/com-light";
import createEmotionCache from "../utils/createEmotionCache";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";
import { CacheProvider } from "@emotion/react";

const queryClient = new QueryClient();
const clientSideEmotionCache = createEmotionCache();
export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
      </head>
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <body>
              <SessionProvider session={props?.session}>
                <QueryClientProvider client={queryClient}>
                  <main>{children}</main>
                </QueryClientProvider>
              </SessionProvider>
            </body>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
