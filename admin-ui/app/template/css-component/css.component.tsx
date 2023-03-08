import React from "react";
import { Grid, Typography } from "@mui/material";
import { CSSStyle as style } from "./css.style";

const Css = ({ menuList }) => {
  const components = menuList.map((d) => d.components.map((d) => d.properties));
  const cssP = components[1].map((general) => general?.map((d) => d.css));
  return (
    <>
      <Grid container>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={4.5}>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <Typography style={style.typography}>borderRadius</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={style.typography}>height</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={style.typography}>overflowY</Typography>
            </Grid>

            <Grid item xs={12} mt={1}>
              <Typography style={style.typography}>width</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {cssP[0]?.map((p: any) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Typography style={style.typography}>
                      {p.borderradius}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Typography style={style.typography}>
                      {" "}
                      {p.height}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Typography style={style.typography}>
                      {" "}
                      {p.overflowY}
                    </Typography>
                  </Grid>

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

export default Css;
