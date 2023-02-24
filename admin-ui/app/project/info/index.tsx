"use client";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    background: "#f8fafc",
    padding: "0.2rem",
  },
  typography: {
    color: "#494a49",
    fontSize: "0.73rem",
  },
});

const InfoProjectComponent = ({ items }: any) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{}} className={classes.container} mt={0.5}>
        <Grid item xs={0.04}></Grid>
        <Grid item xs={0.5}>
          <Checkbox size="small" />
        </Grid>
        <Grid item xs={1.48}>
          <Tooltip title="View">
            <IconButton>
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={2.46}>
          <Typography className={classes.typography}> {items.name}</Typography>
        </Grid>
        <Grid item xs={2.65}>
          <Typography className={classes.typography}>
            {" "}
            {items.customerName}
          </Typography>
        </Grid>
        <Grid item xs={2.59}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={12}>
              <Typography className={classes.typography}>
                {items.application}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container>
            <Grid item xs={3.8}>
              <Link href={"/testing/-1"} style={{ textDecoration: "none" }}>
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="Download">
                <IconButton>
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoProjectComponent;
