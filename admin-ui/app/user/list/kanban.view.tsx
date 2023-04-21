import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { IUser, Status } from "../models";
import { ListComponentProps } from "./props";
const CardStyle = styled(Grid)(({ theme }) => ({
  height: "80vh",
  overflowY: "auto",
}));
type IActiveUser = {
  activeUser: IUser;
};
type IInActiveUser = {
  inActiveUser: IUser;
};
const UserKanbanView = ({ user }: ListComponentProps) => {
  const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));
  const activeCompanies = user.filter((ele: IUser) => {
    return ele.status == statusSet[0];
  });
  const inActiveUser = user.filter((ele: IUser) => {
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
                {activeCompanies?.map((activeUser, index) => {
                  return (
                    <ActiveUserComponent
                      activeUser={activeUser}
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
                {inActiveUser?.map((inActiveUser, index) => {
                  return (
                    <InActiveUserComponent
                    inActiveUser={inActiveUser}
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
const ActiveUserComponent = ({ activeUser }: IActiveUser) => {
  return (
    <Box mt={1}>
      <Paper variant="outlined">
        <Typography noWrap variant="h5">
          Company - {activeUser.firstName} {activeUser.lastName}
        </Typography>
        <Typography noWrap variant="h5">
          Status - {activeUser.status}
        </Typography>
      </Paper>
    </Box>
  );
};
const InActiveUserComponent = ({ inActiveUser }: IInActiveUser) => {
  return (
    <Box mt={1}>
      <Paper variant="outlined">
        <Typography noWrap variant="h5">
          {" "}
          Company - {inActiveUser.firstName} {inActiveUser.lastName}
        </Typography>
        <Typography noWrap variant="h5">
          {" "}
          Status - {inActiveUser.status}
        </Typography>
      </Paper>
    </Box>
  );
};
export default UserKanbanView;
