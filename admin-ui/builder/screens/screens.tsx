"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import Tab from "@material-ui/core/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BuilderProperties from "./properties";

const BuilderScreenComponent = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Screen 1" value="1" />
            <Tab label="Screen 2" value="2" />
            <Tab label="Screen 3" value="3" />
          </TabList>
        </Box>
        <Grid container>
          <Grid item xs={8}>
            <TabPanel value="1">Screen 1</TabPanel>
            <TabPanel value="2">Screen 2</TabPanel>
            <TabPanel value="3">Screen 3</TabPanel>
          </Grid>
          <Grid item xs={4}>
            <BuilderProperties />
          </Grid>
        </Grid>
      </TabContext>
    </Box>
  );
};

export default BuilderScreenComponent;
