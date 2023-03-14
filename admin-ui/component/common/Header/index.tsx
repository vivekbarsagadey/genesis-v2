"use client";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { headerstyle as style } from "./header.style";

const HeaderComponent = ({ project }) => {
  const { data: session } = useSession();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(openMenu);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <Grid container style={style.headercontainer}>
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
              <MailIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <SettingsIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon fontSize="small" />
            </IconButton>
            <Box style={style.box}>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ mr: 2 }}
                aria-haspopup="true"
              >
                <Avatar
                  style={style.avtar}
                  alt="Remy Sharp"
                  src="./images/avtar.png"
                />
              </IconButton>
            </Box>
            <Menu
              anchorEl={openMenu}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link href={"/"} style={style.link}>
                <MenuItem onClick={() => signOut()} style={style.menu}>
                  <Typography variant="subtitle1">Signout</Typography>
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
