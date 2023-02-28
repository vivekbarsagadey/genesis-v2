import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TimelineIcon from "@mui/icons-material/Timeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
interface IViewProps {
  handleCount: () => void;
}

const AllViews = [
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
const ProjectViewComponent = ({ handleCount }: IViewProps) => {
  return (
    <>
      {AllViews?.map((data) => {
        return (
          <div key={data.id} style={{ margin: "0.2rem" }}>
            <Tooltip title={data?.title}>
              <IconButton size="small" onClick={() => handleCount(data.view)}>
                {data.icon}
              </IconButton>
            </Tooltip>
          </div>
        );
      })}
    </>
  );
};

export default ProjectViewComponent;
