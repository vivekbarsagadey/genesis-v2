import React from "react";
import { Grid, Typography } from "@mui/material";
const Api = ({ menuList }) => {
  const components = menuList?.map((d) =>
    d.components?.map((d) => d.properties)
  );
  const apiData = components[1]?.map((general) =>
    general?.map((d) => d.api)
  );
  return (
    <>
      <Grid container>
        <Grid item xs={0.7}></Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={12} mt={1}>
              <Typography >
                url
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9.3}>
          {apiData[0]?.map((p) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Typography >
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
