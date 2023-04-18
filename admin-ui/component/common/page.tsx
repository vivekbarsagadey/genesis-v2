import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import { HeaderComponent, Logo, SidebarComponent } from "./";
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
            item
            style={{ backgroundColor: " #EDF2F9", height: "100vh" }}
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
      {!session && <>{children}</>}
    </>
  );
};

export default LayoutComponent;
