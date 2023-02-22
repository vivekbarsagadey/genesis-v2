"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import HeaderComponent from "../../component/common/Header/HeaderComponent";
import ProjectSidebar from "../../component/common/ProjectSidebar/ProjectSidebar";
import Logo from "../../component/common/sidebar/logo";

export default function Layout({ children } : any) {
  const [show, setShow] = useState(true);
  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={show ? 1.3 : 1.5}
          sm={show ? 1.3 : 0.5}
          md={show ? 2 : 0.74}
          lg={show ? 2 : 0.74}
          pl={2}
          pt={2}
          pr={1}
          textAlign={show ? "right" : "left"}
          style={{ backgroundColor: "white" }}
        >
          <Logo handleMenu={handleMenu} show={show} />
          <ProjectSidebar show={show} />
        </Grid>
        <Grid
          item
          style={{ backgroundColor: "#EDF2F9", height: "100vh" }}
          xs={show ? 10.5 : 10.5}
          sm={show ? 10.5 : 11.5}
          md={show ? 10 : 11.5}
          lg={show ? 10 : 11.26}
        >
          <HeaderComponent />
          <Grid item xs={12}>
            <>
            {children}
            </>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
 
}