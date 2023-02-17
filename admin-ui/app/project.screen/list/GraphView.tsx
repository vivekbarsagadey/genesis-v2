import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
const TestingGraphView = () => {
  return (
    <div>
      <Tooltip title="Graph">
        <IconButton>
          <ShowChartIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TestingGraphView;
