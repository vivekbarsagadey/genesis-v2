"use client";
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import ICompany from "../../company/company.model";

type CompanyComponentProps = {
  items: any;
};

const InfoProjectComponent = ({ items }: CompanyComponentProps) => {
  return (
    <Box mt={0.6} width={"98.2%"}>
      <Paper variant="outlined">
        <Grid container spacing={4}>
          <Grid item xs={0.12}></Grid>
          <Grid item xs={0.488}>
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={1} style={{ display: "flex" }}>
            <IconButton>
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography variant="body2">{items.name}</Typography>
          </Grid>
          <Grid item xs={3} sm={3} spacing={1}>
            <Typography variant="body2">{items.customerName}</Typography>
          </Grid>
          <Grid item xs={2.2} sm={2.9}>
            <Typography variant="body2">{items.application}</Typography>
          </Grid>

          <Grid item xs={1}>
            <Grid container>
              <Grid item xs={3.8}>
                <Link href={"/project/-1"} passHref>
                  <Tooltip title="Edit">
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Tooltip title="Download">
                  <IconButton>
                    <FileDownloadIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InfoProjectComponent;
