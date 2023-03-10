"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

const CompanyCreateComponent = () => {
  return (
    <div>
      {/* <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={0.65}></Grid>
            <Grid item xs={11}>
              <Grid container mb={5}>
                <Grid item xs={10} mt={5}>
                  <Typography fontSize={"1.3rem"}>
                    Create New Company
                  </Typography>
                </Grid>
              </Grid>
              <Grid container mt={3.5}>
                <Grid item xs={3.3} mt={3}>
                  <Typography>Company Name</Typography>
                </Grid>
                <Grid item xs={0.7} mt={4}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={6.5} mt={3}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Create Company Name"
                    size={"small"}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container mt={3}>
                <Grid item xs={3.3} mt={1}>
                  <Typography>Email </Typography>
                </Grid>
                <Grid item xs={0.7} mt={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={6.5}>
                  <TextField
                    placeholder="Email"
                    id="outlined-basic"
                    size={"small"}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container mt={3}>
                <Grid item xs={3.3} mt={1}>
                  <Typography>Contact </Typography>
                </Grid>
                <Grid item xs={0.7} mt={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={6.5}>
                  <TextField
                    placeholder="Contact Number"
                    id="outlined-basic"
                    size={"small"}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container mt={3}>
                <Grid item xs={3.3} mt={1}>
                  <Typography>Address</Typography>
                </Grid>
                <Grid item xs={0.7} mt={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={6.5}>
                  <TextField
                    placeholder="Address"
                    id="outlined-basic"
                    size={"small"}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container mt={6}>
                <Grid item xs={8.3}></Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={5.6}>
                      <Link href={"/company"} passHref>
                        <Button variant="contained" size="small">
                          Cancel
                        </Button>
                      </Link>
                    </Grid>

                    <Grid item xs={6}>
                      <Button variant="contained" size="small">
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      <Grid container mt={6}>
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
                placeholder="Create Company Name"
                size={"small"}
                fullWidth
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
                placeholder="Create Company Name"
                size={"small"}
                fullWidth
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
              <Typography>Contact</Typography>
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
                placeholder="Create Company Name"
                size={"small"}
                fullWidth
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
                placeholder="Create Company Name"
                size={"small"}
                fullWidth
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
                placeholder="Create Company Name"
                size={"small"}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid item xs={12}>
          <Grid container display={"flex"} justifyContent={"flex-end"}>
            <Grid item xs={1}>
              <Button variant="contained" size="small">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={1.93}>
              <Button variant="contained" size="small">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyCreateComponent;
