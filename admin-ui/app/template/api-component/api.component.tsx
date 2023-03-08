import React from "react";
import { Grid, Typography } from "@mui/material";
const Api = ({ menuList }: any) => {
  const components = menuList.map((d: any) =>
    d.components.map((d: any) => d.properties)
  );
  const apiData = components[1].map((general: any) =>
    general.map((d: any) => d.api)
  );
  return (
    <>
      <Grid container>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                url
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9.3}>
          {apiData[0]?.map((p: any) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Typography style={{ color: "blue", fontSize: "0.73rem" }}>
                      {p.url}
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
export default Api;
