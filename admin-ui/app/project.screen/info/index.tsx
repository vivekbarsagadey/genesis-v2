"use client";

import React from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";

const InfoTestingComponent = ({ items }: any) => {
  console.log("itemsitemsitemsitemsitems", items);
  return (
    <div>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          background: "#f1f5f9",
          padding: "0.2rem",
        }}
        mt={0.5}
      >
        <Grid item xs={0.5}></Grid>
        <Grid item xs={0.5}>
          <Checkbox size="small" />
        </Grid>
        <Grid item xs={1.5}>
          <Tooltip title="View">
            <IconButton>
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={2.64}>
          <Typography
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            style={{ color: "#334155" }}
          >
            {" "}
            {items.name}
          </Typography>
        </Grid>
        <Grid item xs={2.45}>
          <Typography
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            style={{ color: "#334155" }}
          >
            {" "}
            {items.username}
          </Typography>
        </Grid>
        <Grid item xs={2.65}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={12}>
              <Typography fontSize={"0.8rem"} style={{ color: "#334155" }}>
                {items.website}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container>
            <Grid item xs={2.8}>
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

export default InfoTestingComponent;
