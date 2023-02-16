import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
const TestingGridView = () => {
  return (
    <div>
      <Tooltip title="Grid">
        <IconButton>
          <GridOnIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TestingGridView;
