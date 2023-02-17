import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const TestingCalendarView = ({project}) => {
  return (
    <div>
      <Tooltip title="Calendar">
        <IconButton>
          <CalendarMonthIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TestingCalendarView;
