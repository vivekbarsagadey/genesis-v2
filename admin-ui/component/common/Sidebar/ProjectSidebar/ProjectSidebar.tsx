"use client";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import { Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { modules } from "./data/projectsidebar";
import { headerstyle as style } from "./projectstyle";

const ProjectSidebar = ({ show }: any) => {
  return (
    <>
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
    </>
  );
};

const DashboardLayOut = ({ module, show }) => {
  return (
    <Grid container key={module?.id} item xs={12} alignItems="center">
      <Link href="/dashboard" style={{ textDecoration: "none" }}>
        <div style={style.header}>
          <IconButton>
            <DashboardIcon fontSize={"small"} />
          </IconButton>
          {show && (
            <Typography
              display={{ xs: "none", sm: "none", md: "block" }}
              style={style.typography}
            >
              Dashboard
            </Typography>
          )}
        </div>
      </Link>
    </Grid>
  );
};

const ProjectlayOut = ({ module, show }) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/project" style={{ textDecoration: "none" }}>
        <div style={style.header}>
          <IconButton>
            <AppsIcon fontSize={"small"} />
          </IconButton>
          {show && (
            <Typography
              display={{ xs: "none", sm: "none", md: "block" }}
              style={style.typography}
            >
              Project
            </Typography>
          )}
        </div>
      </Link>
    </Grid>
  );
};

const ReportLayOut = ({ module, show }) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/report" style={{ textDecoration: "none" }}>
        <div style={style.header}>
          <IconButton>
            <ReportIcon fontSize={"small"} />
          </IconButton>
          {show && (
            <Typography
              display={{ xs: "none", sm: "none", md: "block" }}
              style={style.typography}
            >
              Report
            </Typography>
          )}
        </div>
      </Link>
    </Grid>
  );
};

const CompanyLayOut = ({ module, show }) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/company" style={{ textDecoration: "none" }}>
        <div style={style.header}>
          <IconButton>
            <StoreIcon fontSize={"small"} />
          </IconButton>
          {show && (
            <Typography
              display={{ xs: "none", sm: "none", md: "block" }}
              style={style.typography}
            >
              Company
            </Typography>
          )}
        </div>
      </Link>
    </Grid>
  );
};

const UserLayOut = ({ module, show }) => {
  return (
    <Grid key={module.id} item xs={12} container alignItems="center">
      <Link href="/user" style={{ textDecoration: "none" }}>
        <div style={style.header}>
          <IconButton>
            <PersonOutlineIcon fontSize={"small"} />
          </IconButton>
          {show && (
            <Typography
              display={{ xs: "none", sm: "none", md: "block" }}
              style={style.typography}
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
