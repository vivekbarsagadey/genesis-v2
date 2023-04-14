"use client";
import AppsIcon from "@mui/icons-material/Apps";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import { Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ListItemIcon from "@mui/material/ListItemIcon";
import React from "react";
import Switch, { Case } from "react-switch-case";
import genisys from "../../../data/genisys.json";
import SideBarInnerList from "./sidebar.inner.list";
import { styled } from "@mui/material/styles";
import { Container } from "@material-ui/core";


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

const SidebarComponent = ({ toggleMenu, getComponentId }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {genisys.categories?.map((menu) => {
        return (
          <div key={menu.id}>
            <Accordion
              onChange={handleChange("panel1")}
              style={{ marginTop: "-1rem" }}
            >
              <AccordionSummary>
                <Grid container>
                  <Grid item xs={2}>
                    <ListItemIcon>
                      <Switch condition={menu.icon}>
                        <Case value="ViewSidebarIcon">
                          <ViewSidebarIcon
                            style={{ fontSize: "1.2rem", color: "#334D6E" }}
                          />
                        </Case>
                        <Case value="AppsIcon">
                          <AppsIcon
                            style={{ fontSize: "1.2rem", color: "#334D6E" }}
                          />
                        </Case>
                        <Case value="Grid4x4Icon">
                          <Grid4x4Icon
                            style={{ fontSize: "1rem", color: "#334D6E" }}
                          />
                        </Case>
                      </Switch>
                    </ListItemIcon>
                  </Grid>
                  <Grid item xs={2.2}>
                    {toggleMenu && (
                      <Typography
                        display={{ xs: "none", sm: "none", md: "block" }}
                        color={"#334D6E"}
                        fontSize={"0.9rem"}
                      >
                        {menu.name}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  {toggleMenu && (
                    <Grid item xs={12} ml={1}>
                      <Grid container>
                        <Grid item xs={2}>
                          {menu.items?.map((d) => {
                            return (
                              <AccordionDetails key={d.id}>
                                <SideBarInnerList
                                  d={d}
                                  toggleMenu={toggleMenu}
                                  getComponentId={getComponentId}
                                />
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
          </div>
        );
      })}
    </>
  );
};

export default SidebarComponent;
