import React from "react";
import { Typography } from "@mui/material";
import { ProjectHomeStyle as style } from "../../project/ProjectHomeStyle";
import { downloadExcel } from "react-export-table-to-excel";

const header = [
  "Id",
  "createdAt",
  "updatedAt",
  " Project Name",
  "Customer Name",
  "Application",
];
const ExcellGenerator = ({ projectData }: any) => {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: `Project ${new Date().toISOString().slice(0, 10)}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: projectData,
      },
    });
  }
  return (
    <div>
      <Typography style={style.menubtn} onClick={handleDownloadExcel}>
        Excel
      </Typography>
    </div>
  );
}; 

export default ExcellGenerator;
