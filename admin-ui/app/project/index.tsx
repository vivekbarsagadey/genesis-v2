"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { downloadExcel } from "react-export-table-to-excel";
import { download } from "../../utils/pdf-util";
import ProjectFilter from "./filter";
import ProjectListComponent from "./list";
import ProjectCalendarView from "./list/CalendarView";
import ProjectGraphView from "./list/GraphView";
import ProjectGridView from "./list/GridView";
import ProjectKanbanView from "./list/KanbanView";
import IProject from "./project.model";
import ProjectSearch from "./search";
import ProjectViewComponent from "./view";
const useStyles = makeStyles({
  addnewbtn: {
    textTransform: "capitalize",
    borderRadius: "20px",
    fontWeight: "bold",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    background: "#FFC107",
    "&:hover": {
      background: "#FFC107",
    },
  },
  savebtn: {
    width: "0.9rem",
    height: "1.7rem",
    fontSize: "0.8rem",
    textTransform: "capitalize",
  },
  cancelbtn: {
    width: "0.9rem",
    height: "1.7rem",
    fontSize: "0.8rem",
    textTransform: "capitalize",
  },
  csvlink: {
    fontSize: "0.8rem",
    color: "black",
    textDecoration: "none",
  },
  chip: {
    fontSize: "0.7rem",
    marginRight: "0.5rem",
    background: "#e2e8f0",
    padding: "0.3rem",
    borderRadius: "20px",
  },
});
const ProjectHomeComponent = () => {
  const classes = useStyles();
  const [project, setProject] = useState([]); // This is a original json Data
  const [count, setCount] = useState("List"); // This is a different different type of View Count (List,Grid,Calendar,etc)
  const [newproject, setNewProject] = useState(project); // This is a duplicate Json Data
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // what is anchorEl .... you should have proper name
  const [listSearch, setListSearch] = useState("");
  const [filterSelected, setFilterSelected] = useState([]);
  const [filterChipType, setFilterChipType] = useState(false);

  const open = Boolean(anchorEl);
  const header = [
    "Id",
    "createdAt",
    "updatedAt",
    " Project Name",
    "Customer Name",
    "Application",
  ];
  const fetchData = () => {
    fetch("http://localhost:3000/api/projects")
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setProject(d);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const itemsCallBackHandler = (_items: Array<IProject>) => {
    setProject(_items);
  };
  useEffect(() => {
    setNewProject(project);
  }, [project]);
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

  const exportPDF = async () => {
    const fileName = `Project ${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Project Name", "Customer Name", "Application"]];
    const pdfSendData = project.map((elt) => [
      elt.name,
      elt.customerName,
      elt.application,
    ]);
    await download({
      headers: headers,
      project: pdfSendData,
      fileName: fileName,
    });
  };
  function handleDownloadExcel() {
    downloadExcel({
      fileName: `Project ${new Date().toISOString().slice(0, 10)}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: project,
      },
    });
  }

  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={2.9}>
          <ProjectSearch
            listSearch={listSearch}
            setListSearch={setListSearch}
          />
        </Grid>
        <Grid item xs={0.1}></Grid>
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
        <Grid
          item
          xs={0.6}
          lg={0.37}
          md={0.5}
          sm={0.9}
          style={{ display: "flex", alignItems: "center" }}
        >
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
              <Typography
                style={{ fontSize: "0.8rem" }}
                onClick={handleDownloadExcel}
              >
                Excel
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                style={{ fontSize: "0.8rem" }}
                onClick={() => exportPDF()}
              >
                PDF
              </Typography>
            </MenuItem>
            <MenuItem>
              <CSVLink
                data={project}
                filename={`Project ${new Date().toISOString().slice(0, 10)}`}
                className={classes.csvlink}
              >
                CSV
              </CSVLink>
            </MenuItem>
          </Menu>
        </Grid>
        {/* Import Functionality */}
        <Grid item xs={2}>
          <Grid container>
            <ProjectViewComponent handleCount={handleCount} />
          </Grid>
        </Grid>
        <Grid item xs={6.2} display={"flex"}>
          <Grid item xs={9.5} mt={0.7}>
            {filterChipType ? (
              <>
                {filterSelected?.map((item: any, index) => {
                  return (
                    <span key={index} className={classes.chip} style={{}}>
                      {" "}
                      {item}{" "}
                      <span
                        style={{
                          background: "black",
                          color: "white",
                          borderRadius: "50%",
                          padding: "0 0.2rem 0.1rem 3px",
                          marginLeft: "0.5rem",
                          cursor: "pointer",
                        }}
                      >
                        x
                      </span>{" "}
                    </span>
                  );
                })}
              </>
            ) : null}
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
            <Link href={"/project/create"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
                style={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  padding: "0.2rem 0.7rem ",
                }}
              >
                Create
                <span style={{ marginLeft: "0.8rem", fontSize: "0.9rem" }}>
                  +
                </span>
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
                  newproject={newproject}
                  listSearch={listSearch}
                />
              );
            case "Graph":
              return <ProjectGraphView project={project}></ProjectGraphView>;
            case "Kanban":
              return <ProjectKanbanView project={project} />;
            case "Calendar":
              return (
                <ProjectCalendarView project={project}></ProjectCalendarView>
              );
            default:
              return (
                <ProjectGridView newproject={newproject}></ProjectGridView>
              );
          }
        })()}
      </div>
      <ProjectFilter
        project={project}
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
export default ProjectHomeComponent;
