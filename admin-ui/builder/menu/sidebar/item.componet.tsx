"use client";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
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
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EmailIcon from "@mui/icons-material/Email";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import LabelIcon from "@mui/icons-material/Label";
import LockClockIcon from "@mui/icons-material/LockClock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { IMenuListSet } from "../../../app/template/templateInterface/template.interface";
import BuilderSideBarInnerText from "./builder.sidebar.innertext";

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
const ItemComponet = ({ d }: ISideBar) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <div key={d.id} style={{ display: "flex" }}>
        {/* <Grid item xs={3}>
          <ListItemIcon>
            <Switch condition={d.icon}>
              <Case value="LabelIcon">
                <LabelIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="EmailIcon">
                <EmailIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="LockOpenIcon">
                <LockOpenIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="LockClockIcon">
                <LockClockIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="FormatListNumberedIcon">
                <FormatListNumberedIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="CheckBoxIcon">
                <CheckBoxIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="ArrowDropDownCircleIcon">
                <ArrowDropDownCircleIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="FormatSizeIcon">
                <FormatSizeIcon
                  style={{
                    fontSize: "1.2rem",
                    color: "#334D6E",
                    marginTop: "0.9rem",
                  }}
                />
              </Case>
              <Case value="FormatSizeIcon">
                <FormatSizeIcon
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
        </Grid> */}
        <Grid container mb={-5}>
          <Grid item xs={9}>
            <Accordion onChange={handleChange("panel1")}>
              <AccordionSummary>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      style={{color: "#334D6E", fontSize: "0.9rem",}}>
                      {d.label}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <Grid container>
                <Grid item xs={12}>
                  {d.items?.map((ele) => {
                    return (
                      <AccordionDetails key={ele.id}>
                        <BuilderSideBarInnerText ele={ele} />
                      </AccordionDetails>
                    );
                  })}
                </Grid>
              </Grid>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ItemComponet;
