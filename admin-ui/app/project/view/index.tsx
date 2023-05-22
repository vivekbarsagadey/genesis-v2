<<<<<<< HEAD
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GridViewIcon from '@mui/icons-material/GridView';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import { Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { ViewTypes } from '../../utility';


=======
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TimelineIcon from "@mui/icons-material/Timeline";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { ViewTypes } from "../../utility";

>>>>>>> dev
const viewIconsSet = [
  {
    id: 1,
    view: ViewTypes.LIST,
<<<<<<< HEAD
    title: 'List',
    icon: (
      <Tooltip title="List">
        <ListAltIcon fontSize="small" />
      </Tooltip>
    ),
=======
    title: "List",
    icon: <ListAltIcon fontSize="small" />,
>>>>>>> dev
  },
  {
    id: 2,
    view: ViewTypes.GRID,
<<<<<<< HEAD
    title: 'Grid',
    icon: (
      <Tooltip title="Grid">
        <GridViewIcon fontSize="small" />
      </Tooltip>
    ),
=======
    title: "Grid",
    icon: <GridViewIcon fontSize="small" />,
>>>>>>> dev
  },
  {
    id: 3,
    view: ViewTypes.GRAPH,
<<<<<<< HEAD
    title: 'Graph',
    icon: (
      <Tooltip title="Graph">
        <TimelineIcon fontSize="small" />
      </Tooltip>
    ),
  },
  {
    id: 4,
    view: ViewTypes.CALENDAR,
    title: 'Calendar',
    icon: (
      <Tooltip title="Calendar">
        <CalendarMonthIcon fontSize="small" />
      </Tooltip>
    ),
  },
  {
    id: 5,
    view: ViewTypes.KANBAN,
    title: 'Kanban',
    icon: (
      <Tooltip title="Kanban">
        <ViewKanbanOutlinedIcon fontSize="small" />
      </Tooltip>
    ),
  },
];
=======
    title: "Graph",
    icon: <TimelineIcon fontSize="small" />,
  },
  {
    id: 4,
    view: ViewTypes.CALENDAR,
    title: "Calendar",
    icon: <CalendarMonthIcon fontSize="small" />,
  },
  {
    id: 5,
    view: ViewTypes.KANBAN,
    title: "Kanban",
    icon: <ViewKanbanOutlinedIcon fontSize="small" />,
  },
];

interface ProjectViewComponentProps {
  onViewSelect: (_: ViewTypes) => void;
}

const ProjectViewComponent = ({ onViewSelect }: ProjectViewComponentProps) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <>
      <Stack direction="row">
        {viewIconsSet.map((item) => {
          return (
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              key={item.id}
            >
              <ToggleButton
                value={item.id}
                aria-label="left aligned"
                key={item.id}
                onClick={() => onViewSelect(item.view)}
                style={{
                  border: "none",
                  borderRadius: "50%",
                  background: "transparent",
                }}
              >
                {item.icon}
              </ToggleButton>
            </ToggleButtonGroup>
          );
        })}
      </Stack>
    </>
  );
};
>>>>>>> dev

interface CompanyViewComponentProps {
  onViewSelect: (_: ViewTypes) => void;
}

function CompanyViewComponent({ onViewSelect }: CompanyViewComponentProps) {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Stack direction="row" >
      {viewIconsSet.map((item) => (
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          key={item.id}
        >
          <ToggleButton
            value={item.id}
            aria-label="left aligned"
            key={item.id}
            onClick={() => onViewSelect(item.view)}
            style={{
              border: 'none',
              borderRadius: '50%',
              background: 'transparent',
            }}
          >
            {item.icon}
          </ToggleButton>
        </ToggleButtonGroup>
      ))}
    </Stack>
  );
}

export default CompanyViewComponent;
