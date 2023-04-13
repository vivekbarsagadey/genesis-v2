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
import Divider from "@mui/material/Divider";
import EmailPropertiesComponent from "../components/email/properties.component";
import PasswordPropertiesComponent from "../components/password/properties.component";
import ConfirmPasswordPropertiesComponent from "../components/confirm.password/properties.component";
import DropdownPropertiesComponent from "../components/dropdown/properties.component";
import NumberPropertiesComponent from "../components/number/properties.component";
import TextPropertiesComponent from "../components/text/properties.component";
import CheckboxPropertiesComponent from "../components/checkbox/properties.component";
import EmailCssComponent from "../components/email/css.component";
import PasswordCssComponent from "../components/password/css.component";
import ConfirmPasswordCssComponent from "../components/confirm.password/css.component";
import DropdownCssComponent from "../components/dropdown/css.component";
import NumberCssComponent from "../components/number/css.component";
import TextCssComponent from "../components/text/css.component";
import CheckboxCssComponent from "../components/checkbox/css.component";
import EmailModelComponent from "../components/email/model.component";
import PasswordModelComponent from "../components/password/model.component";
import ConfirmPasswordModelComponent from "../components/confirm.password/model.component";
import DropdownModelComponent from "../components/dropdown/model.component";
import NumberModelComponent from "../components/number/model.component";
import TextModelComponent from "../components/text/model.component";
import CheckboxModelComponent from "../components/checkbox/model.component";
import EmailApiComponent from "../components/email/api.component";
import PasswordApiComponent from "../components/password/api.component";
import ConfirmPasswordApiComponent from "../components/confirm.password/api.component";
import DropdownApiComponent from "../components/dropdown/api.component";
import NumberApiComponent from "../components/number/api.component";
import TextApiComponent from "../components/text/api.component";
import CheckboxApiComponent from "../components/checkbox/api.component";

const PropertiesComponent = () => {
  const value = React.useContext(ProjectContext);
  const [sectionType, setSectionType] = useState<string>("");
  const updateSection = (typeRecv: string) => {
    setSectionType(typeRecv);
  };

  console.log("Component Id >>>", value);

  console.log("genisys >>", genisys);

  console.log(
    "getComponentMetaData",
    genisys?.component.filter((ele) => ele.id == value)
  );

  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ background: "#e2e8f0", padding: "0.3rem" }}>
          <Grid container>


            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography
                    onClick={() => updateSection("properties")} style={{ cursor: "pointer" }}>
                    Properties
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Divider sx={{ height: 20 }} orientation="vertical" />
                </Grid>
              </Grid>
            </Grid>




            <Grid item xs={2}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography onClick={() => updateSection("css")} style={{ cursor: "pointer" }}>
                    Css
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Divider sx={{ height: 20 }} orientation="vertical" />
                </Grid>
              </Grid>
            </Grid>



            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography onClick={() => updateSection("model")}
                    style={{ cursor: "pointer" }} textAlign="center">
                    Model
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Divider sx={{ height: 20 }} orientation="vertical" />
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={2}>
              <Grid container>
                <Grid item xs={7}>
                  <Typography onClick={() => updateSection("api")}
                    style={{ cursor: "pointer" }}>
                    Api
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Divider sx={{ height: 20 }} orientation="vertical" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Switch>
          <Case condition={sectionType === "properties"}>
            <ButtonPropertiesComponent />
            <EmailPropertiesComponent />
            <PasswordPropertiesComponent />
            <ConfirmPasswordPropertiesComponent />
            <DropdownPropertiesComponent />
            <NumberPropertiesComponent />
            <TextPropertiesComponent />
            <CheckboxPropertiesComponent />

          </Case>
          <Case condition={sectionType === "css"}>
            <ButtonCssComponent />
            <EmailCssComponent />
            <PasswordCssComponent />
            <ConfirmPasswordCssComponent />
            <DropdownCssComponent />
            <NumberCssComponent />
            <TextCssComponent />
            <CheckboxCssComponent />
          </Case>
          <Case condition={sectionType === "model"}>
            <ButtonModelComponent />
            <EmailModelComponent />
            <PasswordModelComponent />
            <ConfirmPasswordModelComponent />
            <DropdownModelComponent />
            <NumberModelComponent />
            <TextModelComponent />
            <CheckboxModelComponent />
          </Case>
          <Case condition={sectionType === "api"}>
            <ButtonApiComponent />
            <EmailApiComponent />
            <PasswordApiComponent />
            <ConfirmPasswordApiComponent />
            <DropdownApiComponent />
            <NumberApiComponent />
            <TextApiComponent />
            <CheckboxApiComponent />
          </Case>
        </Switch>
      </Grid>
    </div>
  );
};
export default PropertiesComponent;
