"use client";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CsvGenerator from "../utility/project/CsvGenerator";
import ExcellGenerator from "../utility/project/ExcellGenerator";
import PdfGenerator from "../utility/project/PdfGenerator";
import FilterUserComponent from "./filter";
import ListComponent from "./list";
import CalendarView from "./list/calendar.view";
import GraphViewComponent from "./list/graph.view.component";
import GridViewComponent from "./list/grid.view.component";
import KanbanViewComponent from "./list/kanban.view.component";
import SearchUserComponent from "./search";
import IUser from "./user.model";

const useStyles = makeStyles({
  addnewbtn: {
    textTransform: "capitalize",
    borderRadius: "20px",
    fontWeight: "bold",
    paddingLeft: "0.7rem",
    paddingRight: "0.7rem",
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

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

interface HomeComponentProps {
  items: Array<IUser>;
  users: Array<IUser>;
}
const HomeComponent = ({ items }: HomeComponentProps) => {
  const classes = useStyles();
  const [count, setCount] = useState("List");
  const [users, setUsers] = useState(items);
  const [show, setShow] = useState(false);
  const [openModule, setOpenModule] = React.useState(false);
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (data: string) => () => {
    setChipData([...chipData.filter((item) => item !== data)]);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Open = Boolean(menuItem);
  const handleClickData = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmenuItem(event.currentTarget);
  };
  const handleClose1 = () => {
    setmenuItem(null);
  };
  useEffect(() => {
    setUsers(items);
  }, [items]);

  //callback handler
  const itemsCallBackHandler = (_items: Array<IUser>) => {
    setUsers(_items);
  };
  const removeData = (f) => {
    getRemove(f);
  };
  const getRemove = async (item) => {
    await deleteUser(item);
    router.push("/user");
  };

  const handleClickOpen = () => {
    setOpenModule(true);
  };
  const handleImportClose = () => {
    setOpenModule(false);
  };

  const handleCount = (data: string) => {
    setCount(data);
  };

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  return (
    <>
      <Grid container mt={2} px={2.5} alignItems="center">
        <Grid item xs={12} lg={4.2} md={8} sm={12} mt={1}>
          <SearchUserComponent
            items={users}
            itemsCallBackHandler={itemsCallBackHandler}
          />
        </Grid>
        <Grid item xs={0.13}></Grid>
        <Grid item xs={0.6} lg={0.3} md={0.5} sm={0.5} mt={1.3}>
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
        <Grid item xs={0.6} lg={0.37} md={0.5} sm={0.9} mt={1} ml={1}>
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
              <ExcellGenerator />
            </MenuItem>
            <MenuItem>
              <PdfGenerator />
            </MenuItem>
            <MenuItem>
              <CsvGenerator />
            </MenuItem>
          </Menu>
        </Grid>

        <Grid item textAlign="right" xs={6} sm={4.8} md={4.8}>
          {show && (
            <Tooltip title="Delete All" arrow>
              <IconButton aria-label="delete" onClick={() => removeData(items)}>
                <DeleteOutlineIcon />
              </IconButton>
            </Tooltip>
          )}
          <Link href={"/user/-1"}>
            <Button variant="contained" size="small">
              Create
              <span>+</span>
            </Button>
          </Link>
        </Grid>
      </Grid>

      <div>
        {(() => {
          switch (count) {
            case "List":
              return (
                <ListComponent
                  show={show}
                  setShow={setShow}
                  items={users}
                  setUsers={setUsers}
                />
              );
            case "Graph":
              return <GraphViewComponent items={users}></GraphViewComponent>;
            case "Kanban":
              return <KanbanViewComponent items={users} />;
            case "Calendar":
              return <CalendarView items={users}></CalendarView>;
            default:
              return <GridViewComponent items={users}></GridViewComponent>;
          }
        })()}
      </div>

      <div>
        <FilterUserComponent
          items={items}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          itemsCallBackHandler={itemsCallBackHandler}
        />
      </div>

      <div></div>
    </>
  );
};

export default HomeComponent;
