import React from "react";
import ICompanyComponentProps from "../company.props";
import Grid from "@mui/material/Grid";
import { Avatar, Card, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { deleteCompany } from "../services/CompanyServices";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles({
  listname: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    padding: "0px  !important ",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface InfoComponentProps extends ICompanyComponentProps {}
const InfoComponent = ({ item }: any) => {
  const classes = useStyles();

  // snack bar hooks
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getRemove = async (item: any) => {
    await deleteCompany(item);
  };
  const removeHandler = (item: any) => {
    getRemove(item);
    handleClick();
  };
  return (
    <Grid item xs={12} lg={4} sm={6}>
      <Card style={{ padding: "4px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Tooltip title="Delete">
              <IconButton onClick={() => removeHandler(item)}>
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Item Deleted Successfully !!
              </Alert>
            </Snackbar>

            <Link href={`/company/${item._id}`}>
              <Tooltip title="Edit">
                <IconButton>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
            }}
            sm={3}
            lg={3}
            md={3}
          >
            <Avatar />
          </Grid>
          <Grid item xs={9} sm={9} lg={9} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={6} className={classes.card} sm={6} lg={6} md={6}>
                <Typography fontSize="80%" noWrap>
                  Company Name:
                </Typography>
                <Typography fontSize="80%">Email:</Typography>
                <Typography fontSize="80%">Contact:</Typography>
                <Typography fontSize="80%">Address:</Typography>
              </Grid>
              <Grid item xs={6} className={classes.card} sm={6} lg={6} md={6}>
                <Typography fontSize="80%" noWrap>
                  {item.name}
                </Typography>
                <Typography fontSize="80%" noWrap>
                  {item.email}
                </Typography>
                <Typography fontSize="80%" noWrap>
                  {item.mobile}
                </Typography>
                <Typography fontSize="80%" noWrap>
                  {item.address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>



          
        </Grid>
      </Card>
    </Grid>
  );
};
export default InfoComponent;
