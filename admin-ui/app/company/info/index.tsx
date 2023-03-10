"use client";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const InfoCompanyComponent = () => {
  return (
    <div>
      <Grid mt={0.6} width={"98.2%"}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={0.12}></Grid>
            <Grid item xs={0.6}>
              <Checkbox size="small" />
            </Grid>
            <Grid item xs={1.25}>
              <Tooltip title="View">
                <IconButton>
                  <RemoveRedEyeIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={2.2}>
              <Typography variant="body2">
                John Enterprises
                {/* {items.name} */}
              </Typography>
            </Grid>
            <Grid item xs={1.98}>
              <Typography variant="body2">
                {/* {items.customerName} */}
                John@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={4} sm={2.43}>
              <Grid container display={"flex"} alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography variant="body2" noWrap>
                    {/* {items.application} */}
                    +91 8969857470
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Grid container display={"flex"} alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography variant="body2" noWrap>
                    {/* {items.application} */}
                    Dhayri Pune Maharastra
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={3.8}>
                  {/* <Link href={`/project/${items.id}`}
                 passHref>
                  <Tooltip title="Edit">
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Link> */}
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default InfoCompanyComponent;
