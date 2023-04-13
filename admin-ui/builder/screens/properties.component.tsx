import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Property from "../../app/template/property-component/Property";
import { Switch, Case, Default } from "react-if";
import { Typography } from "@mui/material";
import { ProjectContext } from "..";
import genisys from "../../data/genisys.json";

const PropertiesComponent = () => {
  const value = React.useContext(ProjectContext);

  const dataSet = genisys.categories.map((d) => d.items);

  var filterData = [];
  for (var i = 0; i < dataSet.length; i++) {
    filterData = filterData.concat(dataSet[i]);
  }

  const generalInformation = filterData.filter((d) => d.id == value);
  const propertyTabInfo = generalInformation.map((d) => d.general);

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
                      skjdkjsdkj
                      {info?.map((property, index) => {
                        return (
                          <Grid item xs={12} key={index}>
                            <Typography>{property.background}</Typography>
                            <Typography>{property.borderRadius}</Typography>
                            <Typography>{property.height}</Typography>
                            <Typography>{property.overflowY}</Typography>
                            <Typography>{property.position}</Typography>
                            <Typography>{property.width}</Typography>
                          </Grid>
                        );
                      })}
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
