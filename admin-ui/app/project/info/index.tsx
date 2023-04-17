"use client";
import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Grid,
  IconButton,
  List,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCustomer } from "../../../services/customer.action";
import { deleteProject } from "../../../services/project.action";
import downloadJsonFile from "../../utility/json.downloder";
import IProject from "../project.model";
import Modal from "@mui/material/Modal";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Dialog from "@mui/material/Dialog";
import { AppBar, Toolbar } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import BuilderHome from "../../../builder";
import BuilderThemeComponent from "./builder.theme.select";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
type InfoCustomerComponentProps = {
  items: IProject;
};

// export const ProjectContext = React.createContext();

const InfoProjectComponent = ({ items }: InfoCustomerComponentProps) => {
  const router = useRouter();
  const [openTheme, setOpenTheme] = useState(false);

  const handleOpenTheme = () => setOpenTheme((s) => !s);
  const handleCloseTheme = () => setOpenTheme((s) => !s);

  const [openBuilder, setOpneBuilder] = useState(false);

  const handelCloseBuilder = () => {
    setOpneBuilder((s) => !s);
  };
  const handelOpenBuilder = () => {
    setOpneBuilder((s) => !s);
  };

  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };

  const openBuilderMethod = () => {
    if (items.projectJson !== null) {
      handelOpenBuilder();
    } else {
      handleOpenTheme();
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
                    <IconButton onClick={openBuilderMethod}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    {/* </Link> */}
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

      {/* Builder Theme screen  */}
        <Dialog
          fullScreen
          open={openTheme}
          onClose={handleCloseTheme}
          TransitionComponent={Transition}>
          <BuilderThemeComponent />
        </Dialog>

        {/* Builder full screen  */}
        <Dialog
          fullScreen
          open={openBuilder}
          onClose={handelCloseBuilder}
          TransitionComponent={Transition}>
          <BuilderHome id={items.id} />
        </Dialog>
      </Box>
    </>
  );
};
export default InfoProjectComponent;
