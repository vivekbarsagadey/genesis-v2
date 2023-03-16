"use client";
import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, Grid, IconButton } from "@mui/material";
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

type CompanyComponentProps = {
  companyData: Array<ICompany>;
  copyCompanyData: Array<ICompany>;
};

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
    <Box sx={{ flexGrow: 1 }} mt={1}>
      <Grid container spacing={2}>
        <Grid item xs={3}   md={3} lg={3} sm={3} >
          <CompanySearchDetails
            companyData={copyCompanyData}
            itemsCallBackHandler={itemsCallBackHandler}
          />
        </Grid>
        <Grid item xs={8}>
          <div style={{ background:'red'}} >xs=4</div>
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
    </Box>
  );
};

export default CompanyHome;
