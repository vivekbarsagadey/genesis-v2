import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import PinIcon from "@mui/icons-material/Pin";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Switch, { Case, Default } from "react-switch-case";
import BuilderSideBarInnerText from "./builder.sidebar.innertext";
import genisys from "../../../data/genisys.json";
import { useState } from "react";

const BuilderSideBarInnerList = ({ item, show }) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Grid container mt={-4} ml={2}>
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

      {genisys.categories?.map((menu, index) => {
        return (
          <Accordion
            key={index}
            onChange={handleChange("panel1")}
            style={{ marginTop: "-1rem" }}
          >
            <AccordionSummary>
              <Grid container>
                <Grid item xs={3}>
                  {show && (
                    <Typography
                      display={{ xs: "none", sm: "none", md: "block" }}
                      style={{
                        color: "#334D6E",
                        fontSize: "0.9rem",
                        textAlign: "center",
                      }}
                    >
                      {menu.name}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {show && (
                  <Grid item xs={12} ml={1}>
                    <Grid container>
                      <Grid item xs={2}>
                        {menu.items?.map((item) => {
                          return (
                            <AccordionDetails key={item.id}>
                              {show && <BuilderSideBarInnerText item={item} />}
                            </AccordionDetails>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Grid>
  );
};
export default BuilderSideBarInnerList;
