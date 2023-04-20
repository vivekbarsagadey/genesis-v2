"use client";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import { useState } from "react";
import { headerstyle as style } from "./project.style";

interface sidebarProps {
  toggleMenu: boolean;
}

const ProjectSidebar = ({ toggleMenu }:sidebarProps) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <Box style={{height:'89vh'}}>
      <List component="nav" aria-label="main mailbox folders">
        <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
          <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemIcon><DashboardIcon fontSize={"small"} /></ListItemIcon>
            {toggleMenu && (
              <Typography display={{ xs: "none", sm: "none", md: "block" }} style={style.typography}>
                Dashboard
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/report" passHref style={{ textDecoration: "none" }}>
          <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
            <ListItemIcon><ReportIcon fontSize={"small"} /></ListItemIcon>{" "}
            {toggleMenu && (
              <Typography display={{ xs: "none", sm: "none", md: "block" }} style={style.typography}>
                Report
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/project" passHref style={{ textDecoration: "none" }}>
          <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon> <AppsIcon fontSize={"small"} /></ListItemIcon>
            {toggleMenu && (
              <Typography display={{ xs: "none", sm: "none", md: "block" }} style={style.typography}>
                Project
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/company" passHref style={{ textDecoration: "none" }}>
          <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon><StoreIcon fontSize={"small"} /></ListItemIcon>
            {toggleMenu && (
              <Typography display={{ xs: "none", sm: "none", md:"block"}}style={style.typography}>
                Company
              </Typography>
            )}
          </ListItemButton>
        </Link>
        <Link href="/customer" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon><SupportAgentIcon fontSize={"small"} /></ListItemIcon>
            {toggleMenu && (
              <Typography display={{ xs: "none", sm: "none", md: "block" }} style={style.typography}>
                Customer
              </Typography>
            )}
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
};
export default ProjectSidebar;
