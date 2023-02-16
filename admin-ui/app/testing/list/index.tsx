"use client";
import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InfoTestingComponent from "../info";

const TestingListComponent = () => {
  const [project, setProject] = useState();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setProject(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        mt={2}
      >
        <Grid item xs={0.5}></Grid>
        <Grid item xs={0.5}>
          <Checkbox size="small" />
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <RemoveRedEyeIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <Typography
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            style={{ color: "#334155" }}
          >
            {" "}
            Project Name
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            style={{ color: "#334155" }}
          >
            Customer Name
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            style={{ color: "#334155" }}
          >
            {" "}
            Application
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            style={{ color: "#334155" }}
          >
            Action
          </Typography>
        </Grid>
      </Grid>
      <InfoTestingComponent />
    </div>
  );
};

export default TestingListComponent;
