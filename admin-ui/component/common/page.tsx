import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Logo from "./Sidebar/Logo";
import SidebarComponent from "./Sidebar/SidebarComponent";
import HeaderComponent from "./Header/paget";
import { useSession, signIn, signOut } from "next-auth/react";
const LayoutComponent = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  const [show, setShow] = React.useState(true);

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
            xs={show ? 1.3 : 1.5}
            sm={show ? 1.3 : 0.5}
            md={show ? 2 : 0.5}
            lg={show ? 2 : 0.5}
            textAlign={show ? "right" : "left"}
            style={{ backgroundColor: "white" }}
          >
            <Logo handleMenu={handleMenu} show={show} />
            <SidebarComponent show={show} />
          </Grid>
          <Grid
            item style={{backgroundColor:" #EDF2F9", height:"100vh"}}
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
      {!session && (
        <div>
          {children}
        </div>
      )}
    </>
  );
};

export default LayoutComponent;
