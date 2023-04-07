"use client";
import React from "react";
import Box from "@mui/material/Box";
import genisys from "../data/genisys.json";
import Category from "./menu/menu";
import Grid from "@mui/material/Grid";
import { ProjectContext } from "../app/project/info";
import Screens from "./screens/screens";
import BuilderHeaderComponent from "./header/header";
import BuilderScreenComponent from "./screens/screens";

const BuilderHome = () => {
  const value = React.useContext(ProjectContext);

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
          <Grid item xs={12} >
            <BuilderScreenComponent />
          </Grid>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuilderHome;
