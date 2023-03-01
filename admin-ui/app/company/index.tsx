"use client";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ICompany from "./company.model";
import FilterComponent from "./filters";
import ListViewComponent from "./list/ListViewComponent";
import SearchComponent from "./search";
import Link from "next/link";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createCompany } from "./services/CompanyServices";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import ViewsComponent from "./view";
import GridViewComponent from "./list";
import GraphViewComponent from "./list/GraphViewComponent";
import { xlsxDownload } from "../../utils/xlsx-util";
import { download } from "../../utils/pdf-util";
import { deleteCompany } from "./services/CompanyServices";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CalenderViewComponent from "./list/CalenderViewComponent";

const useStyles = makeStyles({
  createButton: {
    borderRadius: "1.5rem",
    textTransform: "capitalize",
  },
});
interface HomeComponentProps {
  items: Array<ICompany>;
}

const HomeComponent = ({ items }: HomeComponentProps) => {
  const [count, setCount] = useState("Grid");
  const [companies, setCompanies] = useState(items);
  const [file, setFile] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuItem, setmenuItem] = React.useState<null | HTMLElement>(null);
  const [checked, setChecked] = useState(false);
  const Open = Boolean(menuItem);
  // for import popup
  const [openModule, setOpenModule] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModule(true);
  };

  const handleImportClose = () => {
    setOpenModule(false);
  };

  //
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
  const classes = useStyles();

  const fileHandler = (event: any) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (!err) {
        setFile({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  const sendDataHandler = async () => {
    for (let i = 1; i < file.rows.length; i++) {
      //  const row = file.rows[i];
      const company = {
        name: file.rows[i][1],
        address: file.rows[i][2],
        email: file.rows[i][3],
        mobile: file.rows[i][4].toString(),
        country: file.rows[i][5],
        state: file.rows[i][6],
        city: file.rows[i][7],
        pinCode: file.rows[i][8],
      };
      await createCompany(company);
      handleImportClose();
    }
  };

  const exportPDF = async () => {
    const headers = [
      [
        " COMPANY NAME",
        "EMAIL",
        "CONTACT",
        "ADDRESS",
        "COUNTRY",
        "STATE",
        "CITY",
        "PINCODE",
      ],
    ];
    const title = "Companies Report";
    const fileName = "companies.pdf";
    const data = items.map((elt) => [
      elt.name,
      elt.email,
      elt.mobile,
      elt.address,
      elt.country,
      elt.state,
      elt.city,
      elt.pinCode,
    ]);
    await download({
      headers: headers,
      items: data,
      title: title,
      fileName: fileName,
    });
    setmenuItem(null);
  };

  const exportToXLSX = async (items: any) => {
    const fileName = "Companies";
    await xlsxDownload({ fileName: fileName, items: items });
    setmenuItem(null);
  };

  const handleCount = (data: string) => {
    setCount(data);
  };

  const removeItem = async (companies: any) => {
    await deleteCompany(companies);
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
          <Tooltip title="Import">
            <IconButton onClick={handleClickOpen}>
              <ImportExportOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Dialog
            open={openModule}
            onClose={() => setOpenModule(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <input type="file" onChange={fileHandler} />
              <Typography pt={1}>
                for Example.{" "}
                <Link
                  href={"/tamplate/campanies_tamplate5.xlsx"}
                  download="campanies_tamplate5.xlsx"
                >
                  click here?
                </Link>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenModule(false)}>Cancel</Button>
              <Button onClick={sendDataHandler} autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <Tooltip title="Export">
            <IconButton
              aria-controls={Open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Open ? "true" : undefined}
              onClick={handleClickData}
            >
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
              <Typography
                fontSize="0.8rem"
                onClick={(e) => exportToXLSX(items)}
              >
                Excel
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize="0.8rem" onClick={() => exportPDF()}>
                PDF
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography fontSize="0.8rem" onClick={handleClose1}>
                <CSVLink
                  data={items}
                  filename={`Companies_tamplate`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CSV
                </CSVLink>
              </Typography>
            </MenuItem>
          </Menu>
          <ViewsComponent handleCount={handleCount} />
        </Grid>

        <Grid item xs={12} sm={2} md={2} lg={2} textAlign="right">
          {checked && (
            <IconButton onClick={() => removeItem(items)}>
              {" "}
              <DeleteOutlineIcon />
            </IconButton>
          )}
          <Link href={"/company/-1"} style={{ textDecoration: "none" }}>
            <Tooltip title="Create">
              <Button variant="contained" className={classes.createButton}>
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
