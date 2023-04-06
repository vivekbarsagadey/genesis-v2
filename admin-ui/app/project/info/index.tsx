"use client";
import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";

import downloadJsonFile from "../../utility/project/json.downloder";

type CompanyComponentProps = {
  items: any;
};
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

const InfoProjectComponent = ({ items }: CompanyComponentProps) => {
  const router = useRouter();
  const [openThemeSelector, setOpenThemeSelector] = useState<boolean>(false);

  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };
  const editProject = () => {
    const data = items.projectJson;

    if (data !== null) {
      router.push(`/project/${items.id}`);
    } else {
      setOpenThemeSelector((s) => !s);
    }
  };
  const handleClose = () => {
    setOpenThemeSelector((s) => !s);
  };

  return (
    <Box mr={2} mt={0.6}>
      <Paper variant="outlined">
        <Grid container>
          <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
            <Grid container ml={1}>
              <Grid item xs={4}>
                <IconButton>
                  <CheckBoxOutlineBlankIcon fontSize="small" />
                </IconButton>
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
          <Grid item xs={2} mr={7}>
            <Typography variant="body2" noWrap>
              {items.application}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Grid container>
              <Grid item xs={4}>
                <Tooltip title="Edit">
                  <IconButton onClick={editProject}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title="Download JSON">
                  <IconButton onClick={jsonFileDownload}>
                    <FileDownloadIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Modal
        open={openThemeSelector}
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
  );
};

export default InfoProjectComponent;
