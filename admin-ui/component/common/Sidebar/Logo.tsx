import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";

interface logoProps {
  toggleMenu: boolean;
  handleMenu: () => void;
}
const Logo = ({ handleMenu, toggleMenu }: logoProps) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}
    >
      {toggleMenu && (
        <Grid
          textAlign={"left"}
          pt={1}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <img
            src="./images/genesislogo2.png"
            alt="LoginImage"
            style={{ height: "70%", width: "70%" }}
          />
        </Grid>
      )}
      <div>
        <IconButton onClick={handleMenu}>
          {toggleMenu ? <MenuIcon /> : <ListIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Logo;
