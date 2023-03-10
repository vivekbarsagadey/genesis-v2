"use client";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

const InfoProjectComponent = ({ items }) => {
  return (
    <Grid mt={0.6} width={"98.2%"}>
      <Paper variant="outlined">
        <Grid container>
          <Grid item xs={0.12}></Grid>
          <Grid item xs={0.5}>
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={1.45}>
            <Tooltip title="View">
              <IconButton>
                <RemoveRedEyeIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={2.5}>
            <Typography variant="body2"> {items.name}</Typography>
          </Grid>
          <Grid item xs={2.7}>
            <Typography variant="body2">{items.customerName}</Typography>
          </Grid>
          <Grid item xs={4} sm={3.2}>
            <Grid container display={"flex"} alignItems={"center"}>
              <Grid item xs={12}>
                <Typography variant="body2">{items.application}</Typography>
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
      </Paper>
    </Grid>
  );
};

export default InfoProjectComponent;
