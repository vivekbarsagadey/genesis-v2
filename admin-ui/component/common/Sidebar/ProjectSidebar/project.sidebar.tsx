"use client";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import { Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { modules } from "../../../common/sidebar/projectsidebar/data/project.sidebar";
import { headerstyle as style } from "./project.style";

const ProjectSidebar = ({ show }: any) => {
  return (
    <div>
      {modules.map((module) => {
        switch (module.name) {
          case "Dashboard":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link
                  href="/dashboard"
                  passHref
                  style={{ textDecoration: "none" }}
                >
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

          case "Project":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link
                  href="/project"
                  passHref
                  style={{ textDecoration: "none" }}
                >
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

          case "Report":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link
                  href="/report"
                  passHref
                  style={{ textDecoration: "none" }}
                >
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

          case "Company":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link
                  href="/company"
                  passHref
                  style={{ textDecoration: "none" }}
                >
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
          case "User":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/user" passHref style={{ textDecoration: "none" }}>
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
        }
      })}
    </div>
  );
};
export default ProjectSidebar;
