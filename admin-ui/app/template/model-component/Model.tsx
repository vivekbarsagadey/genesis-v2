import React from "react";
import { Grid, Typography } from "@mui/material";
const Model = ({ menuList }: any) => {
  const components = menuList.map((d: any) =>
    d.components.map((d: any) => d.properties)
  );
  const modelData = components[1]?.map((general) =>
    general?.map((d: any) => d.model)
  );
  return (
    <>
      <Grid container>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={4.5}>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                width
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {modelData[0]?.map((p: any) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Typography
                      style={{ color: "#EC5500", fontSize: "0.73rem" }}
                    >
                      {p.width}
                    </Typography>
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
