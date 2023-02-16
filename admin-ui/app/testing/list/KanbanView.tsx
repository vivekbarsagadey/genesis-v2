import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
const TestingKanbanView = () => {
  return (
    <div>
      <Tooltip title="Kanban">
        <IconButton>
          <ViewKanbanIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TestingKanbanView;
