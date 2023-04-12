import React from "react";
import { Chip, Paper, Stack } from "@mui/material";

const ScreenComponent = ({updateScreen,handleDelete}) => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Screen 1"
          variant="outlined"
          onClick={() => updateScreen("screen1")}
          onDelete={handleDelete}
        />
        <Chip
          label="Screen 2"
          variant="outlined"
          onClick={() => updateScreen("screen2")}
          onDelete={handleDelete}
        />
      </Stack>
    </>
  );
};

export default ScreenComponent;
