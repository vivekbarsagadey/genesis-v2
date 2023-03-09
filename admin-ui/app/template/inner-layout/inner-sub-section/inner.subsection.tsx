import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Property from "../../property-component/property";
import Css from "../../css-component/css.component";
import Model from "../../model-component/model";
import Api from "../../api-component/api.component";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const InnerSubSection = ({ menuList, dragList }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const components = menuList.map((d) =>
    d.components.map((d) => d.properties)
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  scrollButtons={false}
                >
                  <Tab label="Properties" {...a11yProps(0)} />
                  <Tab label="CSS" {...a11yProps(1)} />
                  <Tab label="Model" {...a11yProps(2)} />
                  <Tab label="API " {...a11yProps(3)} />
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <>
                {dragList.length > 0 ? (
                  <>
                    <TabPanel value={value} index={0}>
                      <Property menuList={menuList} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Css menuList={menuList} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <Model menuList={menuList} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <Api menuList={menuList} />
                    </TabPanel>
                  </>
                ) : (
                  <Typography>
                    <Typography mt={0.5} mr={0.7}>
                      <ErrorOutlineIcon />
                    </Typography>
                    Select Component
                  </Typography>
                )}
              </>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default InnerSubSection;
