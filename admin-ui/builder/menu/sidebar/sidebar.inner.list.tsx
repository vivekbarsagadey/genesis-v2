import { useState } from "react";
import { AccordionDetails, Container } from "@material-ui/core";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EmailIcon from "@mui/icons-material/Email";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import LabelIcon from "@mui/icons-material/Label";
import LockClockIcon from "@mui/icons-material/LockClock";
import { styled } from "@mui/material/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Grid, ListItemIcon, Typography, Paper } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Switch, { Case, Default } from "react-switch-case";
import SideBarInnerText from "./sidebar.inner.text";

const TypographyStyle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  cursor: "pointer",
}));
const ContainerStyle = styled(Container)(({ theme }) => ({
  marginTop: "-2rem",
}));

const SideBarInnerList = ({ d, toggleMenu, getComponentId }) => {
  const [openInnerList, setOpenInnerList] = useState(false);

  const expandInnerList = (ItemRecv) => {
    getComponentId(ItemRecv.id);

    setOpenInnerList(!openInnerList);
  };

  return (
    <ContainerStyle>
      <Grid container>
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
            <TypographyStyle>
              <Typography
                onClick={() => expandInnerList(d)}
                fontSize={"0.8rem"}
                color={"#334D6E"}
              >
                {d.label}
              </Typography>
            </TypographyStyle>
          </AccordionDetails>

          <Grid item xs={12}>
            <Collapse in={openInnerList} timeout="auto" unmountOnExit>
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
    </ContainerStyle>
  );
};
export default SideBarInnerList;
