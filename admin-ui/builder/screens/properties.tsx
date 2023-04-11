import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Property from "../../app/template/property-component/Property";
import { Switch, Case, Default } from "react-if";
const Properties = () => {
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
              <Button onClick={() => updateSection("properties")} size="small">
                {" "}
                properties
              </Button>
            </Grid>
            <Grid item xs={3.5}>
              <Button onClick={() => updateSection("css")} size="small">
                css
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={() => updateSection("model")} size="small">
                model
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={() => updateSection("api")} size="small">
                api
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Switch>
          <Case condition={sectionType === "properties"}>
            <Grid item xs={12}>
              Properties
            </Grid>
          </Case>
          <Case condition={sectionType === "css"}>
            <Grid item xs={12}>
              CSS
            </Grid>
          </Case>
          <Case condition={sectionType === "model"}>
            <Grid item xs={12}>
              model
            </Grid>
          </Case>
          <Case condition={sectionType === "api"}>
            <Grid item xs={12}>
              api
            </Grid>
          </Case>
          <Default>
            <Grid item xs={12}>
              Properties
            </Grid>
          </Default>
        </Switch>
      </Grid>
    </div>
  );
};
export default Properties;
