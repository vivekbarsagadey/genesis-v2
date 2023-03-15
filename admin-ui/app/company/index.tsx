"use client";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import CompanyCsvGenerator from "../utility/company/csv.generator";
import CompanyExcellGenerator from "../utility/company/excell.generator";
import CompanyPdfGenerator from "../utility/company/pdf.generator";
import CompanyFilterComponent from "./filters";
import CompanyCalendarView from "./list/calendar.view";
import CompanyGraphView from "./list/graph.view";
import CompanyGridView from "./list/grid.view";
import CompanyKanbanView from "./list/kanban.view";
import ListViewComponent from "./list/list.view.component";
import CompanySearchDetails from "./search";
import CompanyViewComponent from "./view";
import ICompany from "./company.model";

type CompanyComponentProps={
  companyData: Array<ICompany>;
  copyCompanyData: Array<ICompany>;
}

const CompanyHome = ({ companyData }: CompanyComponentProps) => {
  const [copyCompanyData, setCopyComponentData] = useState(companyData); // This is a duplicate Json Data
  const [count, setCount] = useState("List");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItem, setmenuItem] = useState<null | HTMLElement>(null);
  const [companySearchList] = useState("");

  const open = Boolean(anchorEl);
  const Open = Boolean(menuItem);

  const itemsCallBackHandler = (_items: Array<ICompany>) => {
    setCopyComponentData(_items);
  };

  useEffect(() => {
    setCopyComponentData(companyData);
  }, [companyData]);

  const handleCount = (data: string) => {
    setCount(data);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickData = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmenuItem(event.currentTarget);
  };
  const handleClose1 = () => {
    setmenuItem(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={2.4} lg={3}>
          <CompanySearchDetails
            companyData={copyCompanyData}
            itemsCallBackHandler={itemsCallBackHandler}
          />
        </Grid>
        <Grid item xs={0.6} lg={0.4}>
          <Tooltip title="Filter" arrow>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
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
              <CompanyExcellGenerator copyCompanyData={copyCompanyData} />
            </MenuItem>
            <MenuItem>
              <CompanyPdfGenerator copyCompanyData={copyCompanyData} />
            </MenuItem>
            <MenuItem>
              <CompanyCsvGenerator copyCompanyData={copyCompanyData} />
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={6} lg={2} md={3.9} sm={4.5}>
          <Grid container>
            <CompanyViewComponent handleCount={handleCount} />
          </Grid>
        </Grid>
        <Grid item xs={2} lg={6.2} md={4} sm={3} display={"flex"}>
          <Grid item xs={2} lg={10.2} sm={6} mt={0.7}></Grid>
          <Grid item xs={12} lg={1} sm={12}>
            <Link href={"/company/create"} passHref>
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
                <ListViewComponent
                  companyData={copyCompanyData}
                  companySearchList={companySearchList}
                />
              );
            case "Graph":
              return <CompanyGraphView />;
            case "Kanban":
              return <CompanyKanbanView />;
            case "Calendar":
              return (
                <CompanyCalendarView
                  copyCompanyData={copyCompanyData}
                ></CompanyCalendarView>
              );
            default:
              return <CompanyGridView copyCompanyData={copyCompanyData} />;
          }
        })()}
      </div>
      <CompanyFilterComponent
        companyData={companyData}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        itemsCallBackHandler={itemsCallBackHandler}
      />
    </>
  );
};

export default CompanyHome;
