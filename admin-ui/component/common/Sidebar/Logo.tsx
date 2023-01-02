import React from 'react'
import { Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from "@mui/icons-material/List";

interface logoProps {
    show:boolean,
    handleMenu :()=>void
}
const Logo = ({handleMenu, show}:logoProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", paddingBottom:"1rem" }}>
                    {show && (
                      <Grid textAlign={"left"} pl={0.5} pt={1} display={{ xs: "none", sm: "none", md: "block" }}
                      >
                        {" "}
                        <img src="./images/comfortzone.png"   alt="LoginImage" style={{ height: "90%", width: "90%"}}  />
                      </Grid>
                    )}
                    <IconButton   onClick={handleMenu}>
                      {show ? <MenuIcon /> : <ListIcon />}
                    </IconButton>
                  </div>
  )
}

export default Logo