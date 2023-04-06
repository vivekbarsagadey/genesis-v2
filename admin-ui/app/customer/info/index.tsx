"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCustomer } from "../../../services/customer/customer.action";
import { ICustomer } from "../models";

type InfoCustomerComponentProps = {
  customer: ICustomer;
};
const InfoCustomerComponent = ({ customer }: InfoCustomerComponentProps) => {
  const router = useRouter();
  const deleteCustomerHandler = async () => {
    const response = await deleteCustomer(customer.id);
    // route to list screen
    window.location.reload();
    router.push("/customer");
  };
  return (
    <>
      <Box mt={0.6} mr={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
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
                {customer.name}
              </Typography>
            </Grid>
            <Grid item xs={2} mr={1}>
              <Typography variant="body2" noWrap>
                {customer.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {customer.mobile}
              </Typography>
            </Grid>
            <Grid item xs={2} mr={6}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {customer.address}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    <Link href={`/customer/${customer.id}`}>
                      <IconButton>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => {
                        deleteCustomerHandler();
                      }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
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
export default InfoCustomerComponent;
