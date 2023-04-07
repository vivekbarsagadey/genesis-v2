"use client";
import React from "react";
// lets load json file
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import genisys from "../data/genisys.json";
import Category from "./menu/menu";
import Grid from "@mui/material/Grid";
import Header from "./menu/header/header";

const BuilderHome = ({ projectInfo }) => {
  console.log("projectInfo >>", projectInfo);
  console.log("genisys >>", genisys);

  return (
    <>
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
            <Header   projectInfo={projectInfo}   />
            </Grid>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={9}>
                <>Screen Page</>
              </Grid>
              <Grid item xs={3}>
                <>Property 4 Section</>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BuilderHome;
