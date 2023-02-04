import React from "react";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSession, signIn, signOut } from "next-auth/react";
import Badge from "@mui/material/Badge";
import Link from "next/link";

const HeaderComponent = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Grid container mb={1} style={{ backgroundColor: "#F2F8FF" }}>
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
            <Badge variant="dot" color="warning">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <Badge variant="dot" color="warning">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <Box
            sx={{ display: "flex", alignItems: "left", textAlign: "center" }}
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
                sx={{ width: 28, height: 28 }}
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
            <Link href={"/"} style={{textDecoration:'none',color:'black'}}>
            <MenuItem
              onClick={() => signOut()}
              style={{ height: "0.3rem", padding: "0.3rem" }}
              >
              <Typography style={{ fontSize: "0.7rem" }}>Signout</Typography>
            </MenuItem>
              </Link>
          </Menu>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
