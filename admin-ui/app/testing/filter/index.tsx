import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const TestingFilter = () => {
  return (
    <div>
      <Tooltip title="Filter">
      <IconButton>
        <FilterAltIcon fontSize={"small"} />
      </IconButton>
      </Tooltip>
    </div>
  );
};

export default TestingFilter;
