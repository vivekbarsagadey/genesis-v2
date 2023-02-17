"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SidebarComponent from "../../component/common/Sidebar/SidebarComponent";
import HeaderComponent from "../../component/common/Header/HeaderComponent";
import { menu } from "../../component/common/data/componentsData";
import { IMenuListSet } from "../template/templateInterface/TemplateInterface";
import Logo from "../../component/common/sidebar/logo";
import TestingHome from "../project.screen";
import ProjectSidebar from "../../component/common/ProjectSidebar/ProjectSidebar";

const Page = () => {
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
          {/* <SidebarComponent
            show={show}
            updateMyDragImages={updateMyDragImages}
            menuList={menuList}
          /> */}

          <ProjectSidebar show={show}/>
        </Grid>
        <Grid
          item
          style={{ backgroundColor: " #EDF2F9", height: "100vh" }}
          xs={show ? 10.5 : 10.5}
          sm={show ? 10.5 : 11.5}
          md={show ? 10 : 11.5}
          lg={show ? 10 : 11.26}
        >
          <HeaderComponent />

          {/* <ListProject/> */}
          <Grid item xs={12}>
            <>
              <TestingHome />
            </>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
