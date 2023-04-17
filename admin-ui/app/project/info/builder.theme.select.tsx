import { Button, Card, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  background_genesis1: {
    backgroundImage: `url(${"./images/genesis1.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
    position: "relative",
  },
  genesislogo: {
    height: "300px",
    width: "290px",
    position: "relative",
  },
  genesislogo1: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-50px 0 0 -50px",
  },
});

const BuilderThemeComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={4} className={classes.background_genesis1}>
          <Grid container className={classes.genesislogo}>
            <Grid item xs={12} className={classes.genesislogo1}>
              <img src="./images/genesislogo.png" alt="image not found" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ background: "#0f172a" }}>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <Typography color={"white"} fontSize={"1.2rem"} ml={3}>
                Select Theme
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4} padding={3}>
            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox style={{ color: "white" }} size="small" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia component="img" height="170" />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox style={{ color: "white" }} size="small" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="170"
                      image="./images/cardimage1.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox style={{ color: "white" }} size="small" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="170"
                      image="./images/cardimage2.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox style={{ color: "white" }} size="small" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="170"
                      image="./images/cardimage3.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox style={{ color: "white" }} size="small" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="170"
                      image="./images/cardimage4.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Blank
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox style={{ color: "white" }} size="small" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent={"space-around"}
                ></Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="170"
                      image="./images/cardimage5.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container display="flex" justifyContent={"flex-end"}>
                <Grid item xs={2}>
                  <Button variant="contained" size="large">
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={1} mr={1}>
                  <Button variant="contained" size="large" >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BuilderThemeComponent;
