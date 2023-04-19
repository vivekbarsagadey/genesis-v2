import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import project from "../../../data/project.json";

const ButtonPropertiesComponent = ({ metaData, sectionType }) => {
  const [background, setBackground] = useState<string>(metaData.background);
  const [borderRadius, setBorderRadius] = useState<string>(
    metaData.borderRadius
  );
  const [height, setHeight] = useState<string>(metaData.height);
  const [overflow, setOverflow] = useState<string>(metaData.overflowY);
  const [position, setPosition] = useState<string>(metaData.position);
  const [width, setWidth] = useState<string>(metaData.width);

  var selectedCompId = metaData.parentId;
  console.log("sectionType >>>", sectionType);
  console.log("selectedCompId >>", selectedCompId);

  const updateBackground = (e) => {
    setBackground(e.target.value);
  };
  const updateBorderRadius = (e) => {
    setBorderRadius(e.target.value);
  };
  const updateHeight = (e) => {
    setHeight(e.target.value);
  };
  const updateOverflow = (e) => {
    setOverflow(e.target.value);
  };
  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateWidth = (e) => {
    setWidth(e.target.value);
  };
  console.log("project json >>", project.pages[0].components);
  console.log(
    "post call  >>",
    project.pages[0].components.filter(
      (ele) => ele.componentId === selectedCompId
    )
  );

  const updateDataToProject = () => {
    console.log(
      "save >>",
      background,
      borderRadius,
      height,
      overflow,
      position,
      width
    );
  };

  return (
    <>
      <Box padding={3}>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>background</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={background}
                      onChange={updateBackground}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>borderRadius</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={borderRadius}
                      onChange={updateBorderRadius}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>height</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={height}
                      onChange={updateHeight}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>overflowY</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={overflow}
                      onChange={updateOverflow}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>position</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={position}
                      onChange={updatePosition}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"600"}>width</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      value={width}
                      onChange={updateWidth}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12}>
        <Grid
          container
          display="flex"
          justifyContent="flex-end"
          style={{ marginTop: "12.7rem" }}
        >
          <Grid item xs={4}>
            <Button variant="contained" size="small">
              Reset
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="small"
              onClick={updateDataToProject}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ButtonPropertiesComponent;
