"use client";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "jspdf-autotable";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ICompany from "./company.model";
import FilterComponent from "./filters";
import GridViewComponent from "./list";
import CalenderViewComponent from "./list/CalenderViewComponent";
import GraphViewComponent from "./list/GraphViewComponent";
import ListViewComponent from "./list/ListViewComponent";
import SearchComponent from "./search";
import ViewsComponent from "./view";

interface HomeComponentProps {
  items: Array<ICompany>;
}

const HomeComponent = ({ items }: HomeComponentProps) => {
  const [count, setCount] = useState("Grid");
  const [companies, setCompanies] = useState(items);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const [checked, setChecked] = useState(false);
  const Open = Boolean(menuItem);
  const handleClickData = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmenuItem(event.currentTarget);
  };
  const handleClose1 = () => {
    setmenuItem(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setCompanies(items);
  }, [items]);

  const itemsCallBackHandler = (_items: Array<ICompany>) => {
    setCompanies(_items);
  };
  const handleCount = (data: string) => {
    setCount(data);
  };

  return (
    <>
      <Grid container spacing={2} p={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <SearchComponent
            items={companies}
            itemsCallBackHandler={itemsCallBackHandler}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          display="flex"
          alignItems="center"
        >
          <Tooltip title="Filter">
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FilterAltIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Export">
            <IconButton aria-haspopup="true" onClick={handleClickData}>
              <FileDownloadOutlinedIcon />
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
              <Typography fontSize="0.8rem">Excel</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>PDF</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>CSV</Typography>
            </MenuItem>
          </Menu>
          <ViewsComponent handleCount={handleCount} />
        </Grid>

        <Grid item xs={12} sm={2} md={2} lg={2} textAlign="right">
          {checked && (
            <IconButton>
              {" "}
              <DeleteOutlineIcon />
            </IconButton>
          )}
          <Link
            href={"/company/-1"}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Create">
              <Button variant="contained">
                <AddIcon fontSize="small" /> Create
              </Button>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={12} pl={3} pr={3} pt={1}>
        {(() => {
          switch (count) {
            case "List":
              return (
                <ListViewComponent
                  companies={companies}
                  setCompanies={setCompanies}
                  checked={checked}
                  setChecked={setChecked}
                ></ListViewComponent>
              );
            case "Graph":
              return (
                <GraphViewComponent items={companies}></GraphViewComponent>
              );
            case "Calender":
              return (
                <CalenderViewComponent
                  items={companies}
                ></CalenderViewComponent>
              );
            default:
              return <GridViewComponent items={companies} />;
          }
        })()}
      </Grid>

      <div>
        <FilterComponent
          items={items}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          itemsCallBackHandler={itemsCallBackHandler}
        />
      </div>
    </>
  );
};

export default HomeComponent;
