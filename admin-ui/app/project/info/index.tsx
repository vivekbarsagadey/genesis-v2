"use client";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
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
import Link from "next/link";
import downloadJsonFile from "../../utility/project/json.downloder";

type CompanyComponentProps = {
  items: any;
};

const InfoProjectComponent = ({ items }: CompanyComponentProps) => {
  console.log("items <>", items);

  const jsonFileDownload = () => {
    downloadJsonFile(items);
  };

  return (
    <Box mr={2} mt={0.6}>
      <Paper variant="outlined">
        <Grid container>
          <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
            <Grid container ml={1}>
              <Grid item xs={4}>
                <IconButton>
                  <CheckBoxOutlineBlankIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item xs={6}>
                <IconButton>
                  <RemoveRedEyeIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="body2" noWrap>
              {items.name}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" noWrap>
              {items.customerName}
            </Typography>
          </Grid>
          <Grid item xs={2} mr={7}>
            <Typography variant="body2" noWrap>
              {items.application}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Grid container>
              <Grid item xs={4}>
                <Tooltip title="Edit">
                  <Link href={"/project/-1"} passHref>
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title="Download JSON">
                  <IconButton onClick={jsonFileDownload}>
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
