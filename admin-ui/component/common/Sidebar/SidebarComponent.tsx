"use client";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps
} from "@mui/material/AccordionSummary";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ListItemIcon from "@mui/material/ListItemIcon";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import React from "react";
import Switch, { Case } from "react-switch-case";
import { IMenuListSet } from "../../../app/template/templateInterface/TemplateInterface";
import SideBarInnerList from "./SideBarInnerList";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {menuList?.map((menu) => {
        return (
          <div key={menu.id}>
            <Accordion
              onChange={handleChange("panel1")}
              style={{ marginTop: "-1rem" }}
            >
              <AccordionSummary>
                <Grid container>
                  <Grid item xs={1.5} ml={1} mr={0.6}>
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
                            style={{ fontSize: "1rem", color: "#334D6E" }}
                          />
                        </Case>
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
                      >
                        {menu.lable}
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
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={0.5}>
          <GridOnIcon style={{ fontSize: "1rem", color: "#334D6E" }} />
        </Grid>
        <Grid item xs={2.53}>
          {show && (
            <Typography
              display={{ xs: "none", sm: "none", md: "block" }}
              style={{
                color: "#334D6E",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              Grid
            </Typography>
          )}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Text in a modal
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </>
  );
};

export default SidebarComponent;
