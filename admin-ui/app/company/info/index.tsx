"use client";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import { deleteCompany } from "../../../services/company.action";
type CompanyInfoProps = {
  id: string;
  Items: any;
  item: any;
};
const InfoCompanyComponent = ({ Items }: CompanyInfoProps) => {
  const deleteCompanyHandler = async (id) => {
    const response = await deleteCompany(id);
    window.location.reload();
  };
  return (
    <>
      <Box mt={0.6} mr={2}>
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

            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {Items.name}
              </Typography>
            </Grid>
            <Grid item xs={2} mr={1}>
              <Typography variant="body2" noWrap>
                {Items.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {" "}
                {Items.mobile}
              </Typography>
            </Grid>
            <Grid item xs={2} mr={6}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {Items.address}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    <Link href={`/company/${Items.id}`}>
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteOutlineIcon
                        fontSize="small"
                        onClick={() => deleteCompanyHandler(Items.id)}
                      />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};
export default InfoCompanyComponent;
