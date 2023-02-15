import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Logo from "./Sidebar/Logo";
import SidebarComponent from "./Sidebar/SidebarComponent";
import HeaderComponent from "./Header/HeaderComponent";
import { IMenuListSet } from "./templateInterface/TemplateInterface";
import { menu } from "../../component/common/data/componentsData";
import { useSession, signIn, signOut } from "next-auth/react";
import InnerLayout from "../../app/template/inner-layout/InnerLayout";
const LayoutComponent = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);
  const [project, setProject] = useState("");

  //JSON data set for all menu given to menuList
  const [menuList, setMenuList] = useState<IMenuListSet[]>(menu);
  const handleMenu = () => {
    setShow(!show);
  };
  const [dragList, setDragList] = React.useState<IMenuListSet[]>([]);
  const updateMyDragImages = (newList: any) => {
    setDragList([...dragList, newList]);
  };
  const fetchData = () => {
    fetch("http://localhost:3000/api/projects")
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setProject(d);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {session && (
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
            <SidebarComponent
              show={show}
              updateMyDragImages={updateMyDragImages}
              menuList={menuList}
            />
          </Grid>
          <Grid
            item
            style={{ backgroundColor: " #EDF2F9", height: "100vh" }}
            xs={show ? 10.5 : 10.5}
            sm={show ? 10.5 : 11.5}
            md={show ? 10 : 11.5}
            lg={show ? 10 : 11.26}
          >
            <HeaderComponent project={project} />
            <InnerLayout
              dragList={dragList}
              menuList={menuList}
              project={project}
              setDragList={setDragList}
            />
            {children}
          </Grid>
        </Grid>
      )}
      {!session && <div>{children}</div>}
    </>
  );
};

export default LayoutComponent;
