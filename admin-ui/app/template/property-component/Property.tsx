import React from "react";
import { Grid, Typography } from "@mui/material";

const Property = ({ menuList }: any) => {
  const components = menuList.map((d: any) =>
    d.components.map((d: any) => d.properties)
  );
  const properties = components[0].map((general: any) =>
    general.map((d: any) => d.general)
  );

  return (
    <>
      <Grid container>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={4.5}>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <Typography>background</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography>borderRadius</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography>height</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography>overflowY</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography>position</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography>width</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {properties?.map((p: any) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <PropertyList p={p} />
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

const PropertyList = ({ p }) => {
  return (
    <>
      <Grid item xs={12} mt={1}>
        <Typography>{p.background}</Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography>{p.borderradius}</Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography>{p.height}</Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography>{p.overflowY}</Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography>{p.position}</Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography>{p.width}</Typography>
      </Grid>
    </>
  );
};
export default Property;
