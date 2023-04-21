"use client";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { countrySelect, stateSelect } from "../graphdata/graph.data";
import { Status } from "../models";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type IApplicationType = {
  id: Number;
  type: String;
  label: String;
};
const ProjectCreate = () => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const [projectName, setProjectName] = useState<String>("");
  const [customerName, setCustomerName] = useState<String>("");
  const [application, setApplication] = useState([]);
  const [projectStatus, setProjectStatus] = useState("");
  const [projectState, setProjectState] = useState("");
  const [projectCountry, setProjectCountry] = useState("");
  const [customerWeb, setCustomerWeb] = useState(false);
  const [customerMobile, setCustomerMobile] = useState(false);
  const [businessWeb, setBusinessWeb] = useState(false);
  const [businessMobile, setBusinessMobile] = useState(false);
  const [alert, setAlert] = useState(false);
  const router = useRouter();
  const [companyList, setCompanyList] = useState([]);

  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

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
  };

  const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const updateCustomerName = (e: React.SyntheticEvent, value: string[]) => {
    setCustomerName(value);
  };

  const getProjectStatusValue = (
    e: any,
    value: any
  ) => {
    setProjectStatus(value);
  };

  const updateProjectState = (
    e: any,
    value: any
  ) => {
    setProjectState(value);
  };
  const updateProjectCountry = (
    e:any,
    value: any
  ) => {
    setProjectCountry(value);
  };

  const updateMyProjectData = async () => {
    if (customerWeb) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        body: JSON.stringify({
          name: projectName,
          customerName,
          status: projectStatus,
          state: projectState,
          country: projectCountry,
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
          status: projectStatus,
          state: projectState,
          country: projectCountry,
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
          status: projectStatus,
          state: projectState,
          country: projectCountry,
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
          status: projectStatus,
          state: projectState,
          country: projectCountry,
          application: "Business to Business - Mobile",
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    }
    router.push("/project");
  };

  const updateHandler = () => {
    handleClick();
    updateMyProjectData();
  };

  return (
    <>
      <Box>
        <Paper elevation={0}>
          <Grid item xs={4} mt={5} ml={5}>
            <Typography fontSize={"1.2rem"}>Create New Project</Typography>
          </Grid>
          <Grid container padding={5} spacing={2}>
            <Grid item xs={6}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography>Project Name</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
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
            </Grid>
            <Grid item xs={6}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography>Company Name</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
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
                          InputProps={{ ...params.InputProps, type: "search" }}
                          placeholder="Company Name"
                        />
                      )}
                    />
                  </Stack>
                </Grid>
                <Link href={"/company/create"}>
                  <Tooltip title="Add Customer" arrow>
                    <IconButton>
                      <PersonAddIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography>Country</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Autocomplete
                      value={projectCountry}
                      onChange={updateProjectCountry}
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={countrySelect.map((option) => option.country)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          InputProps={{ ...params.InputProps, type: "search" }}
                          placeholder="Select Country"
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography>State</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Autocomplete
                      value={projectState}
                      onChange={updateProjectState}
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={stateSelect.map((option) => option.state)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          InputProps={{ ...params.InputProps, type: "search" }}
                          placeholder="Select State"
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography>Status</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Stack>
                    <Autocomplete
                      value={projectStatus}
                      onChange={getProjectStatusValue}
                      freeSolo
                      id="company-status"
                      disableClearable
                      size="small"
                      options={statusSet?.map((option: any) => option)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputProps={{ ...params.InputProps, type: "search" }}
                          placeholder="Select Status"
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}></Grid>

            <Grid item xs={6}>
              <Grid container display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography>Application</Typography>
                </Grid>
                <Grid item xs={0.7}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Grid container display="flex" alignItems="center">
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
                          getApplicationType("Business to Customer - Mobile")
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
                          getApplicationType("Business to Business - Mobile")
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
            {/* <Grid item xs={12} display="flex" justifyContent="flex-end">
              <Grid item xs={2}>
                <Link
                  href={"/project"}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="contained" size="small">
                    {" "}
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={1.2}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={updateMyProjectData}
                >
                  Save
                </Button>
              </Grid>
            </Grid> */}

            <Grid container mt={5}>
              <Grid item xs={8.6}></Grid>
              <Grid item xs={3.4}>
                <Grid container>
                  <Grid item xs={6}>
                    <Link href={"/project"} style={{ textDecoration: "none" }}>
                      <Button variant="contained" style={{ width: "73%" }}>
                        Cancel
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      onClick={updateHandler}
                      style={{ width: "73%" }}
                    >
                      Save
                    </Button>
                    <Snackbar
                      open={alert}
                      autoHideDuration={3000}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleClose} sx={{ width: "100%" }}>
                        Project Created Sucessfully...
                      </Alert>
                    </Snackbar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default ProjectCreate;
