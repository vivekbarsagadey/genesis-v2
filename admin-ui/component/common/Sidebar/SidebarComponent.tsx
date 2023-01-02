"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const modules = [
  {
    id: 1,
    name: "Company",
  },
  {
    id: 2,
    name: "User",
  },
];
const SidebarComponent = ({ show, setShow }: any) => {
  return (
    <div>
      {modules.map((module) => {
        switch (module.name) {
          case "Company":
            return (
              <Grid key={module.id} item xs={12} container alignItems="center">
                <Link href="/company" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <StoreIcon />
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
                      <PersonOutlineIcon />
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

export default SidebarComponent;
