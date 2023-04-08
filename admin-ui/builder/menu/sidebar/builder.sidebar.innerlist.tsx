import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import PinIcon from "@mui/icons-material/Pin";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Grid, ListItemIcon } from "@mui/material";
import Switch, { Case, Default } from "react-switch-case";
import BuilderSideBarInnerText from "./builder.sidebar.innertext";

const BuilderSideBarInnerList = ({ item, show }) => {
  return (
    <Grid container mt={-6} ml={2}>
      <Grid item xs={4}>
        {show && (
          <ListItemIcon>
            <Switch condition={item.icon}>
              <Case value="PinIcon ">
                <PinIcon style={{ fontSize: "1rem", color: "#334D6E" }} />
              </Case>
              <Case value="PinIcon ">
                <PinIcon style={{ fontSize: "1rem", color: "#334D6E" }} />
              </Case>
              <Case value="PinIcon">
                <PinIcon style={{ fontSize: "1rem", color: "#334D6E" }} />
              </Case>
              <Case value="KeyboardHideIcon">
                <KeyboardHideIcon
                  style={{ fontSize: "1rem", color: "#334D6E" }}
                />
              </Case>
              <Case value="RadioButtonCheckedIcon ">
                <RadioButtonCheckedIcon
                  style={{ fontSize: "1rem", color: "#334D6E" }}
                />
              </Case>
              <Case value="RadioButtonCheckedIcon">
                <RadioButtonCheckedIcon
                  style={{ fontSize: "1rem", color: "#334D6E" }}
                />
              </Case>
              <Case value="ArrowDropDownIcon">
                <ArrowDropDownIcon
                  style={{ fontSize: "1rem", color: "#334D6E" }}
                />
              </Case>
              <Case value="FormatColorTextIcon">
                <FormatColorTextIcon
                  style={{ fontSize: "1rem", color: "#334D6E" }}
                />
              </Case>
              <Default>
                {" "}
                <FormatColorTextIcon
                  style={{ fontSize: "1rem", color: "#334D6E" }}
                />
              </Default>
            </Switch>
          </ListItemIcon>
        )}
      </Grid>

      <Grid item xs={8}>
        {show && <BuilderSideBarInnerText item={item} />}
      </Grid>
    </Grid>
  );
};
export default BuilderSideBarInnerList;
