import { Card, CardMedia, Pagination, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useState } from 'react';
import { PaginationHandler } from '../../utility';

const useStyles = makeStyles({
  root: { height: '74vh' },
  imageView: { padding: '.5rem' },
  paginationView: { display: "flex", justifyContent: "flex-end" },
  logoSize: { width: '90%', height: '100%' }
});

function ProjectGridView({ projects, myRef }: any) {

  const classes = useStyles();
  // pagination
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(projects.length / PER_PAGE);
  const paginationHandler = PaginationHandler(projects, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <>
      <Grid container spacing={1} mt={1} className={classes.root} mr={2} ref={myRef}>
        {paginationHandler
          .currentData()
          .reverse()
          ?.map((item: any) => (
            <Grid item xs={4} md={4} sm={4} lg={4} key={item.id} >
              <Box>
                <Card>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={4} className={classes.imageView}>
                          {item.gender === 'Male' ? <Tooltip title={item.ownerName} arrow>
                            <CardMedia
                              component="img"
                              image="./images/male.png"
                              alt="male"
                              className={classes.logoSize}
                            />
                          </Tooltip>
                            : item.gender === 'Female' ? <Tooltip title={item.ownerName} arrow>
                              <CardMedia
                                component="img"
                                image="./images/female.png"
                                alt="Female"
                                className={classes.logoSize}
                              />
                            </Tooltip>
                              : <Tooltip title={item.ownerName} arrow>
                                <CardMedia
                                  component="img"
                                  image="./images/other.jpg"
                                  alt="others"
                                  className={classes.logoSize}
                                /></Tooltip>}
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container>
                            <Grid item xs={5}>
                              <Typography variant="subtitle1" mt={1}>
                                Project Name
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
                                Customer Name
                              </Typography>
                            </Grid>
                            <Grid item xs={1}>
                              <Typography mt={1}> :</Typography>
                            </Grid>
                            <Grid item xs={6} paddingLeft={2}>
                              <Typography noWrap variant="subtitle1" mt={1}>
                                {item?.customerName}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid item xs={5}>
                              <Typography variant="subtitle1" mt={1}>
                                Application
                              </Typography>
                            </Grid>
                            <Grid item xs={1}>
                              <Typography mt={1}> :</Typography>
                            </Grid>
                            <Grid item xs={6} paddingLeft={2}>
                              <Typography noWrap variant="subtitle1" mt={1}>
                                {item?.application}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid item xs={5}>
                              <Typography variant="subtitle1" mt={1}>
                                Status
                              </Typography>
                            </Grid>
                            <Grid item xs={1}>
                              <Typography mt={1}>:</Typography>
                            </Grid>
                            <Grid item xs={6} paddingLeft={2}>
                              <Typography noWrap variant="subtitle1" mt={1}>
                                {item?.status}
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
      <Grid container >
        <Grid item xs={12} className={classes.paginationView}>
          <Grid >
            <Pagination
              count={count}
              size="small"
              page={page}
              color="primary"
              onChange={handleChangePage}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectGridView;
