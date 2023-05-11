import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Card,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { IUserComponentProps } from '../models';
import { PaginationHandler } from '../../utility';


type GridComponentProps = IUserComponentProps;

function GridViewComponent({ items }: GridComponentProps) {
  // Pagination logic
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(items.length / PER_PAGE);
  const paginationHandler = PaginationHandler(items, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <Box sx={{ flexGrow: 1 }} mx={2.5}>
      <Grid container spacing={1.5} mt={1}>
      {paginationHandler
          .currentData()
          .reverse()
          ?.map((item: any) => (
          <Grid item lg={4} xs={12} sm={6} md={4} mt={0} key={item.id}>
            <Card>
              <Box>
                <Grid item xs={12}>
                  {' '}
                  <Link href={`/user/${item._id}`}>
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton size="small">
                    <DeleteOutlineIcon />
                  </IconButton>
                </Grid>
                <Grid container>
                  <Grid item xs={3.1}>
                    <Typography>Name</Typography>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Typography> :</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography noWrap>
                      {' '}
                      {`  ${item?.firstName} ${item.lastName} `}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Typography> :</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontSize="0.9rem" noWrap>
                      {' '}
                      {item?.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography fontSize="0.9rem">Mobile</Typography>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Typography> :</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontSize="0.9rem" noWrap>
                      {item?.mobile}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography fontSize="0.9rem"> Address</Typography>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Typography> :</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography fontSize="0.9rem" noWrap>
                      {' '}
                      {item?.address}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item xs={11.8}>
          <>
            <Pagination
              count={count}
              size="small"
              page={page}
              variant="outlined"
              color="primary"
              onChange={handleChangePage}
            />
          </>
        </Grid>
        <Grid item xs={0.2} />
      </Grid>
    </Box>
  );
}

export default GridViewComponent;
