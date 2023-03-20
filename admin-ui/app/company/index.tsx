"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Case, Default, Switch } from "react-if";
import CompanyCsvGenerator from "../utility/company/csv.generator";
import CompanyExcellGenerator from "../utility/company/excell.generator";
import CompanyPdfGenerator from "../utility/company/pdf.generator";
import ICompany from "./company.model";
import CompanyFilterComponent from "./filters";
import CompanyCalendarView from "./list/calendar.view";
import CompanyGraphView from "./list/graph.view";
import CompanyGridView from "./list/grid.view";
import CompanyKanbanView from "./list/kanban.view";
import ListViewComponent from "./list/list.view.component";
import CompanySearchDetails from "./search";
import CompanyViewComponent from "./view";

type CompanyComponentProps = {
  companyData: Array<ICompany>;
  copyCompanyData: Array<ICompany>;
};

const CompanyHome = ({ companyData }: CompanyComponentProps) => {
  const [copyCompanyData, setCopyComponentData] = useState(companyData); // This is a duplicate Json Data
  const [count, setCount] = useState("List");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItem, setmenuItem] = useState<null | HTMLElement>(null);
  const [searchCompany, setSearchCompany] = useState("");

  const open = Boolean(anchorEl);
  const Open = Boolean(menuItem);

 

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
  const getSearchedCompanyName = (_searchCompanyRecv) => {
    setSearchCompany(_searchCompanyRecv);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={1}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <CompanySearchDetails
              getSearchedCompanyName={getSearchedCompanyName}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container spacing={1}>
              <Grid item xs={"auto"}>
                <IconButton
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <FilterAltIcon fontSize={"small"} />
                </IconButton>
                <CompanyFilterComponent
                  companyData={companyData}
                  anchorEl={anchorEl}
                  open={open}
                  handleClose={handleClose}
                />
              </Grid>
              <Grid item xs={"auto"}>
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

              <Grid item xs={10}>
                <CompanyViewComponent handleCount={handleCount} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Link href={"/company/create"} passHref>
              <Button variant="contained" size="small">
                Create
                <span>+</span>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Case condition={count === "Grid"}>
              <CompanyGridView
                copyCompanyData={copyCompanyData}
                searchCompany={searchCompany}
              />
            </Case>
            <Case condition={count === "Graph"}>
              <CompanyGraphView />
            </Case>
            <Case condition={count === "Kanban"}>
              <CompanyKanbanView />
            </Case>
            <Case condition={count === "Calendar"}>
              <CompanyCalendarView copyCompanyData={copyCompanyData} />
            </Case>
            <Default>
              <ListViewComponent
                companyData={copyCompanyData}
                searchCompany={searchCompany}
              />
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyHome;
