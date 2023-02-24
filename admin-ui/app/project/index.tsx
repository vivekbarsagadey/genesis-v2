"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import { Button, Grid, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { download } from "../../utils/pdf-util";
import { xlsxDownload } from "../../utils/xlsx-util";
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
});

const ProjectHomeComponent = () => {
  const classes = useStyles();
  const [project, setProject] = useState([]);
  const [count, setCount] = useState("List");
  const [newproject, setNewProject] = useState(project);
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModule, setOpenModule] = React.useState(false);
  const open = Boolean(anchorEl);

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

  const handleClickOpen = () => {
    setOpenModule(true);
  };
  const handleImportClose = () => {
    setOpenModule(false);
  };

  const exportToExcell = async () => {
    const fileName = "User_Templates";
    await xlsxDownload({ fileName: fileName, project: project });
  };

  const exportPDF = async () => {
    const headers = [["Project Name", "Customer Name", "Application"]];
    const data = project.map((elt) => [
      elt.name,
      elt.customerName,
      elt.application,
    ]);
    await download({ headers: headers, project: data });
  };

  const fileHandler = (event: any) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
      } else {
        setFile({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  const sendDataHandler = async () => {
    for (let i = 1; i < file?.rows.length; i++) {
      const users = {
        name: file.rows[i][1],
        customerName: file.rows[i][2],
        application: file.rows[i][3],
      };
      await createUser(users);
      handleImportClose();
    }
  };
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={2.9}>
          <ProjectSearch
            newproject={newproject}
            setNewProject={setNewProject}
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
                onClick={exportToExcell}
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
                filename={`project_tamplate5`}
                className={classes.csvlink}
              >
                CSV
              </CSVLink>
            </MenuItem>
          </Menu>
        </Grid>

        <Grid item xs={0.5} sm={1.5} md={0.93} lg={0.4}>
          <Tooltip title="Import" arrow>
            <IconButton onClick={handleClickOpen}>
              <ImportExportOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {/* <ViewsComponent handleCount={handleCount} /> */}
          <Dialog
            open={openModule}
            onClose={() => setOpenModule(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <input type="file" onChange={fileHandler} />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenModule(false)}
                variant="contained"
                className={classes.cancelbtn}
              >
                Cancel
              </Button>
              <Button
                onClick={sendDataHandler}
                autoFocus
                variant="contained"
                className={classes.savebtn}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        <Grid item xs={2.8}>
          <Grid container>
            <ProjectViewComponent handleCount={handleCount} />
          </Grid>
        </Grid>

        <Grid item xs={4.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid item xs={11.5} display={"flex"} justifyContent={"flex-end"}>
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
              return <ProjectListComponent newproject={newproject} />;
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
      />
    </>
  );
};

export default ProjectHomeComponent;
