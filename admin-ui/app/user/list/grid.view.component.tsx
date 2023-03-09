import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import IUserComponentProps from "../user.props";
import useGridPagination from "./grid.pagination";
interface GridComponentProps extends IUserComponentProps {}

const GridViewComponent = ({ items }: GridComponentProps) => {
  // Pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const count = Math.ceil(items.length / PER_PAGE);
  const _DATA = useGridPagination(items, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mx={2.5}>
        <Grid container spacing={1.5} mt={1}>
          {_DATA.currentData()?.map((item) => {
            return (
              <Grid item lg={4} xs={12} sm={6} md={4} mt={0} key={item.id}>
                <Card>
                  <Box>
                    <Grid item xs={12}>
                      {" "}
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
                          {" "}
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
                        <Typography fontSize={"0.9rem"} noWrap>
                          {" "}
                          {item?.email}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <Grid container>
                      <Grid item xs={3.5}>
                        <Typography fontSize={"0.9rem"}>Mobile</Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize={"0.9rem"} noWrap>
                          {item?.mobile}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <Grid container>
                      <Grid item xs={3.5}>
                        <Typography fontSize={"0.9rem"}> Address</Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography fontSize={"0.9rem"} noWrap>
                          {" "}
                          {item?.address}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          <Grid item xs={11.8}>
            <div>
              <Pagination
                count={count}
                size="small"
                page={page}
                variant="outlined"
                color="primary"
                onChange={handleChangePage}
              />
            </div>
          </Grid>
          <Grid item xs={0.2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GridViewComponent;
