"use client";
import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCustomer } from "../../../services/customer.action";
import { deleteProject } from "../../../services/project.action";
import downloadJsonFile from "../../utility/json.downloder";
import IProject from "../project.model";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type InfoCustomerComponentProps = {
  items: IProject;
};
const InfoProjectComponent = ({ items }: InfoCustomerComponentProps) => {
  const router = useRouter();
  const [openTheme, setOpenTheme] = useState(false);
  const handleOpen = () => setOpenTheme((s) => !s);
  const handleClose = () => setOpenTheme((s) => !s);
  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };
  const openBuilder = () => {
    if (items.projectJson !== null) {
      router.push(`/project/${items.id}`);
    } else {
      handleOpen();
    }
  };

  return (
    <>
      <Box mt={0.6} mr={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
                <Grid item xs={6}>
                  <IconButton>
                    <RemoveRedEyeIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" noWrap>
                {items.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" noWrap>
                {items.customerName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {items.application}
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    {/* <Link href={`/project/${items.id}`}> */}
                    <IconButton onClick={openBuilder}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    {/* </Link> */}
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="Download JSON">
                    <IconButton onClick={jsonFileDownload}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Modal
          open={openTheme}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  );
};
export default InfoProjectComponent;
