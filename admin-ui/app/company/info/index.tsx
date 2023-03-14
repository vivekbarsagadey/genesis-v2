"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

interface CompanyInfoProps {
  id: string;
  Items: any;
  item: any;
}
const InfoCompanyComponent = ({ Items }: CompanyInfoProps) => {
  const deleteCompany = (id: CompanyInfoProps) => {
    deleteCompanyData(id);
    window.location.reload();
  };
  const deleteCompanyData = async (id: CompanyInfoProps) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}\\companies/${id}`,
      {
        credentials: "include",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  };
  return (
    <>
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
            <Grid item xs={2} sm={2} lg={2.2}>
              <Typography variant="body2">{Items.name}</Typography>
            </Grid>
            <Grid item xs={2} lg={1.98}>
              <Typography variant="body2" noWrap>
                {Items.email}
              </Typography>
            </Grid>
            <Grid item xs={2.2} sm={2.8} lg={2.43}>
              <Grid container display={"flex"} alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography variant="body2" noWrap>
                    {Items.mobile}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1.5} sm={1.8} lg={2.15}>
              <Grid container display={"flex"} alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography variant="body2" noWrap>
                    {Items.address}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={3.8}>
                  <Tooltip title="Edit">
                    <Link href={`/company/${Items.id}`}>
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteOutlineIcon
                        fontSize="small"
                        onClick={() => deleteCompany(Items.id)}
                      />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default InfoCompanyComponent;
