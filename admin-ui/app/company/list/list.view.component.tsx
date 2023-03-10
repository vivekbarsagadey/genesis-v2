"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import InfoCompanyComponent from "../info";
import InfoCompany from "../info";

const ListViewComponent = () => {
  return (
    <div>
      <Box mt={2} width={"98.2%"}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={0.12}></Grid>
            <Grid item xs={0.6}>
              <Checkbox size="small" />
            </Grid>
            <Grid item xs={1.25} style={{ display: "flex" }}>
              <IconButton>
                <RemoveRedEyeIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={2.2} sm={2.2}>
              <Typography variant="subtitle2">Company Name</Typography>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography variant="subtitle2">Email</Typography>
            </Grid>
            <Grid item xs={1.8} sm={2.4}>
              <Typography variant="subtitle2">Contact</Typography>
            </Grid>

            <Grid item xs={2.3}>
              <Typography variant="subtitle2" noWrap>
                Address
              </Typography>
            </Grid>
            <Grid item xs={0.8}>
              <Typography variant="subtitle2" noWrap>
                Action
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <InfoCompanyComponent />
    </div>
  );
};

export default ListViewComponent;
