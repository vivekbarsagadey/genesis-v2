"use client";
import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
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
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "34%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  borderRadius: "8px",
  p: 4,
};

const HeaderComponent = ({ project }: any) => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openNew, setOpenNew] = React.useState(false);
  const [screenName, setScreenName] = React.useState("");
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
      })
        .then((res) => res.json())
        .then((post) => {
          setScreenName("");
        })
        .catch((err) => {
          // console.log(err.message);
        });
    }
    handleCloseModal();
    window.location.reload();
  };
  return (
      <Grid container mb={1} style={{ backgroundColor: "#f1f5f9" }} pt={1}>
        <Grid item xs={0.1}></Grid>
        <Grid item xs={5.9} style={{ display: "flex", alignItems: "center" }}>
          <Grid container>
            {/* <Grid item xs={1.8} sm={3} md={1.5} mt={0.4}>
              <Button
                size="small"
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  width: "4rem",
                  height: "1.5rem",
                }}
                onClick={handleOpenModal}
              >
                New
              </Button>
            </Grid> */}
            {/* <Modal
              open={openNew}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Screen Name
                </Typography>
                <Grid container>
                  <Grid item xs={12} mt={2}>
                    <input
                      placeholder="Screen Name"
                      type="text"
                      value={screenName}
                      onChange={updateScreenName}
                      style={{
                        height: "2.5rem",
                        width: "100%",
                        outline: "none",
                        border: "1px solid #cbd5e1",
                        borderRadius: "4px",
                        paddingLeft: "0.5rem",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    mt={4}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <Button
                      variant="contained"
                      onClick={updateScreenData}
                      style={{ textTransform: "capitalize" }}
                    >
                      Create Screen
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Modal> */}
            {/* <Grid item xs={8}>
              <Typography
                mt={0.8}
                ml={1}
                style={{
                  color: "#334D6E",
                  textTransform: "capitalize",
                  fontSize: "0.9rem",
                }}
              >
                project_Name
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={6}>
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
