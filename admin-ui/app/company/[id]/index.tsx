"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

const CompanyEditComponent = () => {
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
                // value={ownerFirstName}
                // onChange={updateOwnerFirstName}
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
                // value={ownerLastName}
                // onChange={updateOwnerLastName}
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
                // value={companyName}
                // onChange={updateCompanyName}
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
                // value={companyEmail}
                // onChange={updateCompanyEmail}
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
                // value={companyPhone}
                // onChange={updateCompanyPhone}
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
                // value={companyAddress}
                // onChange={updateCompanyAdress}
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
                // value={companyWebsite}
                // onChange={updateCompanyWebsite}
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
                // value={companyFoundationYear}
                // onChange={updateCompanyFoundationYear}
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
                // onClick={updateMyCompanyData}
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
