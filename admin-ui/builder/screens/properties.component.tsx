import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Property from "../../app/template/property-component/Property";
import { Switch, Case, Default } from "react-if";
import {  Typography } from "@mui/material";


const PropertiesComponent = () => {
  const [sectionType, setSectionType] = useState<string>("");
  const updateSection = (typeRecv: string) => {
    setSectionType(typeRecv);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <Typography
                onClick={() => updateSection("properties")}
                style={{ cursor: "pointer" }}
              >
                Properties
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                onClick={() => updateSection("css")}
                style={{ cursor: "pointer" }}
              >
                CSS
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                onClick={() => updateSection("model")}
                style={{ cursor: "pointer" }}
              >
                Model
              </Typography>
            </Grid>
            <Grid item xs={1}>
             
              <Typography
                onClick={() => updateSection("api")}
                style={{ cursor: "pointer" }}
              >
                API
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Switch>
          <Case condition={sectionType === "properties"}>
            <Grid container>
              <Grid item xs={4.5}>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography>background</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>borderRadius</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>height</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>overflowY</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>position</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>width</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography>red</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>20px</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>80vh</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>overflowY</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>absolute</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>80%</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Case>
          <Case condition={sectionType === "css"}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography>borderRadius</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>height</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>overflowY</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>width</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography>20px</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>60vh</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>overflowY</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>20%</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Case>
          <Case condition={sectionType === "model"}>
            <Grid item xs={6}>
              <Typography>width</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>50%</Typography>
            </Grid>
          </Case>
          <Case condition={sectionType === "api"}>
            <Grid item xs={4}>
              <Typography>url</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>https://tailwindcss.com/docs</Typography>
            </Grid>
          </Case>
        </Switch>
      </Grid>
    </div>
  );
};
export default PropertiesComponent;
