import React from "react";
import { Grid, Typography } from "@mui/material";
import { ModelStyle as style } from "./model.style";

const Model = ({ menuList }) => {
  const components = menuList?.map((d) =>
    d.components.map((d) => d.properties)
  );
  const modelData = components[1]?.map((general) =>
    general?.map((d) => d.model)
  );
  return (
    <>
      <Grid container>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={4.5}>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <Typography style={style.width}>width</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {modelData[0]?.map((p) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Typography style={style.typography}>{p.width}</Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default Model;
