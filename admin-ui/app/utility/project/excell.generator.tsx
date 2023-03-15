import React from "react";
import { Typography } from "@mui/material";
import { downloadExcel } from "react-export-table-to-excel";
import IProject from "../../project/project.model";

type ProjectProps={
  projectData: Array<IProject>
}

const header = [
  "Id",
  "createdAt",
  "updatedAt",
  " Project Name",
  "Customer Name",
  "Application",
];
const ExcellGenerator = ({ projectData }:ProjectProps) => {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: `Project${"-list"}${new Date().toISOString().slice(0, 10)}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: projectData,
      },
    });
  }
  return (
    <div>
      <Typography variant="subtitle1" onClick={handleDownloadExcel}>
        Excel
      </Typography>
    </div>
  );
}; 

export default ExcellGenerator;
