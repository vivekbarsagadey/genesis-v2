import { Card, Grid, Typography, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import IUserComponentProps from "../user.props";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
interface GridComponentProps extends IUserComponentProps {}
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteUser } from "../services/UserServices";
import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useGridPagination from "./GridPagination";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    background: "#f8fafc",
    paddingLeft: "0.5rem",
    width: "98.5%",
  },
  typography: {
    color: "#494a49",
    fontWeight: "600",
    fontSize: "0.8rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    position: "relative",
  },
});

const GridViewComponent = ({ items }: GridComponentProps) => {
  const classes = useStyles();
  // Pagination logic
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const count = Math.ceil(items.length / PER_PAGE);
  const _DATA = useGridPagination(items, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const router = useRouter();
  const getRemove = async (item: any) => {
    await deleteUser(item);
    router.push("/user");
  };
  const removeData = (item: any) => {
    getRemove(item);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mx={2.5} >
        <Grid container spacing={1.5} mt={1}>
          {_DATA.currentData().map((item) => {
            return (
              <Grid item lg={4} xs={12} sm={6} md={4}  mt={0} key={item.id}>
                <Card>
                  <Box>
                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {" "}
                      <Link href={`/user/${item._id}`}>
                        <IconButton size="small">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton size="small" onClick={() => removeData(item)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Grid>
                    <Grid container style={{ paddingLeft: "1rem" }}>
                      <Grid item xs={3.1}>
                        <Typography fontSize={"0.9rem"}>Name</Typography>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography fontSize={"0.9rem"} noWrap>
                          {" "}
                          {`  ${item?.firstName} ${item.lastName} `}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <Grid container>
                      <Grid item xs={3.5} style={{ paddingLeft: "1rem" }}>
                        <Typography fontSize={"0.8rem"}>Email</Typography>
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
                      <Grid item xs={3.5} style={{ paddingLeft: "1rem" }}>
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
                      <Grid item xs={3.5} style={{ paddingLeft: "1rem" }}>
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
          <Grid item xs={11.8} className={classes.pagination}>
            <div style={{ position: "fixed" }}>
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
