"use client";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps
} from "@mui/material/AccordionSummary";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import React from "react";
import { Default } from "react-if";
import Switch, { Case } from "react-switch-case";
import genisys from "../../../data/genisys.json";
import BuilderSideBarInnerList from "./builder.sidebar.innerlist";
const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "44%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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

const BuilderSidebarComponent = ({ show }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {genisys.categories?.map((menu, index) => {
        return (
          <Accordion
            key={index}
            onChange={handleChange("panel1")}
            style={{ marginTop: "-1rem" }}
          >
            <AccordionSummary>
              <Grid container>
                <Grid item xs={1.5}>
                  <ListItemIcon>
                    <Switch>
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
                </Grid>
                <Grid item xs={2.2}>
                  {show && (
                    <Typography
                      display={{ xs: "none", sm: "none", md: "block" }}
                      style={{
                        color: "#334D6E",
                        fontSize: "0.9rem",
                      }}
                    ml={2}>
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
                              <BuilderSideBarInnerList
                                item={item}
                                show={show}
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
        );
      })}
    </>
  );
};

export default BuilderSidebarComponent;
