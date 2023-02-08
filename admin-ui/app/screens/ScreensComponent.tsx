"use client";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ScreensComponent = () => {
  const [screens, setScreens] = useState();

  const fetchData = () => {
    fetch("http://localhost:3000/api/screens")
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setScreens(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid container mt={1}>
        <Grid
          item
          xs={11}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link href="/createscreens">
            <Button
              variant="contained"
              size="small"
              style={{
                textTransform: "capitalize",
                borderRadius: "20px",
                fontWeight: "bold",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Create
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={4}>
          <Typography fontSize={"1.2rem"}>Name</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography fontSize={"1.2rem"}>Update AT</Typography>
        </Grid>
      </Grid>
      {screens?.map((f) => {
        return (
          <div key={f.id}>
            <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <Typography>{f.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>{f.updatedAt}</Typography>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default ScreensComponent;
