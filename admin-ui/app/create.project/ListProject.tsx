import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CreateComponent from "../project/create";

const ListProject = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <CreateComponent />
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid item xs={0.2}></Grid>
        <Grid item xs={11.6}>
          <Paper>
            <Grid container>
              <Grid container mt={1.5}>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography>Project Name</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7} mt={-0.2}>
                      <Grid
                        container
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Grid item xs={4}>
                          <Typography>Astrology V1.1</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={5}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                      height: "5vh",
                      width: "20%",
                    }}
                  >
                    View{" "}
                    <RemoveRedEyeIcon
                      style={{ fontSize: "1rem", marginLeft: "1.4rem" }}
                    />
                  </Button>
                </Grid>
              </Grid>

              <Grid container mt={1}>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography>Customer Name</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7} pt={-0.1}>
                      <Grid
                        container
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Grid item xs={2}>
                          <Typography>Austin</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={5}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                      height: "5vh",
                      width: "20%",
                    }}
                  >
                    Edit{" "}
                    <EditIcon
                      style={{ fontSize: "1rem", marginLeft: "1.8rem" }}
                    />
                  </Button>
                </Grid>
              </Grid>
              <Grid container my={1}>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography>Services</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7} mt={-0.8}>
                      <Grid
                        container
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Grid item xs={2}>
                          <Typography>B2B W</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs={2}>
                          <Typography>B2B M</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Checkbox defaultChecked />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={5}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                      height: "5vh",
                    }}
                  >
                    Download <FileDownloadIcon style={{ fontSize: "1rem" }} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListProject;
