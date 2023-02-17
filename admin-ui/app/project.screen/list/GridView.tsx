import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TestingGridView = ({ project }: any) => {
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mx={2.5}>
        <Grid container spacing={1.5} mt={1}>
          {project?.map((item: any) => {
            return (
              <Grid item lg={4} xs={12} sm={6} md={4} mt={0}>
                <Card>
                  <Box>
                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {" "}
                      {/* <Link href={`/user/${item._id}`}> */}
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                      {/* </Link> */}
                      <IconButton
                        size="small"
                        // onClick={() => removeData(item)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Grid>
                    <Grid container style={{ paddingLeft: "1rem" }}>
                      <Grid item xs={3.1}>
                        <Typography fontSize={"0.9rem"}>
                          Project Name
                        </Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize={"0.9rem"} noWrap>
                          {item?.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <Grid container>
                      <Grid item xs={3.5} style={{ paddingLeft: "1rem" }}>
                        <Typography fontSize={"0.8rem"}>
                          Customer Name
                        </Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize={"0.9rem"} noWrap>
                          {" "}
                          {item?.customer}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <Grid container>
                      <Grid
                        item
                        xs={3.5}
                        style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}
                      >
                        <Typography fontSize={"0.9rem"}>Application</Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize={"0.9rem"} noWrap>
                          {item?.application}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default TestingGridView;
