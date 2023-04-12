import { useState } from "react";
import { AccordionDetails } from "@material-ui/core";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EmailIcon from "@mui/icons-material/Email";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import LabelIcon from "@mui/icons-material/Label";
import LockClockIcon from "@mui/icons-material/LockClock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Grid, ListItemIcon, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Switch, { Case, Default } from "react-switch-case";
import SideBarInnerText from "./sidebar.inner.text";

const SideBarInnerList = ({ d, toggleMenu }) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid container mt={-2.5}>
      <Grid item xs={4}>
        {toggleMenu && (
          <ListItemIcon>
            <Switch condition={d.icon}>
              <Case value="LabelIcon ">
                <LabelIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="EmailIcon ">
                <EmailIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="LockOpenIcon">
                <LockOpenIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="LockClockIcon">
                <LockClockIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="FormatListNumberedIcon ">
                <FormatListNumberedIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="CheckBoxIcon">
                <CheckBoxIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="ArrowDropDownCircleIcon">
                <ArrowDropDownCircleIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Case value="FormatSizeIcon">
                <FormatSizeIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Case>
              <Default>
                {" "}
                <FormatColorTextIcon
                  style={{
                    fontSize: "1rem",
                    color: "#334D6E",
                    marginTop: "0.6rem",
                  }}
                />
              </Default>
            </Switch>
          </ListItemIcon>
        )}
      </Grid>
      <Grid item xs={8}>
        <AccordionDetails>
          <Typography
            onClick={() => setOpen(!open)}
            fontSize={"0.8rem"}
            color={"#334D6E"}
            style={{ cursor: "pointer", marginLeft: "1.5rem" }}
          >
            {d.label}
          </Typography>
        </AccordionDetails>

        <Grid item xs={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {d.items?.map((ele) => {
              return (
                <AccordionDetails key={ele.id}>
                  <SideBarInnerText ele={ele} />
                </AccordionDetails>
              );
            })}
          </Collapse>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBarInnerList;
