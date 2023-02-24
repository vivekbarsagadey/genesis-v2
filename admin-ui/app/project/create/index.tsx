"use client";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

interface IApplicationType {
  id: Number;
  type: String;
  label: String;
}
const applicationType = [
  {
    id: 1,
    type: "B2C",
    label: "Business to Customer - Web",
  },
  {
    id: 2,
    type: "B2C",
    label: "Business to Customer - Mobile",
  },
  {
    id: 3,
    type: "B2B",
    label: "Business to Business - Web",
  },
  {
    id: 4,
    type: "B2B",
    label: "Business to Business - Mobile",
  },
];
const ProjectCreate = () => {
  return (
    <div>
      <Grid container mt={-0.8}>
        <Grid item xs={12}>
          <Paper style={{ padding: "3rem", height: "90.3vh" }}>
            <Grid container mb={5}>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={10}>
                <Typography fontSize={"1.3rem"}>Create New Project</Typography>
              </Grid>
            </Grid>
            <Grid container style={{ width: "100%", alignItems: "center" }}>
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

            <Grid
              container
              style={{ width: "100%", alignItems: "center" }}
              mt={2}
            >
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

            <Grid
              container
              style={{ width: "100%", alignItems: "center" }}
              mt={2}
            >
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Application</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Grid container>
                  {applicationType?.map((application: IApplicationType) => {
                    return (
                      <Grid item xs={5.8}>
                        <Grid container alignItems={"center"}>
                          <Grid item xs={2}>
                            <Checkbox />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography>{application.label}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: "100%", alignItems: "center" }}
              mt={-0.7}
            >
              <Grid item xs={0.55}></Grid>
              <Grid item xs={4.2}></Grid>
              <Grid item xs={7}></Grid>
            </Grid>
            <Grid container mt={6}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid item xs={5.6}>
                    <Link href={"/project"} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        size="medium"
                        style={{
                          borderRadius: "5px",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                      >
                        Cancel
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      size="medium"
                      style={{
                        borderRadius: "5px",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
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

export default ProjectCreate;
