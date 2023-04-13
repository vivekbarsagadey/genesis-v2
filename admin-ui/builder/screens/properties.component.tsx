import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Property from "../../app/template/property-component/Property";
import { Switch, Case, Default } from "react-if";
import { Typography } from "@mui/material";
import { ProjectContext } from "..";
import genisys from "../../data/genisys.json";
import ButtonPropertiesComponent from "../components/button/properties.component";
import ButtonCssComponent from "../components/button/css.component";
import ButtonModelComponent from "../components/button/model.component";
import ButtonApiComponent from "../components/button/api.component";
import Divider from '@mui/material/Divider';


const PropertiesComponent = () => {
  const value = React.useContext(ProjectContext);
  const [sectionType, setSectionType] = useState<string>("");
  const updateSection = (typeRecv: string) => {
    setSectionType(typeRecv);
  };

  console.log("Component Id >>>", value);

  console.log("genisys >>",genisys);

  console.log("getComponentMetaData", 
      genisys?.component.filter(  (ele)=> ele.id == value  )
  );

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
                <Divider sx={{ height: 28,}} orientation="vertical" />
            
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
            <ButtonPropertiesComponent />
          </Case>
          <Case condition={sectionType === "css"}>
            <ButtonCssComponent />
          </Case>
          <Case condition={sectionType === "model"}>
            <ButtonModelComponent />
          </Case>
          <Case condition={sectionType === "api"}>
            <ButtonApiComponent />
          </Case>
        </Switch>
      </Grid>
    </div>
  );
};
export default PropertiesComponent;
