"use client";
import React from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles({
  background_genesis1: {
    backgroundImage: `url(${"./images/genesis1.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
    position: "relative",
  },
  genesislogo: {
    height: "300px",
    width: "290px",
    position: "relative",
  },
  genesislogo1: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-50px 0 0 -50px",
  },
  background_genesis2: {
    backgroundImage: `url(${"./images/genesis2.png"})`,
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
  },
  btn: {
    display: "flex",
    height: "40vh",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  createwebbtn: {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    width: "40vh",
    height: "6.5vh",
    textTransform: "capitalize",
  },
  createmobilebtn: {
    background: "#7B90AC",
    paddingLeft: "2.1rem",
    paddingRight: "2rem",
    height: "6.5vh",
    textTransform: "capitalize",
    width: "40vh",
    "&:hover": {
      background: "#94a3b8",
    },
  },
});
const CreateProjectComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={4} className={classes.background_genesis1}>
          <Grid container className={classes.genesislogo}>
            <Grid item xs={12} className={classes.genesislogo1}>
              <img
                src="./images/genesislogo.png"
                alt="LoginImage"
                style={{ height: "9vh" }}
              />
              <Grid container className={classes.btn} mt={10}>
                <Grid item xs={12}>
                  <Button variant="contained" className={classes.createwebbtn}>
                    Create for Web
                  </Button>
                </Grid>
                <Grid item xs={12} mt={2}>
                  <Link
                    href={"/create_project"}
                    style={{ textDecoration: "none" }} >
                    <Button
                      variant="contained"
                      className={classes.createmobilebtn}
                    >
                      Create for Mobile
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.background_genesis2}></Grid>
      </Grid>
    </div>
  );
};

export default CreateProjectComponent;
