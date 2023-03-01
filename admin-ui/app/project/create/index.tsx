"use client";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { applicationType } from "../../../config/applicationType";
import { CreateStyle as style } from "./CreateStyle";
interface IApplicationType {
  id: Number;
  type: String;
  label: String;
}
const ProjectCreate = () => {
  const [projectName, setProjectName] = useState<String>("");
  const [customerName, setCustomerName] = useState<String>("");
  const [application, setApplication] = useState<String>("");
  const router = useRouter();
  const getApplicationType = (_TypeR: any) => {
    setApplication(_TypeR.label);
  };
  const updateProjectName = (e: any) => {
    setProjectName(e.target.value);
  };
  const updateCustomerName = (e: any) => {
    setCustomerName(e.target.value);
  };

  const updateMyProjectData = async () => {
    await fetch("http://localhost:3000/api/projects", {
      method: "POST",
      body: JSON.stringify({
        name: projectName,
        customerName,
        application,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    router.push("/project");
  };

  return (
    <div>
      <Grid container mt={-0.8}>
        <Grid item xs={12}>
          <Paper style={style.paper}>
            <Grid container>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={11}>
                <Grid container mb={5}>
                  <Grid item xs={10}>
                    <Typography fontSize={"1.3rem"}>
                      Create New Project
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container style={style.container}>
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
                      value={projectName}
                      onChange={updateProjectName}
                    />
                  </Grid>
                </Grid>

                <Grid container style={style.container}>
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
                      value={customerName}
                      onChange={updateCustomerName}
                    />
                  </Grid>
                </Grid>

                <Grid container style={style.container}>
                  <Grid item xs={3.3}>
                    <Typography>Application</Typography>
                  </Grid>
                  <Grid item xs={0.6}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Grid container>
                      {applicationType?.map(
                        (application: IApplicationType, index) => {
                          return (
                            <Grid item xs={5.8} key={index}>
                              <ApplicationDetails
                                application={application}
                                getApplicationType={getApplicationType}
                              />
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container mt={6}>
                  <Grid item xs={8.3}></Grid>
                  <Grid item xs={3}>
                    <Grid container>
                      <Grid item xs={5.6}>
                        <Link href={"/project"} passHref legacyBehavior>
                          <Button
                            variant="contained"
                            size="medium"
                            style={style.btn}
                          >
                            Cancel
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          size="medium"
                          style={style.btn}
                          onClick={updateMyProjectData}
                          disabled={
                            !projectName || !customerName || !application
                          }
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
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

const ApplicationDetails = ({ application, getApplicationType }: any) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={2}>
        <Checkbox onClick={() => getApplicationType(application)} />
      </Grid>
      <Grid item xs={10}>
        <Typography>{application.label}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectCreate;
