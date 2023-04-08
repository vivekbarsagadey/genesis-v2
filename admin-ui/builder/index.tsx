"use client";
import React, { use } from "react";
import Box from "@mui/material/Box";
import genisys from "../data/genisys.json";
import Category from "./menu/menu";
import Grid from "@mui/material/Grid";
import { ProjectContext } from "../app/project/info";
import Screens from "./screens/screens";
import BuilderHeaderComponent from "./header/header";
import BuilderScreenComponent from "./screens/screens";
import { findById } from "../services/api.service";

const BuilderHome = () => {
  const value = React.useContext(ProjectContext);
  const project = use(findById("projects", value));
  console.log(" project -->",project);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <>
            {/* {genisys.categories?.map((category, index) => {
          return (
            <Category
              key={index}
              id={index}
              name={category.name}
              icon={category.icon}
              title={category.title}
              items={category.items}
            />
          );
        })} */}
          </>
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12}>
            <BuilderHeaderComponent />
          </Grid>
          <Grid item xs={12}>
           
            <Grid   container spacing={2} >

                <Grid  item xs={12} >Header </Grid>
                <Grid  item xs={8} >4 different screens</Grid>
                <Grid  item xs={4} >4 property</Grid>
            </Grid>


          </Grid>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuilderHome;
