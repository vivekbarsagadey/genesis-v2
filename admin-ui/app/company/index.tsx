"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { ViewTypes } from "../utility";
import CompanyCsvGenerator from "../utility/company/csv.generator";
import CompanyExcellGenerator from "../utility/company/excell.generator";
import CompanyPdfGenerator from "../utility/company/pdf.generator";
import CompanyCalendarView from "./list/calendar.view";
import CompanyGraphView from "./list/graph.view";
import CompanyGridView from "./list/grid.view";
import CompanyKanbanView from "./list/kanban.view";
import ListViewComponent from "./list/list.view.component";
import {ICompany} from "./models/company.model";
import CompanySearchDetails from "./search";
import CompanyViewComponent from "./view";

interface CompanyComponentProps {
  companies: Array<ICompany>;
}

const CompanyComponentHome = ({ companies }: CompanyComponentProps) => {
  const [copyCompanies, setCopyCompanies] = useState<Array<ICompany>>([
    ...companies,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);

  const onSearchHandler = (c: Array<ICompany>) => {
    setCopyCompanies(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={1}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={3} sm={3}>
            <CompanySearchDetails
              companies={companies}
              onSearchHandler={onSearchHandler}
            />
          </Grid>
          <Grid item xs={8} md={8} sm={8} lg={8} display={"flex"}>
            <Grid container spacing={1}>
              <Grid item xs={"auto"}>
                <IconButton
                // aria-controls={open ? "basic-menu" : undefined}
                // aria-haspopup="true"
                // aria-expanded={open ? "true" : undefined}
                // onClick={}
                >
                  <FilterAltIcon fontSize={"small"} />
                </IconButton>
                {/* <CompanyFilterComponent
                  companyData={companyData}
                  anchorEl={anchorEl}
                  open={open}
                  handleClose={handleClose}
                /> */}
              </Grid>
              <Grid item xs={"auto"}>
                <Tooltip title="Export" arrow>
                  <IconButton
                  // aria-controls={Open ? "basic-menu" : undefined}
                  // aria-haspopup="true"
                  // aria-expanded={Open ? "true" : undefined}
                  // onClick={handleClickData}
                  >
                    <FileDownloadOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Menu
                // id="basic-menu"
                // anchorEl={menuItem}
                // open={Open}
                // onClose={handleClose1}
                // MenuListProps={{
                //   "aria-labelledby": "basic-button",
                // }}
                >
                  <MenuItem>
                    <CompanyExcellGenerator copyCompanyData={copyCompanies} />
                  </MenuItem>
                  <MenuItem>
                    <CompanyPdfGenerator copyCompanyData={copyCompanies} />
                  </MenuItem>
                  <MenuItem>
                    <CompanyCsvGenerator copyCompanyData={copyCompanies} />
                  </MenuItem>
                </Menu>
              </Grid>

              <Grid item xs={10}>
                <CompanyViewComponent onViewSelect={onViewSelect} />
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
            <Case condition={viewType === ViewTypes.GRID}>
              <CompanyGridView companies={copyCompanies} />
            </Case>
            <Case condition={viewType === ViewTypes.GRAPH}>
              <CompanyGraphView companies={copyCompanies} />
            </Case>
            <Case condition={viewType === ViewTypes.KANBAN}>
              <CompanyKanbanView companies={copyCompanies} />
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <CompanyCalendarView companies={copyCompanies} />
            </Case>
            <Default>
              <ListViewComponent companies={copyCompanies} />
            </Default>
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyComponentHome;
