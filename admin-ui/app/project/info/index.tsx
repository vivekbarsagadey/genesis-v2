"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCustomer } from "../../../services/customer.action";
import { deleteProject } from "../../../services/project.action";
import IProject from "../project.model";


type InfoCustomerComponentProps = {
  items: IProject;
};
const InfoProjectComponent = ({ items }: InfoCustomerComponentProps) => {
  const router = useRouter();

  const deleteProjectHandler = async () => {
    const response = await deleteProject(items.id);
    window.location.reload();
    // router.push("/items");
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
            <Grid item xs={3}>
              <Typography variant="body2" noWrap>
                {items.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" noWrap>
                {items.customerName}
              </Typography>
            </Grid>
            <Grid item xs={3} >
              <Typography
                variant="body2"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {items.application}
              </Typography>
            </Grid>
          
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Tooltip title="Edit">
                    <Link href={`/project/${items.id}`}>
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
                        deleteProjectHandler();
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
export default InfoProjectComponent;
