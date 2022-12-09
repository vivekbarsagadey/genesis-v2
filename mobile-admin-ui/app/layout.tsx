"use client"

import Grid from "@mui/material/Grid"
import HeaderComponent from "./components/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderComponent />
        </Grid>
        <Grid item xs={12}>{children}
        </Grid>
      </Grid></body>
    </html>
  )
}
