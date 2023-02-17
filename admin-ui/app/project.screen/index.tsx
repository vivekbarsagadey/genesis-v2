"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import TestingCreateButton from "./create";
import TestingFilter from "./filter";
import TestingListComponent from "./list";
import TestingGridView from "./list/GridView";
import TestingSearch from "./search";
import TestingCalendarView from "./list/CalendarView";
import TestingGraphView from "./list/GraphView";
import TestingKanbanView from "./list/KanbanView";
import DownloadAll from "./list/DownloadAll";
import ViewsTestingComponent from "./view";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import { makeStyles } from "@mui/styles";

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

const TestingHome = () => {
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

  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={0.2}></Grid>
        <Grid item xs={2.7}>
          <TestingSearch
            newproject={newproject}
            setNewProject={setNewProject}
          />
        </Grid>
        <Grid item xs={0.1}></Grid>
        <Grid item xs={0.4}>
          <TestingFilter />
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
              <Typography style={{ fontSize: "0.8rem" }}>Excel</Typography>
            </MenuItem>
            <MenuItem>
              <Typography style={{ fontSize: "0.8rem" }}>PDF</Typography>
            </MenuItem>
            <MenuItem>CSV</MenuItem>
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
              <input type="file" />
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
                // onClick={sendDataHandler}
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
            <ViewsTestingComponent handleCount={handleCount} />
          </Grid>
        </Grid>

        <Grid item xs={4.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid item xs={11.5} display={"flex"} justifyContent={"flex-end"}>
            <Link href={"/testing/create"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
                style={{
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  padding: "0.2rem 1.1rem ",
                }}
              >
                Create
                <span style={{ marginLeft: "0.8rem", fontSize: "1rem" }}>
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
              // return  <GridViewComponent items={users} ></GridViewComponent>
              return (
                // <ListComponent
                //   show={show}
                //   setShow={setShow}
                //   items={users}
                //   setUsers={setUsers}
                // />

                <TestingListComponent newproject={newproject} />
              );
            case "Graph":
              return <TestingGraphView project={project}></TestingGraphView>;
            case "Kanban":
              return <TestingKanbanView project={project} />;
            case "Calendar":
              return (
                <TestingCalendarView project={project}></TestingCalendarView>
              );

            default:
              return <TestingGridView project={project}></TestingGridView>;
          }
        })()}
      </div>
      {/* project list  */}
      {/* <TestingListComponent newproject={newproject} /> */}
    </>
  );
};

export default TestingHome;
