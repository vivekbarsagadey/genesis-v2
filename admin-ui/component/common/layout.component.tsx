import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import HeaderComponent from "./header";
import Logo from "./Sidebar/logo";
import ProjectSidebar from "./../common/sidebar/projectsidebar/project.sidebar"

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      {session && (
        <Grid container>
          <Grid
            pl={2}
            pt={2}
            pr={1}
            item
            xs={show ? 1.5 : 1.5}
            sm={show ? 1.5 : 0.5}
            md={show ? 2 : 0.5}
            lg={show ? 2 : 0.5}
            textAlign={show ? "right" : "left"}
            style={{ backgroundColor: "white" }}
          >
            <Logo handleMenu={handleMenu} show={show} />
            {/* <SidebarComponent show={show} /> */}
            <ProjectSidebar show={show} />
          </Grid>
          <Grid
            item
            xs={show ? 10.5 : 10.5}
            sm={show ? 10.5 : 11.5}
            md={show ? 10 : 11.5}
            lg={show ? 10 : 11.5}
          >
            <HeaderComponent />
            {children}
          </Grid>
        </Grid>
      )}
      {!session && <div>{children}</div>}
    </>
  );
};

export default LayoutComponent;
