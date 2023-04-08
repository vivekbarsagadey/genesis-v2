"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { ProjectContext } from "../app/project/info";
import Logo from "../component/common/Sidebar/logo";
import genisys from "../data/genisys.json";
import BuilderHeaderComponent from "./header/header";
import BuilderSidebarComponent from "./menu/sidebar/builder.sidebar.component";
import ScreenHeader from "./screens/screen.header";
import MainPageComponent from "./screens/main.page";
import Properties from "./screens/properties";

const BuilderHome = () => {
  const value = React.useContext(ProjectContext);

  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <Box>
      <Grid container >
        <Grid item xs={2} pl={2} pr={1}>
        
          
          <Logo handleMenu={handleMenu} show={show} />
           <BuilderSidebarComponent show={show}/>
            {/* {genisys.categories?.map((category, index) => {
              return (
                <Category
                  key={index}
                  id={category.id}
                  name={category.name}
                  icon={category.icon}
                  title={category.title}
                  items={category.items}
                />
              );
            })} */}
    
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12}>
            <BuilderHeaderComponent />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ScreenHeader />
              </Grid>
              <Grid item xs={8}>
               <MainPageComponent/>
              </Grid>
              <Grid item xs={4}>
                <Properties/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuilderHome;
