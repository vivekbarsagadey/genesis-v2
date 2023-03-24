import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TimelineIcon from "@mui/icons-material/Timeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import { ViewTypes } from "../../utility";

const viewIconsSet = [
  {
    id: 1,
    view: ViewTypes.LIST,
    title: "List",
    icon: <ListAltIcon fontSize="small" />,
  },
  {
    id: 2,
    view: ViewTypes.GRID,
    title: "Grid",
    icon: <GridViewIcon fontSize="small" />,
  },
  {
    id: 3,
    view: ViewTypes.GRAPH,
    title: "Graph",
    icon: <TimelineIcon fontSize="small" />,
  },
  {
    id: 3,
    view: ViewTypes.CALENDAR,
    title: "Calendar",
    icon: <CalendarMonthIcon fontSize="small" />,
  },
  {
    id: 4,
    view: ViewTypes.KANBAN,
    title: "Kanban",
    icon: <ViewKanbanOutlinedIcon fontSize="small" />,
  },
];

interface CompanyViewComponentProps {
  onViewSelect: (_: ViewTypes) => void;
}

const CompanyViewComponent = ({ onViewSelect }: CompanyViewComponentProps) => {
  return (
    <>
      {viewIconsSet.sort(s=>s.id).map((viewIcon) => {
        return (
          <IconButton
            key={viewIcon.id}
            onClick={() => onViewSelect(viewIcon.view)}
          >
            {viewIcon.icon}
          </IconButton>
        );
      })}
    </>
  );
};

export default CompanyViewComponent;
