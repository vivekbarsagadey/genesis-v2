"use client";
import { Grid } from "@material-ui/core";
import { Chip, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState, useEffect, createContext } from "react";
import { Case, Switch } from "react-if";
import Logo from "../component/common/Sidebar/logo";
import SidebarComponent from "./menu/sidebar/sidebar.component";
import { findById } from "../services/api.service";
import BuilderHeaderComponent from "./header/header";
import BuilderSidebarComponent from "./menu/sidebar/builder.sidebar.component";
import PropertiesComponent from "./screens/properties.component";
import ScreenComponent from "./screens/screen.component";
import ScreenSelectComponent from "./screens/screen.select.component";
import genisys from "../data/genisys.json";
export const ProjectContext = createContext();

const BuilderHome = ({ id }) => {
  const [projectInfo, setProjectInfo] = useState([]);
  const info = findById("projects", id);
  useEffect(() => {
    info
      .then((res) => {
        setProjectInfo(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const [toggleMenu, setToggleMenu] = useState(true);
  const [screenToggle, setScreenToggle] = useState<string>("");
  const [componentId, setComponentId] = useState(null);
  const [gridVal, setGridVal] = useState([]);
  const [componentVal, setComponentVal] = useState([]);

  const getComponentId = (idRecv: string) => {
    setComponentId(idRecv);
    setComponentVal([...componentVal, idRecv]);
  };

  const getGridId = (idRecv: string) => {
    setGridVal([...gridVal, idRecv]);
  };

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const updateScreen = (typeRec: string) => {
    setScreenToggle(typeRec);
  };

  return (
    <ProjectContext.Provider value={componentId}>
      <Box>
        <Grid container>
          <Grid item xs={2}>
            <Logo handleMenu={handleMenu} toggleMenu={toggleMenu} />
            <SidebarComponent
              toggleMenu={toggleMenu}
              getComponentId={getComponentId}
              getGridId={getGridId}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid item xs={12}>
              <BuilderHeaderComponent projectInfo={projectInfo} />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} style={{ display: "flex" }}>
                  <ScreenComponent
                    updateScreen={updateScreen}
                    handleDelete={handleDelete}
                  />
                </Grid>
                <Grid
                  item
                  xs={9}
                  style={{
                    background: "#64748b",
                    height: "82vh",
                  }}
                >
                  <ScreenSelectComponent
                    screenToggle={screenToggle}
                    gridVal={gridVal}
                    componentVal={componentVal}
                  />
                </Grid>
                <Grid item xs={3}>
                  <PropertiesComponent />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ProjectContext.Provider>
  );
};
export default BuilderHome;
