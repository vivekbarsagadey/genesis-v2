import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import PinIcon from "@mui/icons-material/Pin";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Grid, ListItemIcon } from "@mui/material";
import Switch, { Case, Default } from "react-switch-case";
import SideBarInnerText from "./sidebar.inner.text";

const SideBarInnerList = ({ item, show, updateMyDragImages }) => {
  return (
    <Grid container mt={-4}>
      <Grid item xs={4}>
        {show && (
          <ListItemIcon>
            <Switch condition={item.icon}>
              <Case value="PinIcon ">
                <PinIcon 
                style={{ fontSize: "1rem", color: "#334D6E" }} />
              </Case>
              <Case value="PinIcon ">
                <PinIcon 
                style={{ fontSize: "1rem", color: "#334D6E" }} />
              </Case>
              <Case value="PinIcon">
                <PinIcon 
                style={{ fontSize: "1rem", color: "#334D6E" }} />
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
        {show && (
          <SideBarInnerText
            item={item}
            updateMyDragImages={updateMyDragImages}
          />
        )}
      </Grid>
    </Grid>
  );
};
export default SideBarInnerList;
