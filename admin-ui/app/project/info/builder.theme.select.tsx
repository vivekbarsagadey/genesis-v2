import { Button, Card, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import BuilderThemesSelectComponent from "./builder.screen.component.select";

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BuilderThemeComponent = ({ handleCloseTheme }) => {
  const classes = useStyles();
  const [builderThemes, setBuilderThemes] = React.useState(false);
  const [blankTheme, setBlankTheme] = React.useState<boolean>(false);
  const [blackTheme, setBlackTheme] = React.useState<boolean>(false);
  const [whiteTheme, setWhiteTheme] = React.useState<boolean>(false);
  const [glassmorphismTheme, setGlassmorphismTheme] =
    React.useState<boolean>(false);

  const handleClickOpen = () => {
    setBuilderThemes(true);
  };

  const handleClose = () => {
    setBuilderThemes(false);
  };
  const updateTheme = (themeRecv: string) => {
    if (themeRecv === "blank") {
      setBlankTheme((s) => !s);
    }
    if (themeRecv === "black") {
      setBlackTheme((s) => !s);
    }
    if (themeRecv === "white") {
      setWhiteTheme((s) => !s);
    }
    if (themeRecv === "glassmorphism") {
      setGlassmorphismTheme((s) => !s);
    }
  };

  return (
    <>
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
                  <Checkbox
                    style={{ color: "white" }}
                    size="small"
                    value={blankTheme}
                    onClick={() => updateTheme("blank")}
                  />
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
                    Black Theme
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    style={{ color: "white" }}
                    size="small"
                    value={blackTheme}
                    onClick={() => updateTheme("blackTheme")}
                  />
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
                      image="./images/Black_theme.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    White Theme
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    style={{ color: "white" }}
                    size="small"
                    value={whiteTheme}
                    onClick={() => updateTheme("whiteTheme")}
                  />
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
                      image="./images/White_theme.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item xs={10}>
                  <Typography variant="body2" color={"white"}>
                    Glassmorphism Theme
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Checkbox
                    style={{ color: "white" }}
                    size="small"
                    value={glassmorphismTheme}
                    onClick={() => updateTheme("glassmorphismTheme")}
                  />
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
                      image="./images/Glassmorphism_theme.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container display="flex" justifyContent={"flex-end"}>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleCloseTheme}
                  >
                    Cancel
                  </Button>
                </Grid>

                <Grid item xs={1} mr={1}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleClickOpen}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        fullScreen
        open={builderThemes}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <BuilderThemesSelectComponent handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default BuilderThemeComponent;
