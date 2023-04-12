"use client";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import GridOnIcon from "@mui/icons-material/GridOn";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import React from "react";
import Switch, { Case, Default } from "react-switch-case";
import genisys from "../../../data/genisys.json";
import ItemComponet from "./item.componet";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AppsIcon from "@mui/icons-material/Apps";
import { IMenuListSet } from "../../../app/template/templateInterface/template.interface";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";

interface ISideBar {
  menuList: IMenuListSet[];
  toggleMenu: Boolean;
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
const BuilderSidebarComponent = ({
  menuList,
  toggleMenu,
  updateMyDragImages,
}: ISideBar) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {genisys.categories?.map((menu) => {
        return (
          <div key={menu.id} style={{ display: "flex" }}>
            <Grid item xs={1.5} mt={1.8}>
              <ListItemIcon>
                <Switch condition={menu.icon}>
                  <Case value="ViewSidebarIcon">
                    <ViewSidebarIcon
                      style={{
                        fontSize: "1.2rem",
                        color: "#334D6E",
                        marginTop: "0.9rem",
                      }}
                    />
                  </Case>
                  <Case value="AppsIcon">
                    <AppsIcon
                      style={{
                        fontSize: "1.2rem",
                        color: "#334D6E",
                        marginTop: "0.9rem",
                      }}
                    />
                  </Case>
                  <Case value="Grid4x4Icon">
                    <GridOnIcon
                      style={{
                        fontSize: "1.2rem",
                        color: "#334D6E",
                        marginTop: "0.9rem",
                      }}
                    />
                  </Case>
                  <Default>
                    <FormatColorTextIcon
                      color="primary"
                      style={{
                        fontSize: "1.2rem",
                        color: "#334D6E",
                        marginTop: "0.9rem",
                      }}
                    />
                  </Default>
                </Switch>
              </ListItemIcon>
            </Grid>
            <Grid container mb={-1.7}>
              <Grid item xs={7.6}>
                <Accordion onChange={handleChange("panel1")}>
                  <AccordionSummary>
                    <Grid container>
                      {toggleMenu && (
                        <Grid item xs={1}>
                          <Typography
                            style={{
                              color: "#334D6E",
                              fontSize: "0.9rem",
                            }}
                          >
                            {menu.name}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </AccordionSummary>
                  <Grid container>
                    <Grid item xs={12} style={{ marginTop: "-1.5rem" }}>
                      {menu.items.map((d) => {
                        return (
                          <AccordionDetails key={d.id}>
                            <Grid item xs={12}>
                              <Grid container>
                                <Grid item xs={9}>
                                  <ItemComponet d={d} toggleMenu={toggleMenu} />
                                </Grid>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Accordion>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
};
export default BuilderSidebarComponent;
