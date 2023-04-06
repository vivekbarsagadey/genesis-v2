import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import IProject from "../../project/project.model";

type ProjectProps={
  projects: Array<IProject>
}
const ProjectCsvGenerator = ({ projects }:ProjectProps) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={projects}
        filename={`projectData${"-list"}${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default ProjectCsvGenerator;
