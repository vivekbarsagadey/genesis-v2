import { Avatar, Card, IconButton, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import ICompanyComponentProps from "../company.props";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { CompanyStyle as style } from "../companystyle";

interface InfoComponentProps extends ICompanyComponentProps {}
const InfoComponent = ({ item }: any) => {
  return (
    <Grid item xs={12} lg={4} sm={6}>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} style={style.infoGrid}>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Link href={`/company/${item._id}`}>
              <Tooltip title="Edit">
                <IconButton>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
          <Grid item xs={3} style={style.infoGrid} sm={3} lg={3} md={3}>
            <Avatar />
          </Grid>
          <Grid item xs={9} sm={9} lg={9} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={6} style={style.card} sm={6} lg={6} md={6}>
                <Typography fontSize="80%" noWrap>
                  Company Name:
                </Typography>
                <Typography fontSize="80%">Email:</Typography>
                <Typography fontSize="80%">Contact:</Typography>
                <Typography fontSize="80%">Address:</Typography>
              </Grid>
              <Grid item xs={6} style={style.card} sm={6} lg={6} md={6}>
                <Typography fontSize="80%" noWrap>
                  {item.name}
                </Typography>
                <Typography fontSize="80%" noWrap>
                  {item.email}
                </Typography>
                <Typography fontSize="80%" noWrap>
                  {item.mobile}
                </Typography>
                <Typography fontSize="80%" noWrap>
                  {item.address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
export default InfoComponent;
