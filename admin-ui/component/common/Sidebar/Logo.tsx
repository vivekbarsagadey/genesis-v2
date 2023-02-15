import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import Link from "next/link";

interface logoProps {
  show: boolean;
  handleMenu: () => void;
}
const Logo = ({ handleMenu, show }: logoProps) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}
    >
      {show && (
        <Grid
          textAlign={"left"}
          pt={1}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <Link href={"/project"} style={{ textDecoration: "none" }}>
            <img
              src="./images/genesislogo2.png"
              alt="LoginImage"
              style={{ height: "70%", width: "70%",marginLeft:'1.7rem' }}
            />
          </Link>
        </Grid>
      )}
      <div>
        <IconButton onClick={handleMenu}>
          {show ? <MenuIcon /> : <ListIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Logo;
