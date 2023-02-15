"use client";
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    backgroundColor: "#0f172a",
  },
  textfield: {
    display: "flex",
    height: "30vh",
    width: "42vh",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  search: {
    border: "none",
    height: "7vh",
    outline: "none",
  },
  box: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
  },
  blankcard: {
    background: "white",
    height: "25vh",
    width: "36.6vh",
  },
  typography: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "0.8rem",
    color: "#B2B5BA",
  },
  projectname: {
    color: "#97A7BD",
  },
  img: {
    height: "25vh",
    width: "36.6vh",
  },
});
const CreateProjectComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  // let project Name be string initially , later will change to array
  const [name, setName] = useState("");
  const updateProjectName = (e: any) => {
    setName(e.target.value);
  };
  const routerToTemplate = () => {
    if (name !== "") {
      router.push("/template");
      fetch("http://localhost:3000/api/projects", {
        method: "POST",
        body: JSON.stringify({
          name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((post) => {
          setName("");
        })
        .catch((err) => {
          // console.log(err.message);
        });
    }
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={4} className={classes.background_genesis1}>
          <Grid container className={classes.genesislogo}>
            <Grid item xs={12} className={classes.genesislogo1}>
              <img src="./images/genesislogo.png" alt="image not found" />
              <Grid container className={classes.textfield} mt={12}>
                <Grid item xs={12}>
                  <Typography className={classes.projectname}>
                    Project Name
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item xs={12} mt={1}>
                    <Box pl={1} className={classes.box}>
                      <input
                        type="text"
                        placeholder="Project Name"
                        className={classes.search}
                        value={name}
                        onChange={updateProjectName}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.background_genesis2}>
          <Grid container mt={10}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid item xs={1.65}>
                <Typography
                  display={"flex"}
                  justifyContent={"flex-end"}
                  fontSize={"1rem"}
                  color={"#cbd5e1"}
                >
                  Template
                </Typography>
              </Grid>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={0.85}>
                  <div></div>
                </Grid>
                <Grid item xs={3.5} onClick={routerToTemplate}>
                  {/* <Link href={"/template"} style={{ textDecoration: "none" }}> */}
                  <div className={classes.blankcard}></div>
                  {/* </Link> */}
                  <Typography className={classes.typography} mt={3}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={3.5}>
                  <div>
                    <img
                      src="./images/cardimage1.png"
                      alt="image not found"
                      style={{ height: "25vh", width: "36.6vh" }}
                    />
                  </div>
                  <Typography className={classes.typography} mt={2}>
                    Bold & Bright
                  </Typography>
                </Grid>
                <Grid item xs={3.5}>
                  <div>
                    <img
                      src="./images/cardimage2.png"
                      alt="image not found"
                      className={classes.img}
                    />
                  </div>
                  <Typography className={classes.typography} mt={2}>
                    Profile
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={0.8}>
                  <div></div>
                </Grid>
                <Grid item xs={3.5}>
                  <div>
                    <img
                      src="./images/cardimage3.png"
                      alt="image not found"
                      className={classes.img}
                    />
                  </div>
                  <Typography className={classes.typography} mt={2}>
                    Mobile-s
                  </Typography>
                </Grid>
                <Grid item xs={3.5}>
                  <div>
                    <img
                      src="./images/cardimage4.png"
                      alt="image not found"
                      className={classes.img}
                    />
                  </div>
                  <Typography className={classes.typography} mt={2}>
                    Bold & Bright
                  </Typography>
                </Grid>
                <Grid item xs={3.5}>
                  <div>
                    <img
                      src="./images/cardimage5.png"
                      alt="image not found"
                      className={classes.img}
                    />
                  </div>
                  <Typography className={classes.typography} mt={2}>
                    Profile
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default CreateProjectComponent;
