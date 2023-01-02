import React, { useEffect, useState } from "react";
import IUser from "../user.model";
import IUserComponentProps from "../user.props";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { deleteUser } from "../services/UserServices";
import { useRouter } from "next/navigation";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  typography: {
    display: "flex",
    color: "#64748b",
    fontWeight: "500",
    fontSize: "0.83rem",
    textAlign: "left",
  },
  container: {
    textAlign: "center",
    background: "#f8fafc",
    paddingLeft: "0.5rem",
    width: "98.5%",
  },
});

interface FilterComponentProps extends IUserComponentProps {
  f: IUser;
  show: boolean;
}

const InfoUserComponent = ({ f, show }: FilterComponentProps) => {
  const [checked, setChecked] = useState(show);
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setChecked(show);
  }, [show]);

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
  const getRemove = async (item: any) => {
    await deleteUser(item);
    router.push("/user");
  };
  const removeData = (f: any) => {
    getRemove(f);
    handleClick();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box px={3}  style={{ marginTop: "0.4rem"}}>
        <Grid
          container
          className="classes.container" style={{backgroundColor:"#fff"}}
        >
          <Grid
            item
            xs={0.8}
            style={{ display: "flex", justifyContent: "left" }}
          >
            <Checkbox checked={checked} onChange={handleChange} size="small" />
          </Grid>
          <Grid item xs={2.2} style={{ display: "flex", alignItems: "center" }}>
            <Typography className={classes.typography} noWrap>
              {f.firstName}
            </Typography>
          </Grid>
          <Grid item xs={2.12} style={{ display: "flex", alignItems: "center" }}>
            <Typography className={classes.typography} noWrap>
              {f.lastName}
            </Typography>
          </Grid>
          <Grid item xs={2.6} style={{ display: "flex", alignItems: "center" }}>
            <Typography className={classes.typography} noWrap>
              {f.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography className={classes.typography} noWrap>
              {f.mobile}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2.2}
            sm={2.2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={7.52}>
                <Typography
                  noWrap
                  style={{ textAlign: "left" }}
                  className={classes.typography}
                >
                  {f.address}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Stack spacing={1} sx={{ width: "100%" }}>
                  {checked && (
                    <Tooltip title="Delete" arrow>
                      <IconButton onClick={() => removeData(f)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  )}
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
                </Stack>
              </Grid>
              <Grid item xs={1.3}>
                <Link href={`/user/${f._id}`}>
                  <Tooltip title="Edit" arrow>
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InfoUserComponent;
