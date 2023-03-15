"use client";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";





const InnerHeaderComponent = ({
  handleChange,
  value,
  dragList,
  a11yProps,
  screens,
  project,
  menuList,
}) => {
  const router = useRouter();

  // get call for Screen Name
  const [screenName, setScreenName] = React.useState("");
  const fetchData = () => {
    fetch(`${URL}/screens`)
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setScreenName(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);



  const removeScreen = (screenR) => {
    // DEL Call for sreen remove
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/screens/${screenR.id}`, {
      method: "DELETE",
    }).then(() => {
      // router.push("/template");
      window.location.reload();
    });
  };

  const components = menuList?.map((d) =>
    d.components?.map((d) => d.properties)
  );

  const rightTab = components[0]?.map((general) =>
    general?.map((d) => d.api)
  );

  const innerSectionData = dragList?.map((ele) => ele.properties);

  const saveJsonData = () => {
    var json = JSON.stringify([
      { projectName: project[0].name },
      { component: dragList },
      { property: innerSectionData },
      { pages: screenName[0]?.name },
    ]);
  };

  return (
    <Grid
      container

    >
      <Grid item lg={10.15} xs={9} sm={9.5}>
        <Tabs value={value} onChange={handleChange}>
          {screens?.map((screen) => {
            return (
              <Tab
                key={screen.id}
                icon={
                  <CloseIcon
                    onClick={() => removeScreen(screen)}
                  />
                }
                iconPosition="end"
                label={screen.name}
                {...a11yProps(0)}
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
          <Grid item lg={1.1} mt={0.8}>
            <Button
              variant="contained"
              size="small"
              onClick={saveJsonData}
            >
              Save
            </Button>
          </Grid>
          <Stack direction="row">
         
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InnerHeaderComponent;
