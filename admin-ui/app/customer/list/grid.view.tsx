import React, { useState } from "react";
import { Card, CardMedia, Pagination, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { PaginationHandler } from "../../utility";
import { ListComponentProps } from "./props";

const CustomerGridView = ({ customer }: ListComponentProps) => {
  //pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(customer.length / PER_PAGE);
  const paginationHandler = PaginationHandler(customer, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <>
      <Box style={{ height: "70.6vh" }} mr={2}>
        <Grid container spacing={1} mt={1}>
          {paginationHandler
            .currentData()
            .reverse()
            ?.map((item : any) => {
              return (
                // <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                //   <Paper variant="outlined">
                //     <Box paddingLeft={2} paddingTop={1}>
                //       <Grid container>
                //         <Grid item xs={5}>
                //           <Typography variant="subtitle1">
                //             Company Name
                //           </Typography>
                //         </Grid>
                //         <Grid item xs={1}>
                //           <Typography> :</Typography>
                //         </Grid>
                //         <Grid item xs={6} paddingLeft={2}>
                //           <Typography noWrap variant="subtitle1">
                //             {item.firstName} {item.lastName}
                //           </Typography>
                //         </Grid>
                //       </Grid>
                //     </Box>

                //     <Box mt={1} paddingLeft={2}>
                //       <Grid container>
                //         <Grid item xs={5}>
                //           <Typography variant="subtitle1">Email</Typography>
                //         </Grid>
                //         <Grid item xs={1}>
                //           <Typography> :</Typography>
                //         </Grid>
                //         <Grid item xs={6} paddingLeft={2}>
                //           <Typography noWrap variant="subtitle1">
                //             {item?.email}
                //           </Typography>
                //         </Grid>
                //       </Grid>
                //     </Box>
                //     <Box mt={1} paddingLeft={2}>
                //       <Grid container>
                //         <Grid item xs={5}>
                //           <Typography variant="subtitle1">Contact</Typography>
                //         </Grid>
                //         <Grid item xs={1}>
                //           <Typography> :</Typography>
                //         </Grid>
                //         <Grid item xs={6} paddingLeft={2}>
                //           <Typography variant="subtitle1" noWrap>
                //             {item?.mobile}
                //           </Typography>
                //         </Grid>
                //       </Grid>
                //     </Box>

                //     <Box mt={1} paddingLeft={2} paddingBottom={1}>
                //       <Grid container>
                //         <Grid item xs={5}>
                //           <Typography variant="subtitle1">Address</Typography>
                //         </Grid>
                //         <Grid item xs={1}>
                //           <Typography> :</Typography>
                //         </Grid>
                //         <Grid item xs={6} paddingLeft={2}>
                //           <Typography noWrap variant="subtitle1">
                //             {item?.address}
                //           </Typography>
                //         </Grid>
                //       </Grid>
                //     </Box>
                //   </Paper>
                // </Grid>

                <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                <Box>
                  <Card >
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={4} style={{ padding: '1rem' }}>
                            <CardMedia
                              component="img"
                              image="./images/grid_avtar.png"
                              alt="Paella dish"
                            />
                          </Grid>
                          <Grid item xs={8}>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Company Name
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}>:</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                {item.firstName} {item.lastName}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Email
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}> :</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  {item?.email}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Contact
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}> :</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  {item?.mobile}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Address
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}>:</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  {item?.address}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Box>
              </Grid>
              );
            })}
        </Grid>
      </Box>
      <Grid container mt={4}>
        <Grid item xs={11.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}>
            <Pagination
              count={count}
              size="small"
              page={page}
              variant="outlined"
              color="primary"
              onChange={handleChangePage}
            />
          </Grid>
        </Grid>
        <Grid item xs={0.2}></Grid>
      </Grid>
    </>
  );
};

export default CustomerGridView;
