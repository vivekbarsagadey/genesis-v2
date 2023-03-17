import React from "react";
import { Typography } from "@mui/material";
import { downloadExcel } from "react-export-table-to-excel";
import ICompany from "../../company/company.model";

type CompanyProps={
  copyCompanyData: Array<ICompany>
}
const header = [
  "Id",
  "createdAt",
  "updatedAt",
  " Project Name",
  "Customer Name",
  "Application",
];
const CompanyExcellGenerator = ({ copyCompanyData }:CompanyProps) => {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: `company-list-${new Date().toISOString().slice(0, 10)}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: copyCompanyData,
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

export default CompanyExcellGenerator;
