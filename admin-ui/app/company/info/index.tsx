"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteCompany } from "../../../services/company.action";
import { ICompany } from "../models/company.model";

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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const deleteCompanyHandler = async () => {
    const response = await deleteCompany(company.id);
    // route to list screen
    window.location.reload();
    router.push("/company");
  };

  const removeData = (f: any) => {
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
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                // justifyContent={"space-around"}
              >
                {company.mobile}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                // justifyContent={"space-around"} textAlign={"right"}
              >
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
                    <IconButton onClick={() => removeData(company)}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                    
                  </Tooltip>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
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
        </Paper>
      </Box>
    </>
  );
};
export default InfoCompanyComponent;
