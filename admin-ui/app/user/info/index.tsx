"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteUser } from "../../../services/user.action";
import { IUser } from "../models";
import Moment from "react-moment";
import Switch from '@mui/material/Switch';

type InfoUserComponentProps = {
  user: IUser;
};

const InfoUserComponent = ({ user }: InfoUserComponentProps) => {
  const router = useRouter();
  const deleteUserHandler = async () => {
    const response = await deleteUser(user.id);
    window.location.reload();
    // router.push("/user");
  };

  return (
    <>
      <Box mt={0.6} mr={2}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={1} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {user.firstName} {user.lastName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
              {user.role}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" noWrap>
                {user.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {user.mobile}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {user.status === 'ACTIVE' ?  <Switch disabled defaultChecked /> : <Switch disabled />}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container  style={{display:'flex',justifyContent:'center'}}>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    <Link href={`/user/${user.id}`}>
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
                        deleteUserHandler();
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
export default InfoUserComponent;
