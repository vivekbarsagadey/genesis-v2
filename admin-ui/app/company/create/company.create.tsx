"use client";
import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const updateMyCompanyData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`, {
      method: "POST",
      body: JSON.stringify({
        firstName: ownerFirstName,
        lastName: ownerLastName,
        name: companyName,
        email: companyEmail,
        mobile: companyPhone,
        address: companyAddress,
        website: companyWebsite,
        foundationYear: companyFoundationYear,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    router.push("/company");
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
      <Grid item xs={3.16} display={"flex"} justifyContent={"flex-end"} mt={4}>
        <Typography fontSize={"1.3rem"}>Create New Company</Typography>
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
                value={ownerFirstName}
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
                value={ownerLastName}
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
            <Grid item xs={0.5}>
              :
            </Grid>
            <Grid item xs={6.5}>
              <TextField
                id="outlined-basic"
                placeholder="Create Company Name"
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
            <Grid item xs={3}>
              <Typography>Phone</Typography>
            </Grid>
            <Grid item xs={0.5}>
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
            <Grid item xs={2.5}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={0.5}>
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
            <Grid item xs={3}>
              <Typography>Website</Typography>
            </Grid>
            <Grid item xs={0.5}>
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
            <Grid item xs={2.5}>
              <Typography>Foundation Year</Typography>
            </Grid>
            <Grid item xs={0.5}>
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
                onClick={updateMyCompanyData}
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

export default CompanyCreateComponent;
