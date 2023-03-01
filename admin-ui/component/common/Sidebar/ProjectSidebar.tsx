"use client";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import { Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";

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
    name: "Company",
  },
  {
    id: 4,
    name: "User",
  },
  {
    id: 5,
    name: "Report",
  },
];

const ProjectSidebar = ({ show }: any) => {
  return (
    <div>
      {modules.map((module) => {
        switch (module?.name) {
          case "Dashboard":
            return <DashboardLayOut module={module} show={show} />;
          case "Project":
            return <ProjectlayOut module={module} show={show} />;
          case "Report":
            return <ReportLayOut module={module} show={show} />;
          case "Company":
            return <CompanyLayOut module={module} show={show} />;
          case "User":
            return <UserLayOut module={module} show={show} />;
        }
      })}
    </div>
  );
};

const DashboardLayOut = ({ module, show }: any) => {
  return (
    <Grid container key={module?.id} item xs={12} alignItems="center">
      <Link href="/dashboard" style={{ textDecoration: "none" }}>
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
};

const ProjectlayOut = ({ module, show }: any) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/project" style={{ textDecoration: "none" }}>
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
};

const ReportLayOut = ({ module, show }: any) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/report" style={{ textDecoration: "none" }}>
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
};

const CompanyLayOut = ({ module, show }: any) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/company" style={{ textDecoration: "none" }}>
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
};

const UserLayOut = ({ module, show }: any) => {
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
};

export default ProjectSidebar;
