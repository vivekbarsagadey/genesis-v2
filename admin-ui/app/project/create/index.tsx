"use client";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { applicationType } from "../../../component/common/data/project/application.type";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
type IApplicationType = {
  id: Number;
  type: String;
  label: String;
};
const ProjectCreate = () => {
  const [projectName, setProjectName] = useState<String>("");
  const [customerName, setCustomerName] = useState<String>("");
  const [application, setApplication] = useState([]);

  const [customerWeb, setCustomerWeb] = useState(false);
  const [customerMobile, setCustomerMobile] = useState(false);
  const [businessWeb, setBusinessWeb] = useState(false);
  const [businessMobile, setBusinessMobile] = useState(false);

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
  const getApplicationType = (typeRecv: string) => {
    if (typeRecv === "Business to Customer - Web") {
      setCustomerWeb((s) => !s);
    }
    if (typeRecv === "Business to Customer - Mobile") {
      setCustomerMobile((s) => !s);
    }
    if (typeRecv === "Business to Business - Web") {
      setBusinessWeb((s) => !s);
    }
    if (typeRecv === "Business to Business - Mobile") {
      setBusinessMobile((s) => !s);
    }
    // setApplication([...application, app]);
  };

  const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const updateCustomerName = (e: React.SyntheticEvent, value: string[]) => {
    setCustomerName(value);
  };

  const updateMyProjectData = async () => {
    
    if (customerWeb) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        body: JSON.stringify({
          name: projectName,
          customerName,
          application: "Business to Customer - Web",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    }
    if (customerMobile) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        body: JSON.stringify({
          name: projectName,
          customerName,
          application: "Business to Customer - Mobile",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    }
    if (businessWeb) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        body: JSON.stringify({
          name: projectName,
          customerName,
          application: "Business to Business - Web",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    }
    if (businessMobile) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        body: JSON.stringify({
          name: projectName,
          customerName,
          application: "Business to Business - Mobile",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    }

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
                  <Link href={"/company/create"}>
                    <Button>+Add Company</Button>
                  </Link>
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
                      <Grid container alignItems={"center"}>
                        <Grid item xs={2}>
                          <Checkbox
                            value={customerWeb}
                            onClick={() =>
                              getApplicationType("Business to Customer - Web")
                            }
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Typography>Business to Customer - Web</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Checkbox
                            value={customerMobile}
                            onClick={() =>
                              getApplicationType(
                                "Business to Customer - Mobile"
                              )
                            }
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Typography>Business to Customer - Mobile</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Checkbox
                            value={businessWeb}
                            onClick={() =>
                              getApplicationType("Business to Business - Web")
                            }
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Typography>Business to Business - Web</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Checkbox
                            value={businessMobile}
                            onClick={() =>
                              getApplicationType(
                                "Business to Business - Mobile"
                              )
                            }
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Typography>Business to Business - Mobile</Typography>
                        </Grid>
                      </Grid>
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

export default ProjectCreate;
