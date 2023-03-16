"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createCompany } from "../../../services/company.action";

const CompanyCreateComponent = () => {
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyFoundationYear, setCompanyFoundationYear] = useState("");
  const router = useRouter();

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

  return (
    <>
      <Grid item xs={3} display={"flex"} justifyContent={"flex-end"} mt={2}>
        <Typography fontSize={"1.2rem"}>Create New Company</Typography>
      </Grid>
      <Grid container mt={5}>
        <Grid item lg={1} xs={1} sm={1}></Grid>
        <Grid item lg={5.5} xs={12} sm={5.5}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography noWrap>First Name</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="First Name"
                size={"small"}
                fullWidth
                value={ownerFirstName}
                onChange={updateOwnerFirstName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5.5} xs={12} sm={5.5} mt={1}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography noWrap>Last Name</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Last Name"
                size={"small"}
                fullWidth
                value={ownerLastName}
                onChange={updateOwnerLastName}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={1}>
        <Grid item lg={1} xs={1} sm={1}></Grid>
        <Grid item lg={5.5} xs={12} sm={5.5}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography noWrap>Company Name</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Company Name"
                size={"small"}
                fullWidth
                value={companyName}
                onChange={updateCompanyName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5.5} xs={12} sm={5.5} mt={1}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Email"
                size={"small"}
                fullWidth
                value={companyEmail}
                onChange={updateCompanyEmail}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={1}>
        <Grid item lg={1} xs={1} sm={1}></Grid>
        <Grid item lg={5.5} xs={12} sm={5.5}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography>Phone</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Phone"
                size={"small"}
                fullWidth
                value={companyPhone}
                onChange={updateCompanyPhone}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5.5} xs={12} sm={5.5} mt={1}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Address"
                size={"small"}
                fullWidth
                value={companyAddress}
                onChange={updateCompanyAdress}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={1}>
        <Grid item lg={1} xs={1} sm={1}></Grid>
        <Grid item lg={5.5} xs={12} sm={5.5}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography>Website</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Website"
                size={"small"}
                fullWidth
                value={companyWebsite}
                onChange={updateCompanyWebsite}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5.5} xs={12} sm={5.5} mt={1}>
          <Grid container>
            <Grid item xs={2.9} mt={1}>
              <Typography noWrap>Foundation Year</Typography>
            </Grid>
            <Grid item xs={0.8} mt={1}>
              :
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                placeholder="Foundation Year"
                size={"small"}
                fullWidth
                value={companyFoundationYear}
                onChange={updateCompanyFoundationYear}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={3}>
        <Grid
          item
          lg={12}
          xs={6}
          sm={12}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Grid item lg={1.1} xs={6} sm={1.5}>
            <Link href={"/company"}>
              <Button variant="contained" size="small">
                Cancel
              </Button>
            </Link>
          </Grid>
          <Grid item lg={1.73} xs={1} sm={2.2}>
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
    </>
  );
};

export default CompanyCreateComponent;
