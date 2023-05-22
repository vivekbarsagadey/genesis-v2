"use client";
import { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import { Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { modules } from "../../../common/sidebar/projectsidebar/data/project.sidebar";
import { headerstyle as style } from "./project.style";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const ProjectSidebar = ({ show }) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    // <div>
    //   {modules?.map((module) => {
    //     switch (module.name) {
    //       case "Dashboard":
    //         return (
    //           <Grid key={module.id} item xs={12} container alignItems="center">
    //             <Link
    //               href="/dashboard"
    //               passHref
    //               style={{ textDecoration: "none" }}
    //             >
    //               <div style={style.header}>
    //                 <IconButton>
    //                   <DashboardIcon fontSize={"small"} />
    //                 </IconButton>
    //                 {show && (
    //                   <Typography
    //                     display={{ xs: "none", sm: "none", md: "block" }}
    //                     style={style.typography}
    //                   >
    //                     Dashboard
    //                   </Typography>
    //                 )}
    //               </div>
    //             </Link>
    //           </Grid>
    //         );
    //       // case "Report":
    //       //   return (
    //       //     <Grid key={module.id} item xs={12} container alignItems="center">
    //       //       <Link
    //       //         href="/report"
    //       //         passHref
    //       //         style={{ textDecoration: "none" }}
    //       //       >
    //       //         <div style={style.header}>
    //       //           <IconButton>
    //       //             <ReportIcon fontSize={"small"} />
    //       //           </IconButton>
    //       //           {show && (
    //       //             <Typography
    //       //               display={{ xs: "none", sm: "none", md: "block" }}
    //       //               style={style.typography}
    //       //             >
    //       //               Report
    //       //             </Typography>
    //       //           )}
    //       //         </div>
    //       //       </Link>
    //       //     </Grid>
    //       //   );
    //       // case "Project":
    //       //   return (
    //       //     <Grid key={module.id} item xs={12} container alignItems="center">
    //       //       <Link
    //       //         href="/project"
    //       //         passHref
    //       //         style={{ textDecoration: "none" }}
    //       //       >
    //       //         <div style={style.header}>
    //       //           <IconButton>
    //       //             <AppsIcon fontSize={"small"} />
    //       //           </IconButton>
    //       //           {show && (
    //       //             <Typography
    //       //               display={{ xs: "none", sm: "none", md: "block" }}
    //       //               style={style.typography}
    //       //             >
    //       //               Project
    //       //             </Typography>
    //       //           )}
    //       //         </div>
    //       //       </Link>
    //       //     </Grid>
    //       //   );

    //       // case "Company":
    //       //   return (
    //       //     <Grid key={module.id} item xs={12} container alignItems="center">
    //       //       <Link
    //       //         href="/company"
    //       //         passHref
    //       //         style={{ textDecoration: "none" }}
    //       //       >
    //       //         <div style={style.header}>
    //       //           <IconButton>
    //       //             <StoreIcon fontSize={"small"} />
    //       //           </IconButton>
    //       //           {show && (
    //       //             <Typography
    //       //               display={{ xs: "none", sm: "none", md: "block" }}
    //       //               style={style.typography}
    //       //             >
    //       //               Company
    //       //             </Typography>
    //       //           )}
    //       //         </div>
    //       //       </Link>
    //       //     </Grid>
    //       //   );
    //       // case "User":
    //       //   return (
    //       //     <Grid key={module.id} item xs={12} container alignItems="center">
    //       //       <Link href="/user" passHref style={{ textDecoration: "none" }}>
    //       //         <div style={style.header}>
    //       //           <IconButton>
    //       //             <PersonOutlineIcon fontSize={"small"} />
    //       //           </IconButton>
    //       //           {show && (
    //       //             <Typography
    //       //               display={{ xs: "none", sm: "none", md: "block" }}
    //       //               style={style.typography}
    //       //             >
    //       //               User
    //       //             </Typography>
    //       //           )}
    //       //         </div>
    //       //       </Link>
    //       //     </Grid>
    //       //   );
    //     }
    //   })}
    // </div>
    <Box>
      <List component="nav" aria-label="main mailbox folders">
        <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DashboardIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Dashboard
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/report" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <ReportIcon fontSize={"small"} />
            </ListItemIcon>{" "}
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Report
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/project" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <AppsIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Project
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/company" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <StoreIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
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
            <ListItemIcon>
              <SupportAgentIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
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
