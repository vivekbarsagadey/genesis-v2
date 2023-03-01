"use client";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { InfoStyle as style } from "./InfoStyle";

const InfoProjectComponent = ({ items }: any) => {
  return (
    <div>
      <Grid container style={style.container}>
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
        <Grid item xs={2.5}>
          <Typography style={style.typography}> {items.name}</Typography>
        </Grid>
        <Grid item xs={2.65}>
          <Typography style={style.typography}>
            {" "}
            {items.customerName}
          </Typography>
        </Grid>
        <Grid item xs={2.7}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={12}>
              <Typography style={style.typography}>
                {items.application}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container>
            <Grid item xs={3.8}>
              <Link href={"/project/-1"} passHref>
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
