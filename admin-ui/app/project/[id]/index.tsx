"use client";
import React from "react";
import { Grid, Typography, Button, TextField, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { applicationType } from "../../../config";
import { ProjectEditPageStyle as style } from "./ProjectEditPageStyle";

interface IApplicationType {
  id: Number;
  type: string;
  label: string;
}

const ProjectCreate = () => {
  return (
    <div>
      <Grid container mt={-0.8}>
        <Grid item xs={12}>
          <Paper style={style.paper}>
            <Grid container mb={5}>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={10}>
                <Typography fontSize={"1.3rem"}>Edit Project</Typography>
              </Grid>
            </Grid>
            <Grid container style={style.container}>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Project Name</Typography>
              </Grid>
              <Grid item xs={0.7}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6.5}>
                <TextField
                  id="outlined-basic"
                  placeholder="Create Project Name"
                  size={"small"}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container style={style.container} mt={2}>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Customer Name </Typography>
              </Grid>
              <Grid item xs={0.7}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6.5}>
                <TextField
                  placeholder="Create Customer Name"
                  id="outlined-basic"
                  size={"small"}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container style={style.container} mt={2}>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Application</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Grid container>
                  {applicationType?.map((item, index) => {
                    return (
                      <Grid item xs={5.8} key={index}>
                        <ApplicationTypeDetails item={item} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>

            <Grid container style={style.container} mt={-0.7}>
              <Grid item xs={0.55}></Grid>
              <Grid item xs={4.2}></Grid>
              <Grid item xs={7}></Grid>
            </Grid>
            <Grid container mt={6}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid item xs={5.6}>
                    <Link href={"/project"} passHref >
                      <Button
                        variant="contained"
                        size="medium"
                        style={style.cancelbtn}
                      >
                        Cancel
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      size="medium"
                      style={style.cancelbtn}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const ApplicationTypeDetails = ({ item }) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={2}>
        <Checkbox />
      </Grid>
      <Grid item xs={10}>
        <Typography>{item.label}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectCreate;
