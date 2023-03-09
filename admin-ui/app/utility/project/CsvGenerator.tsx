import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";

const CsvGenerator = ({ projectData }:any) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={projectData}
        filename={`projectData ${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default CsvGenerator;
