"use client";

import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";

const ListInfo = () => {
  return (
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
      <Grid item xs={1}>
        <Link href={"/testing/-1"} style={{ textDecoration: "none" }}>
          <IconButton>
            <RemoveRedEyeIcon fontSize="small" />
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Typography
          fontWeight={"bold"}
          fontSize={"0.8rem"}
          style={{ color: "#334155" }}
        >
          {" "}
          Astrology V1.1
        </Typography>
      </Grid>
      <Grid item xs={2.9}>
        <Typography
          fontWeight={"bold"}
          fontSize={"0.8rem"}
          style={{ color: "#334155" }}
        >
          Austin
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid item xs={2}>
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={3}>
            <Typography fontSize={"0.8rem"} style={{ color: "#334155" }}>
              B2B-W
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container>
          <Grid item xs={1.5}>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton>
              <FileDownloadIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const InfoTestingComponent = () => {
  return (
    <div>
      <ListInfo />
      <ListInfo />
      <ListInfo />
      <ListInfo />
    </div>
  );
};

export default InfoTestingComponent;
