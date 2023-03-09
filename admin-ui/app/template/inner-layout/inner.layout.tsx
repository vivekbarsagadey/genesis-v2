import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InnerHeaderComponent from "./inner-header/inner.header.component";
import InnerSectionComponent from "./inner-section/inner.section.component";
import InnerSubSection from "./inner-sub-section/inner.subsection";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface IComponentsDragList {
  id: number;
  type: String;
  path: String;
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
const InnerLayout = ({ menuList,dragList,setDragList,project }: any) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // get call for Screens

  const [screens, setScreens] = React.useState();
  const fetchData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setScreens(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} mt={-1}>
          <InnerHeaderComponent
            value={value}
            handleChange={handleChange}
            a11yProps={a11yProps}
            TabPanel={TabPanel}
            screens={screens}
            project={project}
            dragList={dragList}
            menuList={menuList}
          />
        </Grid>
        <Grid item xs={8.2} mt={-2}>
          <InnerSectionComponent
            value={value}
            a11yProps={a11yProps}
            TabPanel={TabPanel}
            dragList={dragList}
            screens={screens}
            setDragList={setDragList}
           

          />
        </Grid>
        <Grid item xs={3.8}>
          <InnerSubSection  dragList={dragList}  menuList={menuList} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InnerLayout;
