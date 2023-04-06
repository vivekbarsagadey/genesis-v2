import React from "react";

import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ListComponentProps } from "./props";
import { ICustomer, Status } from "../models";

const CardStyle = styled(Grid)(({ theme }) => ({
  height: "80vh",
  overflowY: "auto",
}));

type IActiveCustomer = {
  activeCustomer: ICustomer;
};
type INewCustomer = {
  newCustomer: ICustomer;
};
type IInActiveCustomer = {
  inActiveCustomer: ICustomer;
};
const CustomerKanbanView = ({ customer }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const newCustomers = customer.filter((ele: ICustomer) => {
    return ele.status == statusSet[0];
  });
  const activeustomers = customer.filter((ele: ICustomer) => {
    return ele.status == statusSet[1];
  });
  const inActiveCustomer = customer.filter((ele: ICustomer) => {
    return ele.status == statusSet[2];
  });

  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={4}>
          <CardStyle>
            <Card>
              <CardContent>
                <Typography variant="h6">NEW</Typography>
                {newCustomers?.map((newCustomer, index) => {
                  return (
                    <NewCustomerComponent newCustomer={newCustomer} key={index} />
                  );
                })}
              </CardContent>
            </Card>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Card>
              <CardContent>
                <Typography variant="h6">ACTIVE</Typography>
                {activeustomers?.map((activeCustomer, index) => {
                  return (
                    <ActiveCustomerComponent
                    activeCustomer={activeCustomer}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Card>
          </CardStyle>
        </Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Card>
              <CardContent>
                <Typography variant="h6">INACTIVE</Typography>

                {inActiveCustomer?.map((inActiveCustomer, index) => {
                  return (
                    <InActiveCustomerComponent
                    inActiveCustomer={inActiveCustomer}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Card>
          </CardStyle>
        </Grid>
      </Grid>
    </>
  );
};

const NewCustomerComponent = ({ newCustomer }: INewCustomer) => {
  return (
    <Box mt={1}>
      <Card>
        <Paper variant="outlined">
          <Typography noWrap variant="h5">
            {" "}
            Name - {newCustomer.name}
          </Typography>
          <Typography noWrap variant="h5">
            {" "}
            Status - {newCustomer.status}
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};
const ActiveCustomerComponent = ({ activeCustomer }: IActiveCustomer) => {
  return (
    <Box mt={1}>
      <Card>
        <Paper variant="outlined">
          <Typography noWrap variant="h5">
            {" "}
            Name - {activeCustomer.name}
          </Typography>
          <Typography noWrap variant="h5">
            {" "}
            Status - {activeCustomer.status}
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};
const InActiveCustomerComponent = ({ inActiveCustomer }: IInActiveCustomer) => {
  return (
    <Box mt={1}>
      <Card>
        <Paper variant="outlined">
          <Typography noWrap variant="h5">
            {" "}
            Name - {inActiveCustomer.name}
          </Typography>
          <Typography noWrap variant="h5">
            {" "}
            Status - {inActiveCustomer.status}
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};

export default CustomerKanbanView;
