"use client";
import React, { useState, useEffect } from "react";
import { Button, Grid, IconButton, Typography, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FilterUserComponent from "./filter";
import ListComponent from "./list";
import SearchUserComponent from "./search";
import IUser from "./user.model";
import Link from "next/link";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { createUser, deleteUser } from "./services/UserServices";
import { useRouter } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { ExcelRenderer } from "react-excel-renderer";
import { CSVLink } from "react-csv";
import Tooltip from "@mui/material/Tooltip";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { download } from "../../utils/pdf-util";
import { xlsxDownload } from "../../utils/xlsx-util";
import { makeStyles } from "@mui/styles";
import ViewsComponent from "./view";
import GraphViewComponent from "./list/GraphViewComponent";
import GridViewComponent from "./list/GridViewComponent";
import CalendarView from "./list/CalendarView";
import FilterComponent from "./filter/Filter";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import KanbanViewComponent from "./list/KanbanViewComponent";

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
  const [file, setFile] = useState(null);
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
  const removeData = (f: any) => {
    getRemove(f);
  };
  const getRemove = async (item: any) => {
    await deleteUser(item);
    router.push("/user");
  };
  const exportPDF = async () => {
    const headers = [
      [
        "First Name",
        "Last Name",
        "Mobile",
        "Email",
        "Address",
        "Country",
        "State",
        "Pin Code",
      ],
    ];
    const data = users.map((elt) => [
      elt.firstName,
      elt.lastName,
      elt.mobile,
      elt.email,
      elt.address,
      elt.country,
      elt.state,
      elt.pinCode,
    ]);
    await download({ headers: headers, items: data });
  };
  const exportToExcell = async () => {
    const fileName = "User_Templates";
    await xlsxDownload({ fileName: fileName, items: users });
  };
  const handleClickOpen = () => {
    setOpenModule(true);
  };
  const handleImportClose = () => {
    setOpenModule(false);
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
        firstName: file.rows[i][1],
        lastName: file.rows[i][2],
        address: file.rows[i][3],
        email: file.rows[i][4],
        mobile: file.rows[i][5].toString(),
        country: file.rows[i][6],
        state: file.rows[i][7],
        city: file.rows[i][8],
        pinCode: file.rows[i][9],
      };
      await createUser(users);
      handleImportClose();
    }
  };
  const handleCount = (data: string) => {
    setCount(data);
  };

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const filterOpen = Boolean(anchor);

  const filterDataClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const filterDataClose = () => {
    setAnchor(null);
  };

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
        <Grid
          item
          xs={0.6}
          lg={0.37}
          md={0.5}
          sm={0.9}
          mt={1}
          ml={1}
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
                data={items}
                filename={`users_tamplate5`}
                className={classes.csvlink}
              >
                CSV
              </CSVLink>
            </MenuItem>
          </Menu>
        </Grid>

        <Grid
          item
          xs={0.5}
          sm={1.5}
          md={0.93}
          lg={2.1}
          style={{ display: "flex", alignItems: "center" }}
          mt={0.7}
        >
          <Tooltip title="Import" arrow>
            <IconButton onClick={handleClickOpen}>
              <ImportExportOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <ViewsComponent handleCount={handleCount} />
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

        <Grid item textAlign="right" xs={6} sm={4.8} md={4.8}>
          {show && (
            <Tooltip title="Delete All" arrow>
              <IconButton aria-label="delete" onClick={() => removeData(items)}>
                <DeleteOutlineIcon />
              </IconButton>
            </Tooltip>
          )}
          <Link href={"/user/-1"} style={{ textDecoration: "none" }}>
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

        <Grid></Grid>

        <Grid container>
          <Grid item xs={12} mt={1.5} display="flex">
            <div>
              <Typography
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData?.map((data) => {
                  let icon;
                  return (
                    <>
                      {data && (
                        <ListItem key={data.key}>
                          <Chip
                            icon={icon}
                            label={data}
                            onDelete={
                              data.label === "Chip"
                                ? undefined
                                : handleDelete(data)
                            }
                          />
                        </ListItem>
                      )}
                    </>
                  );
                })}
              </Typography>
            </div>
            {/* <div style={{ marginTop: "0.2rem" }}>
              <Button
                variant="contained"
                size="small"
                className={classes.addnewbtn}
                id="basic-button"
                aria-controls={filterOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={filterOpen ? "true" : undefined}
                onClick={filterDataClick}
              >
                <span style={{ fontSize: "1rem" }}>+</span>
                Filter
              </Button>
            </div> */}
          </Grid>
        </Grid>
      </Grid>

      <div>
        {(() => {
          switch (count) {
            case "List":
              // return  <GridViewComponent items={users} ></GridViewComponent>
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

      <div>
        {/* <FilterComponent
          items={items}
          anchor={anchor}
          filterOpen={filterOpen}
          handleClose={handleClose}
          filterDataClose={filterDataClose}
          chipData={chipData}
          setChipData={setChipData}
          itemsCallBackHandler={itemsCallBackHandler}
        /> */}
      </div>
    </>
  );
};

export default HomeComponent;
