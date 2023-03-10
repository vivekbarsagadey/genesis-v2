"use client";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { applicationType } from "../../../component/common/data/project/application.type";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
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
  const [companyList, setCompanyList] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/companies`
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setCompanyList(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  const getApplicationType = (_TypeR) => {
    setApplication(_TypeR.label);
  };
  const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const updateCustomerName = (e: React.SyntheticEvent, value: string[]) => {
    console.log("value >>", value);
    setCustomerName(value);
  };

  const updateMyProjectData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
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
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Grid container>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={11}>
                <Grid container mb={5}>
                  <Grid item xs={10} mt={5}>
                    <Typography fontSize={"1.3rem"}>
                      Create New Project
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container mt={3.5}>
                  <Grid item xs={3.3} mt={3}>
                    <Typography>Project Name</Typography>
                  </Grid>
                  <Grid item xs={0.7} mt={4}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6.5} mt={3}>
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
                <Grid container mt={3}>
                  <Grid item xs={3.3} mt={1}>
                    <Typography>Company Name </Typography>
                  </Grid>
                  <Grid item xs={0.7} mt={1}>
                    <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={6.5}>
                    <Stack>
                      <Autocomplete
                        size="small"
                        onChange={updateCustomerName}
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={companyList?.map((company) => company.name)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                            placeholder="Customer Name"
                          />
                        )}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Grid container mt={3}>
                  <Grid item xs={3.3} mt={3}>
                    <Typography>Application</Typography>
                  </Grid>
                  <Grid item xs={0.6} mt={3}>
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
                        <Link href={"/project"} passHref>
                          <Button variant="contained" size="small">
                            Cancel
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={updateMyProjectData}
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
const ApplicationDetails = ({ application, getApplicationType }) => {
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
