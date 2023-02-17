"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReportIcon from "@mui/icons-material/Report";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";

const modules = [
  {
    id: 1,
    name: "Dashboard",
  },
  {
    id: 2,
    name: "Project",
  },
  {
    id: 3,
    name: "Report",
  },
  {
    id: 4,
    name: "Company",
  },
  {
    id: 5,
    name: "User",
  },
];

const ProjectSidebar = ({ show }: any) => {
  return (
    <div>
      {modules.map((module) => {
        switch (module.name) {
          case "Dashboard":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/company" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <DashboardIcon fontSize={"small"} />
                    </IconButton>
                    {show && (
                      <Typography
                        display={{ xs: "none", sm: "none", md: "block" }}
                        style={{
                          color: "#475569",
                          fontSize: "0.8rem",
                          fontWeight: "550",
                        }}
                      >
                        Dashboard
                      </Typography>
                    )}
                  </div>
                </Link>
              </Grid>
            );
          case "Project":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/project.screen" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <AppsIcon fontSize={"small"} />
                    </IconButton>
                    {show && (
                      <Typography
                        display={{ xs: "none", sm: "none", md: "block" }}
                        style={{
                          color: "#475569",
                          fontSize: "0.8rem",
                          fontWeight: "550",
                        }}
                      >
                        Project
                      </Typography>
                    )}
                  </div>
                </Link>
              </Grid>
            );

          case "Report":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/user" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <ReportIcon fontSize={"small"} />
                    </IconButton>
                    {show && (
                      <Typography
                        display={{ xs: "none", sm: "none", md: "block" }}
                        style={{
                          color: "#475569",
                          fontSize: "0.8rem",
                          fontWeight: "550",
                        }}
                      >
                        Report
                      </Typography>
                    )}
                  </div>
                </Link>
              </Grid>
            );
          case "Company":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/user" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <StoreIcon fontSize={"small"} />
                    </IconButton>
                    {show && (
                      <Typography
                        display={{ xs: "none", sm: "none", md: "block" }}
                        style={{
                          color: "#475569",
                          fontSize: "0.8rem",
                          fontWeight: "550",
                        }}
                      >
                        Company
                      </Typography>
                    )}
                  </div>
                </Link>
              </Grid>
            );

          case "User":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/user" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <PersonOutlineIcon fontSize={"small"} />
                    </IconButton>
                    {show && (
                      <Typography
                        display={{ xs: "none", sm: "none", md: "block" }}
                        style={{
                          color: "#475569",
                          fontSize: "0.8rem",
                          fontWeight: "550",
                        }}
                      >
                        User
                      </Typography>
                    )}
                  </div>
                </Link>
              </Grid>
            );
        }
      })}
    </div>
  );
};

export default ProjectSidebar;
