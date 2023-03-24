"use client";
import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ICompany from "../company.model";
import { useRouter } from "next/navigation";
import { updateCompany } from "../../../services/company.action";
import Box from "@mui/material/Box/Box";

type CompanyComponentProps = {
  company: any;
  id: string;
};

const CompanyEditComponent = ({ company, id }: CompanyComponentProps) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState(company.firstName);
  const [lastName, setLastName] = useState(company.lastName);
  const [companyName, setCompanyName] = useState(company.name);
  const [companyEmail, setCompanyEmail] = useState(company.email);
  const [companyPhone, setCompanyPhone] = useState(company.mobile);
  const [companyAddress, setCompanyAddress] = useState(company.address);
  const [companyWebsite, setCompanyWebsite] = useState(company.website);
  const [companyFoundationYear, setCompanyFoundationYear] = useState(
    company.foundationYear
  );

  const updateOwnerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const updateOwnerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
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

  const updateCompanyEditedData = async () => {
    try {
      const body = {
        firstName: firstName,
        lastName: lastName,
        name: companyName,
        email: companyEmail,
        mobile: companyPhone,
        address: companyAddress,
        website: companyWebsite,
        foundationYear: companyFoundationYear,
      };
      await updateCompany(id, body);
      await router.push("/company");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Edit Company Details</Typography>
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
                  value={firstName}
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
                  value={lastName}
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
                <Typography>Foundation Year</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="foundation-year"
                  placeholder="Foundation Year"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={companyFoundationYear}
                  onChange={updateCompanyFoundationYear}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={9}></Grid>

              <Grid item xs={3}>
                <Grid container>
                  <Grid item xs={6} ml={3}>
                    <Link href={"/company"}>
                      <Button variant="contained" size="small">
                        Cancel
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={updateCompanyEditedData}
                    >
                      Save
                    </Button>
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

export default CompanyEditComponent;
