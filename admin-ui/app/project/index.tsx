"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { URL } from "../utility/apiurl/apiurl";
import CsvGenerator from "../utility/project/CsvGenerator";
import ExcellGenerator from "../utility/project/ExcellGenerator";
import PdfGenerator from "../utility/project/PdfGenerator";
import ProjectFilter from "./filter";
import ProjectListComponent from "./list";
import ProjectCalendarView from "./list/CalendarView";
import ProjectGraphView from "./list/GraphView";
import ProjectGridView from "./list/GridView";
import ProjectKanbanView from "./list/KanbanView";
import { ProjectHomeStyle as style } from "./ProjectHomeStyle";
import ProjectSearch from "./search";
import ProjectViewComponent from "./view";

const ProjectHomeComponent = () => {
  const [projectData, setProjectData] = useState([]); // This is a original json Data
  const [count, setCount] = useState("List"); // This is a different different type of View Count (List,Grid,Calendar,etc)
  const [copyProject, setCopyProject] = useState(projectData); // This is a duplicate Json Data
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // what is anchorEl .... you should have proper name
  const [projectSearchList, setProjectSearchList] = useState("");
  const [filterSelected, setFilterSelected] = useState([]);
  const [filterChipType, setFilterChipType] = useState(false);

  const open = Boolean(anchorEl);
  const fetchData = () => {
    fetch(`${URL}/projects`)
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setProjectData(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemsCallBackHandler = (_items: any) => {
    setProjectData(_items);
  };

  useEffect(() => {
    setCopyProject(projectData);
  }, [projectData]);

  const handleCount = (data: string) => {
    setCount(data);
  };

  const Open = Boolean(menuItem);

  const handleClickData = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmenuItem(event.currentTarget);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setmenuItem(null);
  };

  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={3}>
          <ProjectSearch
            projectSearchList={projectSearchList}
            handleCallback={setProjectSearchList}
          />
        </Grid>
        <Grid item xs={0.4}>
          <Tooltip title="Filter" arrow>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FilterAltIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={0.6} lg={0.37} md={0.5} sm={0.9}>
          <Tooltip title="Export" arrow>
            <IconButton
              aria-controls={Open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Open ? "true" : undefined}
              onClick={handleClickData}
            >
              <FileDownloadOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={menuItem}
            open={Open}
            onClose={handleClose1}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <ExcellGenerator projectData={projectData} />
            </MenuItem>
            <MenuItem>
              <PdfGenerator projectData={projectData} />
            </MenuItem>
            <MenuItem>
              <CsvGenerator projectData={projectData} />
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={2}>
          <Grid container>
            <ProjectViewComponent handleCount={handleCount} />
          </Grid>
        </Grid>
        <Grid item xs={6.2} display={"flex"}>
          <Grid item xs={9.5} mt={0.7}>
            {filterChipType ? (
              <>
                {filterSelected?.map((item: any) => {
                  return <FilterChipComponent item={item} />;
                })}
              </>
            ) : null}
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
            <Link href={"/project/create"} passHref legacyBehavior>
              <Button variant="contained" style={style.createbtn}>
                Create
                <span style={style.createspan}>+</span>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <div>
        {(() => {
          switch (count) {
            case "List":
              return (
                <ProjectListComponent
                  copyProject={copyProject}
                  projectSearchList={projectSearchList}
                />
              );
            case "Graph":
              return <ProjectGraphView></ProjectGraphView>;
            case "Kanban":
              return <ProjectKanbanView projectData={projectData} />;
            case "Calendar":
              return (
                <ProjectCalendarView
                  projectData={projectData}
                ></ProjectCalendarView>
              );
            default:
              return <ProjectGridView copyProject={copyProject} />;
          }
        })()}
      </div>
      <ProjectFilter
        projectData={projectData}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        itemsCallBackHandler={itemsCallBackHandler}
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
        setFilterChipType={setFilterChipType}
      />
    </>
  );
};

const FilterChipComponent = ({ item }) => {
  return (
    <span style={style.chip}>
      {item} <span style={style.chipcrossbutton}>x</span>{" "}
    </span>
  );
};

export default ProjectHomeComponent;
