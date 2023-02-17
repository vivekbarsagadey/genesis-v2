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
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <SidebarComponent
              show={show}
              updateMyDragImages={updateMyDragImages}
              menuList={menuList}
            />
          </Grid>
          <Grid item xs={10}>
            <HeaderComponent />
          </Grid>
        </Grid>
      </Box> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Logo handleMenu={handleMenu} show={show} />
            <SidebarComponent
              show={show}
              updateMyDragImages={updateMyDragImages}
              menuList={menuList}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <HeaderComponent />
              </Grid>
              <Grid item xs={12}>
                <>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Eligendi, id. Quos, perferendis obcaecati 
                voluptas accusantium dolorem ex nemo excepturi. 
                Laboriosam, tempora. Vero similique in molestiae 
                nemo ullam voluptate distinctio consequatur ?
                </>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
