import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TimelineIcon from "@mui/icons-material/Timeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";

const viewIconsSet = [
  {
    id: 1,
    view: "List",
    title: "List",
    icon: <ListAltIcon fontSize="small" />,
  },
  {
    id: 2,
    view: "Grid",
    title: "Grid",
    icon: <GridViewIcon fontSize="small" />,
  },
  {
    id: 3,
    view: "Graph",
    title: "Graph",
    icon: <TimelineIcon fontSize="small" />,
  },
  {
    id: 3,
    view: "Calendar",
    title: "Calendar",
    icon: <CalendarMonthIcon fontSize="small" />,
  },
  {
    id: 4,
    view: "Kanban",
    title: "Kanban",
    icon: <ViewKanbanOutlinedIcon fontSize="small" />,
  },
];
const CompanyViewComponent = ({ handleCount }) => {
  return (
    <>
      {viewIconsSet?.map((viewIcon) => {
        return <IconButton key={viewIcon.id} onClick={() => handleCount(viewIcon.view)}>{viewIcon.icon}</IconButton>;
      })}
    </>
  );
};

export default CompanyViewComponent;
