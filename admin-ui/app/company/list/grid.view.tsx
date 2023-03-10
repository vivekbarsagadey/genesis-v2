import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const CompanyGridView = () => {
  return (
    <div>
      <Grid item lg={4} xs={12} sm={6} md={4} mt={1}>
        <Paper variant="outlined">
          <Box paddingLeft={2} paddingTop={2}>
            <Grid container>
              <Grid item xs={5}>
                <Typography variant="subtitle1">Company Name</Typography>
              </Grid>
              <Grid item xs={1.5} paddingLeft={1}>
                <Typography variant="subtitle1"> :</Typography>
              </Grid>
              <Grid item xs={5.5} paddingLeft={3}>
                <Typography noWrap variant="subtitle1">
                  {/* {item?.name} */}
                  John Enterprises
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box mt={1} paddingLeft={2}>
            <Grid container>
              <Grid item xs={5.3}>
                <Typography variant="subtitle1">Email</Typography>
              </Grid>
              <Grid item xs={1.5}>
                <Typography variant="subtitle1"> :</Typography>
              </Grid>
              <Grid item xs={5.2} paddingLeft={2}>
                <Typography noWrap variant="subtitle1">
                  {" "}
                  {/* {item?.customerName} */}
                  John@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={1} paddingLeft={2}>
            <Grid container>
              <Grid item xs={5.3}>
                <Typography variant="subtitle1">Contact</Typography>
              </Grid>
              <Grid item xs={1.5}>
                <Typography variant="subtitle1"> :</Typography>
              </Grid>
              <Grid item xs={5.2} paddingLeft={2}>
                <Typography noWrap variant="subtitle1">
                  {" "}
                  {/* {item?.customerName} */}
                  +91 8969857470
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box mt={1} paddingLeft={2} paddingBottom={2}>
            <Grid container>
              <Grid item xs={5.3}>
                <Typography variant="subtitle1">Address</Typography>
              </Grid>
              <Grid item xs={1.5}>
                <Typography variant="subtitle1"> :</Typography>
              </Grid>
              <Grid item xs={5.2} paddingLeft={2}>
                <Typography variant="subtitle1" noWrap>
                  {/* {item?.application} */}
                  Dhayri Pune Maharastra
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};

export default CompanyGridView;
