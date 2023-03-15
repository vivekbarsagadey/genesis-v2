"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CsvGenerator from "../utility/project/csv.generator";
import ExcellGenerator from "../utility/project/excell.generator";
import PdfGenerator from "../utility/project/pdf.generator";
import ProjectFilter from "./filter";
import ProjectListComponent from "./list";
import ProjectCalendarView from "./list/calendar.view";
import ProjectGraphView from "./list/graph.view";
import ProjectGridView from "./list/grid.view";
import ProjectKanbanView from "./list/kanban.view";
import IProject from "./project.model";
import ProjectSearch from "./search";
import ProjectViewComponent from "./view";

type ProjectComponentProps = {
  projectData: any;
  copyProject: any;
  _items: any;
};

const ProjectHomeComponent = ({ projectData }: ProjectComponentProps) => {
  const [copyProject, setCopyProject] = useState(projectData); // This is a duplicate Json Data
  const [count, setCount] = useState("List"); // This is a different different type of View Count (List,Grid,Calendar,etc)
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // what is anchorEl .... you should have proper name
  const [projectSearchList, setProjectSearchList] = useState("");
  const [filterSelected, setFilterSelected] = useState([]);
  const [filterChipType, setFilterChipType] = useState(false);

  const open = Boolean(anchorEl);
  const itemsCallBackHandler = (_items) => {
    setCopyProject(_items);
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
        <Grid item xs={2.4} lg={3}>
          <ProjectSearch projectSearchList={projectSearchList}/>
        </Grid>
        <Grid item xs={0.6} lg={0.4}>
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
        <Grid item xs={0.7} lg={0.37} md={0.5} sm={0.9}>
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
        <Grid item xs={6} lg={2} md={3.9} sm={4.5}>
          <Grid container>
            <ProjectViewComponent handleCount={handleCount} />
          </Grid>
        </Grid>
        <Grid item xs={2} lg={6.2} md={4} sm={3} display={"flex"}>
          <Grid item xs={2} lg={10.2} sm={6} mt={0.7}>
            {filterChipType ? (
              <>
                {filterSelected?.map((item) => {
                  return <FilterChipComponent item={item} />;
                })}
              </>
            ) : null}
          </Grid>
          <Grid item xs={12} lg={1} sm={12}>
            <Link href={"/project/create"} passHref>
              <Button variant="contained" size="small">
                Create
                <span>+</span>
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
      />
    </>
  );
};

const FilterChipComponent = ({ item }) => {
  return (
    <Chip
      variant="outlined"
      label={item}
      deleteIcon={<DeleteIcon />}
      size="small"
    />
  );
};

export default ProjectHomeComponent;
