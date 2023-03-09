// correct layout
"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../component/common/header";
import Logo from "../../component/common/Sidebar/logo";
import SidebarComponent from "../../component/common/Sidebar/sidebar.component";
import InnerLayout from "./inner-layout/inner.layout";
import { IMenuListSet } from "./templateInterface/template.interface";
const LayoutTemplate = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {

  const [show, setShow] = useState(true);
  const [project, setProject] = useState("");

  //JSON data set for all menu given to menuList
  const [menuList] = useState();
  const handleMenu = () => {
    setShow(!show);
  };
  const [dragList, setDragList] = React.useState<IMenuListSet[]>([]);

  const updateMyDragImages = (newList: any) => {
    setDragList([...dragList, newList]);
  };
  const fetchData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
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
      <Grid container>
        <Grid
          item
          xs={show ? 1.3 : 1.5}
          sm={show ? 1.3 : 0.5}
          md={show ? 2 : 0.5}
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
    </>
  );
};
export default LayoutTemplate;
