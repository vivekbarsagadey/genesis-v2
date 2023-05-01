import { Card, CardMedia, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useState } from 'react';
import Moment from 'react-moment';
import { PaginationHandler } from '../../utility';
import { ListComponentProps } from './props';

function RoleGridView({ roles }: ListComponentProps) {
  // pagination
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(roles.length / PER_PAGE);
  const paginationHandler = PaginationHandler(roles, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <>
      <Box style={{ height: '70.6vh' }} mr={2}>
        <Grid container spacing={1} mt={1}>
          {paginationHandler
            .currentData()
            .reverse()
            ?.map((item: any) => (
              <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                <Box>
                  <Card>
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
                                  Created Date
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}>:</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  <Moment format="DD MMM YYYY">
                                    {item?.createdAt}
                                  </Moment>
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Name
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}>:</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  {item?.name}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Description
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}> :</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  {item?.description}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="subtitle1" mt={1}>
                                  Code
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <Typography mt={1}> :</Typography>
                              </Grid>
                              <Grid item xs={6} paddingLeft={2}>
                                <Typography noWrap variant="subtitle1" mt={1}>
                                  {item?.code}
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
            ))}
        </Grid>
      </Box>
      <Grid container mt={4}>
        <Grid item xs={11.8} display="flex" justifyContent="flex-end">
          <Grid style={{ position: 'fixed' }}>
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
        <Grid item xs={0.2} />
      </Grid>
    </>
  );
}

export default RoleGridView;
