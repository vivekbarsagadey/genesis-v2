"use client";
import React from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles({
  genesislogo: {
    backgroundImage: `url(${"./images/genesislogo.png"})`,
    backgroundRepeat: "no-repeat",
    height: "10vh",
  },
  background_style: {
    backgroundImage: `url(${"./images/createbackground.png"})`,
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
  },
  createbtn: {
    textTransform: "capitalize",
    borderRadius: "20px",
    fontWeight: "bold",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
});

const ListProjectComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.background_style}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={10} className={classes.genesislogo} mt={5}></Grid>
        <Grid item xs={1} mt={5.5}>
          <Link href={"/create_ui"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              className={classes.createbtn}
            >
              Create
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListProjectComponent;
