import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
const TestingGridView = () => {
  return (
    <div>
      <Tooltip title="Grid">
        <IconButton>
          <GridViewIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TestingGridView;
