import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ICustomer, Status } from "../models";
import { ListComponentProps } from "./props";

const CardStyle = styled(Grid)(({ theme }) => ({
  height: "80vh",
  overflowY: "auto",
}));

type IActiveCustomer = {
  activeCustomer: ICustomer;
};
type IInActiveCustomer = {
  inActiveCustomer: ICustomer;
};
const CustomerKanbanView = ({ customer }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

  const activeCompanies = customer.filter((ele: ICustomer) => {
    return ele.status == statusSet[0];
  });
  const inActiveCustomer = customer.filter((ele: ICustomer) => {
    return ele.status == statusSet[1];
  });

  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined">
              <CardContent>
                <Typography variant="h6">ACTIVE</Typography>
                {activeCompanies.reverse()?.map((activeCustomer, index) => {
                  return (
                    <ActiveCompanyComponent
                      activeCustomer={activeCustomer}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <CardStyle>
            <Paper variant="outlined">
              <CardContent>
                <Typography variant="h6">INACTIVE</Typography>
                {inActiveCustomer.reverse()?.map((inActiveCustomer, index) => {
                  return (
                    <InActiveCustomerComponent
                      inActiveCustomer={inActiveCustomer}
                      key={index}
                    />
                  );
                })}
              </CardContent>
            </Paper>
          </CardStyle>
        </Grid>
      </Grid>
    </>
  );
};

const ActiveCompanyComponent = ({ activeCustomer }: IActiveCustomer) => {
  return (
    <Box mt={1}>
      <Paper variant="outlined">
        <Typography noWrap variant="h5">
          Company - {activeCustomer.firstName} {activeCustomer.lastName}
        </Typography>
        <Typography noWrap variant="h5">
          Status - {activeCustomer.status}
        </Typography>
      </Paper>
    </Box>
  );
};
const InActiveCustomerComponent = ({ inActiveCustomer }: IInActiveCustomer) => {
  return (
    <Box mt={1}>
      <Paper variant="outlined">
        <Typography noWrap variant="h5">
          {" "}
          Company - {inActiveCustomer.firstName} {inActiveCustomer.lastName}
        </Typography>
        <Typography noWrap variant="h5">
          {" "}
          Status - {inActiveCustomer.status}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CustomerKanbanView;
