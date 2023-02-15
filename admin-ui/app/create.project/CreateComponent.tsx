import React from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: 570,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const CreateComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container mt={1}>
      <Grid item xs={"0.2"}></Grid>
      <Grid item xs={7.8} style={{ display: "flex"}}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 320,height:'6vh'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }} 
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={1} mt={1}>
        <Button
          variant="contained"
          size="small"
          onClick={handleOpen}
          style={{
            borderRadius: "50px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Create
        </Button>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container style={{ width: "100%", alignItems: "center" }}>
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Project Name</Typography>
              </Grid>
              <Grid item xs={0.7}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6.5}>
                <TextField
                  id="outlined-basic"
                  placeholder="Create Project Name"
                  size={"small"}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: "100%", alignItems: "center" }}
              mt={2}
            >
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Customer Name </Typography>
              </Grid>
              <Grid item xs={0.7}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={6.5}>
                <TextField
                  placeholder="Create Customer Name"
                  id="outlined-basic"
                  size={"small"}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: "100%", alignItems: "center" }}
              mt={2}
            >
              <Grid item xs={0.65}></Grid>
              <Grid item xs={3.3}>
                <Typography>Services</Typography>
              </Grid>
              <Grid item xs={0.7}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Grid container>
                  <Grid item xs={3}>
                    <Checkbox />
                  </Grid>
                  <Grid item xs={3}>
                    <Checkbox />
                  </Grid>
                  <Grid item xs={3}>
                    <Checkbox />
                  </Grid>
                  <Grid item xs={3}>
                    <Checkbox />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ width: "100%", alignItems: "center" }}
              mt={-0.7}
            >
              <Grid item xs={0.55}></Grid>
              <Grid item xs={4.2}></Grid>
              <Grid item xs={7}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography fontSize={"0.8rem"}>B2B-W</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography fontSize={"0.8rem"}>B2B-M</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography fontSize={"0.8rem"}>B2C-W</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography fontSize={"0.8rem"}>B2C-M</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container mt={6}>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={5.6}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        borderRadius: "5px",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        borderRadius: "5px",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default CreateComponent;
