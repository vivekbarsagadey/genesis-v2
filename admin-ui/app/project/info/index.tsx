<<<<<<< HEAD
'use client';

import EditIcon from '@mui/icons-material/Edit';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  Card,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import BuilderHome from '../../../builder';
import downloadJsonFile from '../../utility/json.downloader';
import BuilderThemeComponent from './builder.theme.select';
import { IProjects } from '../models';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="up" ref={ref} {...props} />
);
type InfoCustomerComponentProps = {
  items: IProjects;
=======
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
import FileDownloadIcon from '@mui/icons-material/FileDownload';

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
>>>>>>> dev
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

<<<<<<< HEAD
// export const ProjectContext = React.createContext();

function InfoProjectComponent({ items }: InfoCustomerComponentProps) {
  const [openTheme, setOpenTheme] = useState(false);
  const [localStoreData, setLocalStoreData] = useState({});
  const handleOpenTheme = () => setOpenTheme((s) => !s);
  const handleCloseTheme = () => setOpenTheme((s) => !s);

  const [openBuilder, setOpenBuilder] = useState(false);

  const handelCloseBuilder = () => {
    setOpenBuilder((s) => !s);
  };
  const handelOpenBuilder = () => {
    setOpenBuilder((s) => !s);
  };

  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };

  useEffect(() => {
    const projectJsonData = JSON.parse(
      localStorage.getItem('projectJsonData') || '{}'
    );
    if (projectJsonData) {
      setLocalStoreData(projectJsonData);
    }
  }, []);

  console.log('localStoreData>? ???', localStoreData);
  console.log('items>? ???', items);

  const openBuilderMethod = (_idRecv) => {
    if (items.projectJson !== null || _idRecv === localStoreData?.projectId) {
      handelOpenBuilder();
    } else {
      handleOpenTheme();
    }
  };

  return (
    <>
      <Box mt={0.6} mr={2}>
        <Card elevation={0}>
          <Grid container>
            <Grid item xs={0.6} display="flex" justifyContent="flex-end">
              <Grid container ml={1}>
                <Grid item xs={1}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={1.7}>
              <Typography variant="body2" noWrap>
                <Moment format="DD MMM YYYY">{items.createdAt}</Moment>
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {items.name}
              </Typography>
            </Grid>

            <Grid item xs={2.5}>
              <Typography variant="body2" noWrap>
                {items.customerName}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {items.application}
              </Typography>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="space-around">
              <Typography variant="body2" noWrap>
                {items.status}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container display="flex" justifyContent="center" ml={2}>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => openBuilderMethod(items.id)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={1}>
=======
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
>>>>>>> dev
                  <Tooltip title="Download JSON">
                    <IconButton onClick={jsonFileDownload}>
                      <FileDownloadIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
<<<<<<< HEAD
        </Card>
        {/* Builder Theme screen  */}
        <Dialog
          fullScreen
          open={openTheme}
          onClose={handleCloseTheme}
          TransitionComponent={Transition}
        >
          <BuilderThemeComponent
            handleCloseTheme={handleCloseTheme}
            id={items.id}
          />
        </Dialog>
        {/* Builder full screen  */}
        <Dialog
          fullScreen
          open={openBuilder}
          onClose={handelCloseBuilder}
          TransitionComponent={Transition}
        >
          <BuilderHome id={items.id} localStoreData={localStoreData} />
        </Dialog>
      </Box>
      <Divider style={{ width: '98.5%' }} />
    </>
  );
}
=======
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
>>>>>>> dev
export default InfoProjectComponent;
