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
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                background
              </Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                borderRadius
              </Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                height
              </Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                overflowY
              </Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                position
              </Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography style={{ color: "#212E3D", fontSize: "0.73rem" }}>
                width
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {properties[0]?.map((p: any) => {
            return (
              <div key={p.id}>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Typography
                      style={{ color: "#EC5500", fontSize: "0.73rem" }}
                    >
                      {p.background}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Typography
                      style={{ color: "#EC5500", fontSize: "0.73rem" }}
                    >
                      {p.borderradius}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Typography
                      style={{ color: "#EC5500", fontSize: "0.73rem" }}
                    >
                      {p.height}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Typography
                      style={{ color: "#03AA5A", fontSize: "0.73rem" }}
                    >
                      {p.overflowY}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Typography
                      style={{ color: "#03AA5A", fontSize: "0.73rem" }}
                    >
                      {p.position}
                    </Typography>
                  </Grid>
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

export default Property;
