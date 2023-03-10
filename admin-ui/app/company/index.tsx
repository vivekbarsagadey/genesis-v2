"use client";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import CompanyFilterComponent from "./filters";
import CompanyCalendarView from "./list/calendar.view";
import CompanyGraphView from "./list/graph.view";
import CompanyGridView from "./list/grid.view";
import CompanyKanbanView from "./list/kanban.view";
import ListViewComponent from "./list/list.view.component";
import CompanySearchDetails from "./search";
import CompanyViewComponent from "./view";

const CompanyHome = () => {
  const [companyData, setCompanyData] = useState([]); // This is a original json Data
  const [copyCompanyData, setCopyComponentData] = useState(companyData); // This is a duplicate Json Data
  const [count, setCount] = useState("List"); // This is a different different type of View Count (List,Grid,Calendar,etc)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const fetchData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`)
      .then((r) => {
        return r.json();
      })
      .then((d) => {
        setCompanyData(d);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const itemsCallBackHandler = (_items) => {
  //   setCompanyData(_items);
  // };
  useEffect(() => {
    setCopyComponentData(companyData);
  }, [companyData]);

  const handleCount = (data: string) => {
    setCount(data);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={2.4} lg={3}>
          <CompanySearchDetails />
        </Grid>
        <Grid item xs={0.6} lg={0.4}>
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
        <Grid item xs={0.7} lg={0.37} md={0.5} sm={0.9}>
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
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              {/* <ExcellGenerator projectData={projectData} /> */}
            </MenuItem>
            <MenuItem>
              {/* <PdfGenerator projectData={projectData} /> */}
            </MenuItem>
            <MenuItem>
              {/* <CsvGenerator projectData={projectData} /> */}
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={6} lg={2} md={3.9} sm={4.5}>
          <Grid container>
            {/* <ProjectViewComponent handleCount={handleCount} /> */}
            <CompanyViewComponent handleCount={handleCount} />
          </Grid>
        </Grid>
        <Grid item xs={2} lg={6.2} md={4} sm={3} display={"flex"}>
          <Grid item xs={2} lg={10.2} sm={6} mt={0.7}>
            {/* {filterChipType ? (
              <>
                {filterSelected?.map((item) => {
                  return <FilterChipComponent item={item} />;
                })}
              </>
            ) : null} */}
          </Grid>
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
              return <ListViewComponent copyCompanyData={copyCompanyData} />;
            case "Graph":
              return <CompanyGraphView />;
            case "Kanban":
              return <CompanyKanbanView />;
            case "Calendar":
              return <CompanyCalendarView copyCompanyData={copyCompanyData}></CompanyCalendarView>;
            default:
              return <CompanyGridView copyCompanyData={copyCompanyData}/>;
          }
        })()}
      </div>

      <CompanyFilterComponent
        anchorEl={anchorEl}
        open={open}
        // handleClose={handleClose}
      />
    </>
  );
};

export default CompanyHome;
