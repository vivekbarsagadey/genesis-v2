"use client";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import HeaderComponent from "./components/header";
import AppsIcon from "@mui/icons-material/Apps";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Grid container spacing={2}>
          <Grid item xs={2} display="flex">
            <AppsIcon />
            <Typography>Project</Typography>
          </Grid>
          <Grid item xs={10}>
            <HeaderComponent />
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
