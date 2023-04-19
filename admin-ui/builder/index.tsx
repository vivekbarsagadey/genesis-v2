"use client"
import {Box,Grid} from "@mui/material";
import { createContext, useEffect, useState } from "react";
import Logo from "../component/common/sidebar/logo";
import { findById } from "../services/api.service";
import BuilderHeaderComponent from "./header/header";
import SidebarComponent from "./menu/sidebar/sidebar.component";
import PropertiesComponent from "./screens/properties.component";
import ScreenComponent from "./screens/screen.component";
import ScreenSelectComponent from "./screens/screen.select.component";

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
  const [sectionalData, setSectionalData] = useState("");
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
  const updateSectionData = (typeRecv: string) => {
    setSectionalData(typeRecv);
  };
  
  return (
    <ProjectContext.Provider value={sectionalData}>
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
                    updateSectionData={updateSectionData}
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
