"use client";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HeaderComponent = ({ project }: any) => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openNew, setOpenNew] = useState(false);
  const [screenName, setScreenName] = useState("");
  const handleOpenModal = () => setOpenNew(true);
  const handleCloseModal = () => setOpenNew(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const updateScreenName = (e: any) => {
    setScreenName(e.target.value);
  };
  const updateScreenData = () => {
    if (screenName !== "") {
      fetch("http://localhost:3000/api/screens", {
        method: "POST",
        body: JSON.stringify({
          name: screenName,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    }
    handleCloseModal();
    window.location.reload();
  };
  return (
    <Grid container mb={1} mt={-0.8} style={{ backgroundColor: "#f1f5f9" }}>
      <Grid item xs={12}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          py={0.5}
          px={0.5}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Stack direction="row">
            <IconButton>
              <Badge variant="dot" color="primary">
                <MailIcon style={{ fontSize: "1.2rem" }} />
              </Badge>
            </IconButton>
            <IconButton>
              <SettingsIcon style={{ fontSize: "1.2rem" }} />
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="primary">
                <NotificationsNoneIcon style={{ fontSize: "1.2rem" }} />
              </Badge>
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                textAlign: "center",
              }}
            >
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ mr: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt="Remy Sharp"
                  src="./images/avtar.png"
                />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem
                  onClick={() => signOut()}
                  style={{ height: "0.3rem", padding: "0.3rem" }}
                >
                  <Typography style={{ fontSize: "0.7rem" }}>
                    Signout
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
