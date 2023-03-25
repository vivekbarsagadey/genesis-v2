"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createCompany } from "../../../services/company.action";
import Autocomplete from "@mui/material/Autocomplete";
import { Status } from "../models";

const CompanyCreateComponent = () => {
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyFoundationYear, setCompanyFoundationYear] = useState("");
  const [companyStatus, setCompanyStatus] = useState("NEW");
  const router = useRouter();

  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  // POST call
  const updateMyCompanyData = async () => {
    try {
      const body = {
        firstName: ownerFirstName,
        lastName: ownerLastName,
        name: companyName,
        email: companyEmail,
        mobile: companyPhone,
        address: companyAddress,
        website: companyWebsite,
        foundationYear: companyFoundationYear,
        status: companyStatus,
      };
      //  console.log("this is body", body)
      await createCompany(body);
      await router.push("/company");
    } catch (error) {
      console.error(error);
    }
  };

  const updateOwnerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerFirstName(e.target.value);
  };
  const updateOwnerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerLastName(e.target.value);
  };
  const updateCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };
  const updateCompanyEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyEmail(e.target.value);
  };
  const updateCompanyPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyPhone(e.target.value);
  };
  const updateCompanyAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyAddress(e.target.value);
  };
  const updateCompanyWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyWebsite(e.target.value);
  };
  const updateCompanyFoundationYear = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyFoundationYear(e.target.value);
  };

  const getCompanyStatusValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCompanyStatus(value);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Create New Company</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>First Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="first-name"
                  placeholder="First Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={ownerFirstName}
                  onChange={updateOwnerFirstName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Last Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="last-name"
                  placeholder="Last Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={ownerLastName}
                  onChange={updateOwnerLastName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Company Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="company-name"
                  placeholder="Company Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyName}
                  onChange={updateCompanyName}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Email</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  placeholder="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyEmail}
                  onChange={updateCompanyEmail}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Phone</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  placeholder="Phone"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyPhone}
                  onChange={updateCompanyPhone}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="address"
                  placeholder="Address"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyAddress}
                  onChange={updateCompanyAdress}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Website</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="website"
                  placeholder="Website"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyWebsite}
                  onChange={updateCompanyWebsite}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={4}>
                <Typography>Company Status</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  value={companyStatus}
                  onChange={getCompanyStatusValue}
                  freeSolo
                  id="company-status"
                  disableClearable
                  size="small"
                  options={statusSet?.map((option: any) => option)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container mt={5}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={7}>
                      <Link href={"/company"}>
                        <Button variant="contained" size="small">
                          Cancel
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={2} ml={1}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={updateMyCompanyData}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyCreateComponent;
