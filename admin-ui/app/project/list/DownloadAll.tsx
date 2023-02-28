import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const DownloadAll = () => {
  return (
    <div>
      <Tooltip title="Download All">
        <IconButton>
          <DownloadIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DownloadAll;
