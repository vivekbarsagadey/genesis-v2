import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import IUser from "../user.model";
import IUserComponentProps from "../user.props";

interface FilterComponentProps extends IUserComponentProps {
  f: IUser;
}

const InfoUserComponent = ({ f }: FilterComponentProps) => {
  return (
    <>
      <Box>
        <Grid container className="classes.container">
          <Grid item xs={0.8}>
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={2.2}>
            <Typography noWrap>{f.firstName}</Typography>
          </Grid>
          <Grid item xs={2.12}>
            <Typography noWrap>{f.lastName}</Typography>
          </Grid>
          <Grid item xs={2.6}>
            <Typography noWrap>{f.email}</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Typography noWrap>{f.mobile}</Typography>
          </Grid>
          <Grid item xs={2.2} sm={2.2}>
            <Grid container>
              <Grid item xs={7.52}>
                <Typography noWrap>{f.address}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Stack spacing={1} sx={{ width: "100%" }}>
                  <Tooltip title="Delete" arrow>
                    <IconButton>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Grid>
              <Grid item xs={1.3}>
                <Link href={`/user/${f._id}`}>
                  <Tooltip title="Edit" arrow>
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InfoUserComponent;
