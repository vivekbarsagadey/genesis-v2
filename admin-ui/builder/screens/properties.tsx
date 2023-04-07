import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const BuilderProperties = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Properties" value="1" />
            <Tab label="CSS" value="2" />
            <Tab label="Model" value="3" />
            <Tab label="API" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Properties</TabPanel>
        <TabPanel value="2">CSS</TabPanel>
        <TabPanel value="3">Model</TabPanel>
        <TabPanel value="4">API</TabPanel>
      </TabContext>
    </Box>
  );
};

export default BuilderProperties;
