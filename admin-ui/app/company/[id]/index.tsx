"use client";
import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ICompany from "../company.model";
import { useRouter } from "next/navigation";
import { updateCompany } from "../../../services/company.action";

type CompanyComponentProps = {
  company: any;
  _id: string;
};

const CompanyEditComponent = ({ company, _id }: CompanyComponentProps) => {
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

  const updateMyCompanyEditedData = async () => {
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
      await updateCompany(_id, body);
      await router.push("/company");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Grid item xs={3.11} display={"flex"} justifyContent={"flex-end"} mt={4}>
        <Typography fontSize={"1.3rem"}>Edit Company Details</Typography>
      </Grid>
      <Grid container mt={8}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={3} mt={1}>
              <Typography>First Name</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
              <TextField
                id="outlined-basic"
                placeholder="First Name"
                size={"small"}
                fullWidth
                value={firstName}
                onChange={updateOwnerFirstName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={2.5} mt={1}>
              <Typography>Last Name</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
              <TextField
                id="outlined-basic"
                placeholder="Last Name"
                size={"small"}
                fullWidth
                value={lastName}
                // value={ownerLastName}
                onChange={updateOwnerLastName}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={3} mt={1}>
              <Typography>Company Name</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
              <TextField
                id="outlined-basic"
                placeholder="Create Company Name"
                size={"small"}
                fullWidth
                value={companyName}
                onChange={updateCompanyName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={2.5} mt={1}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
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

      <Grid container mt={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={3} mt={1}>
              <Typography>Phone</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
              <TextField
                id="outlined-basic"
                placeholder="Phone Number"
                size={"small"}
                fullWidth
                value={companyPhone}
                onChange={updateCompanyPhone}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={2.5} mt={1}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
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
      <Grid container mt={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={3} mt={1}>
              <Typography>Website</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
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
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={2.5} mt={1}>
              <Typography>Foundation Year</Typography>
            </Grid>
            <Grid item xs={0.5} mt={1}>
              :
            </Grid>
            <Grid item xs={6.5}>
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

      <Grid container mt={5}>
        <Grid item xs={12}>
          <Grid container display={"flex"} justifyContent={"flex-end"}>
            <Grid item xs={1}>
              <Link href={"/company"}>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
              </Link>
            </Grid>
            <Grid item xs={1.93}>
              <Button
                variant="contained"
                size="small"
                onClick={updateMyCompanyEditedData}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyEditComponent;
