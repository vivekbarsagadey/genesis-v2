"use client";
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import GridOnIcon from "@mui/icons-material/GridOn";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import MailIcon from "@mui/icons-material/Mail";
import Switch, { Case, Default } from "react-switch-case";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArticleIcon from "@mui/icons-material/Article";
import LockIcon from "@mui/icons-material/Lock";
import PinIcon from "@mui/icons-material/Pin";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import { fontWeight, Colors, fontSize } from "../../../themes/font";
import { sideComponent } from "./SidebarComponentStyle";
import { IMenuListSet } from "../../../app/template/templateInterface/TemplateInterface";
import SideBarInnerList from "./SideBarInnerList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
interface ISideBar {
  menuList: IMenuListSet[];
  show: Boolean;
  updateMyDragImages: any;
}
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
    border: "none",
  },
  "&:before": {
    display: "none",
    border: "none",
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));
const SidebarComponent = ({ menuList, show, updateMyDragImages }: ISideBar) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {menuList?.map((menu) => {
        return (
          <div key={menu.id} style={{ display: "flex" }}>
            <Grid item xs={1} mt={1.8} ml={1.5}>
              <ListItemIcon>
                <Switch condition={menu.icon}>
                  <Case value="ViewSidebarIcon">
                    <ViewSidebarIcon
                      style={{ fontSize: "1.2rem", color: "#334D6E" }}
                    />
                  </Case>
                  <Case value="WebAssetIcon">
                    <WebAssetIcon
                      style={{ fontSize: "1.2rem", color: "#334D6E" }}
                    />
                  </Case>
                  <Case value="GridOnIcon">
                    <GridOnIcon
                      style={{ fontSize: "1.2rem", color: "#334D6E" }}
                    />
                  </Case>
                  <Case value="KeyboardHideIcon">
                    <KeyboardHideIcon
                      style={{ fontSize: "1.2rem", color: "#334D6E" }}
                    />
                  </Case>
                  <Case value="KeyboardHideIcon">
                    <KeyboardHideIcon
                      style={{ fontSize: "1.2rem", color: "#334D6E" }}
                    />
                  </Case>
                  <Case value="FormatColorTextIcon">
                    <FormatColorTextIcon
                      style={{ fontSize: "1.2rem", color: "#334D6E" }}
                    />
                  </Case>
                  <Default>
                    <FormatColorTextIcon color="primary" />
                  </Default>
                </Switch>
              </ListItemIcon>
            </Grid>
            <Grid container mb={-1.7}>
              <Grid item xs={7.6}>
                <Accordion onChange={handleChange("panel1")}>
                  <AccordionSummary>
                    <Grid container>
                      {show && (
                        <Grid item xs={1}>
                          <Typography
                            style={{
                              color: "#334D6E",
                              fontSize: "0.9rem",
                              marginLeft: "-0.5rem",
                            }}
                          >
                            {menu.lable}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </AccordionSummary>
                  {menu.components.map((item) => {
                    return (
                      <AccordionDetails key={item.id}>
                        <SideBarInnerList
                          item={item}
                          show={show}
                          updateMyDragImages={updateMyDragImages}
                        />
                      </AccordionDetails>
                    );
                  })}
                </Accordion>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
};
export default SidebarComponent;
