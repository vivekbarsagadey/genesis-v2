import React, { useEffect } from "react";
import { Grid, IconButton, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletIcon from "@mui/icons-material/Tablet";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

interface ITabPanel {
  value: number;
  handleChange: any;
  TabPanel: any;
  a11yProps: any;
  screens: any;
  project: any;
  dragList: any;
  menuList: any;
}

const InnerHeaderComponent = ({
  handleChange,
  value,
  dragList,
  a11yProps,
  screens,
  project,
  menuList,
}: ITabPanel) => {
  const router = useRouter();

  // get call for Screen Name
  const [screens2, setScreens2] = React.useState("");
  const fetchData = () => {
    fetch("http://localhost:3000/api/screens")
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setScreens2(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("screens2 ",screens2);

  const removeScreen = (screenR: any) => {
    // DEL Call for sreen remove
    fetch(`http://localhost:3000/api/screens/${screenR.id}`, {
      method: "DELETE",
    }).then(() => {
      // router.push("/template");
      window.location.reload();
    });
  };

  const components = menuList.map((d: any) =>
    d.components.map((d: any) => d.properties)
  );

  const rightTab = components[0].map((general: any) =>
    general.map((d: any) => d.api)
  );

  const innerSectionData = dragList.map((ele: any) => ele.properties);

  const saveJsonData = () => {
    // console.log("JSON ", [
    //   { projectName: project[0].name },
    //   { component: dragList },
    //   { property: innerSectionData },
    // ]);

    var json = JSON.stringify([
      { projectName: project[0].name },
      { component: dragList },
      { property: innerSectionData },
      { pages: screens2[0]?.name },
    ]);
    console.log("json >>", json);
  };

  return (
    <Grid container style={{ backgroundColor: "#2C3134", height: "2.5rem" }}>
      <Grid item xs={10} style={{ height: "1vh", marginTop: "-2rem" }}>
        <Tabs value={value} onChange={handleChange}>
          {screens?.map((screen: any) => {
            return (
              <Tab
                key={screen.id}
                icon={
                  <CloseIcon
                    style={{ fontSize: "0.9rem" }}
                    onClick={() => removeScreen(screen)}
                  />
                }
                iconPosition="end"
                label={screen.name}
                {...a11yProps(0)}
                style={{
                  textTransform: "capitalize",
                  fontSize: "0.7rem",
                  color: "white",
                  paddingTop: "0px",
                  display: "flex",
                  paddingBottom: "0.5rem",
                  alignItems: "flex-end",
                }}
              />
            );
          })}
        </Tabs>
      </Grid>
      <Grid item xs={1}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          py={0.5}
          px={0.5}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Grid item xs={1.1} mt={0.4}>
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize", height: "1.5rem" }}
              onClick={saveJsonData}
            >
              Save
            </Button>
          </Grid>
          <Stack direction="row">
            {/* <IconButton>
              <SmartphoneIcon style={{ fontSize: "1.2rem", color: "white" }} />
            </IconButton> */}
            {/* <IconButton>
              <TabletIcon style={{ fontSize: "1.2rem", color: "white" }} />
            </IconButton> */}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InnerHeaderComponent;
