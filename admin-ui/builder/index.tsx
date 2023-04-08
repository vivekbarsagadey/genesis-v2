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
import ScreenHeader from "./screens/screen.header";

const BuilderHome = () => {
  const value = React.useContext(ProjectContext);

  // id fetched Project Data, if Im using use hook then my model is not working poperly
  // const project = use(findById("projects", value));
  console.log("genisys >>", genisys);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <>
            meu bar section
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
          </>
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
                4 different screens
              </Grid>
              <Grid item xs={4}>
                4 property
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuilderHome;
