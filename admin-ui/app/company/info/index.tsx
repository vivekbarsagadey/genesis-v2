import { Avatar, Card, IconButton, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import ICompanyComponentProps from "../company.props";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

interface InfoComponentProps extends ICompanyComponentProps {}
const InfoComponent = ({ item }) => {
  return (
    <Grid item xs={12} lg={4} sm={6}>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
          <Grid item xs={3} sm={3} lg={3} md={3}>
            <Avatar />
          </Grid>
          <Grid item xs={9} sm={9} lg={9} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} lg={6} md={6}>
                <Typography noWrap>Company Name:</Typography>
                <Typography>Email:</Typography>
                <Typography>Contact:</Typography>
                <Typography>Address:</Typography>
              </Grid>
              <Grid item xs={6} sm={6} lg={6} md={6}>
                <Typography noWrap>{item.name}</Typography>
                <Typography noWrap>{item.email}</Typography>
                <Typography noWrap>{item.mobile}</Typography>
                <Typography noWrap>{item.address}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
export default InfoComponent;
