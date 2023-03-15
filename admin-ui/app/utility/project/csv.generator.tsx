import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import IProject from "../../project/project.model";

type ProjectProps={
  copyCompanyData: Array<IProject>
}
const CsvGenerator = ({ projectData }:ProjectProps) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={projectData}
        filename={`projectData${"-list"}${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default CsvGenerator;
