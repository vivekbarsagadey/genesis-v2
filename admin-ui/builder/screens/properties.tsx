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
          <Button onClick={() => updateSection("properties")}>
            properties
          </Button>
          <Button onClick={() => updateSection("css")}>css</Button>
          <Button onClick={() => updateSection("model")}>model</Button>
          <Button onClick={() => updateSection("api")}>api</Button>
        </Grid>
        <Switch>
          <Case condition={sectionType === "properties"}>
            <Grid item xs={12}>
              Properties
            </Grid>
          </Case>
          <Case condition={sectionType === "css"}>
            <Grid item xs={12}>
              css
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
