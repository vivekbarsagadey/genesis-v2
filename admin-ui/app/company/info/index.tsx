"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteCompany } from "../../../services/company.action";
import { ICompany } from "../models/company.model";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 325,
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop: 1,
  paddingLeft: 2,
  paddingRight: 1,
  paddingBottom: 2,
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type InfoCompanyComponentProps = {
  company: ICompany;
};
const InfoCompanyComponent = ({ company }: InfoCompanyComponentProps) => {
  const router = useRouter();
  const [alert, setAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const deletePopupOpen = () => setOpen(true);

  const handleCloseDelete = () => setOpen(false);
  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  const deleteCompanyHandler = async () => {
    const response = await deleteCompany(company.id);
    // router.push("/company");
  };
  const removeData = (f: any) => {
    window.location.reload();
    deleteCompanyHandler(f);
    handleClick();
  };
  return (
    <>
      <Box mt={0.6} mr={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={1} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="body2" noWrap>
                {company.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" noWrap>
                {company.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap display={"flex"}>
                {company.mobile}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap display={"flex"}>
                {company.address}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={5} ml={1}>
                  <Tooltip title="Edit">
                    <Link href={`/company/${company.id}`}>
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="Delete">
                    <IconButton onClick={deletePopupOpen}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Snackbar
                    open={alert}
                    autoHideDuration={8000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Items Deleted Sucessfully...
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleCloseDelete}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-description"
                  sx={{ mt: 1 }}
                  fontSize="0.9rem"
                >
                  Are you sure you want to delete the selected company?
                </Typography>
                <Grid container mt={2}>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ height: "4vh" }}
                      onClick={() => handleCloseDelete()}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => removeData(company)}
                      sx={{ height: "4vh" }}
                    >
                      Ok
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Modal>
        </Paper>
      </Box>
    </>
  );
};
export default InfoCompanyComponent;
