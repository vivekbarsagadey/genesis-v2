import React from "react";
import { Typography } from "@mui/material";
import { downloadExcel } from "react-export-table-to-excel";
import { ICustomer } from "../../customer/models";


type CustomerProps={
  customer: Array<ICustomer>
}
const header = [
  "Id",
  "createdAt",
  "updatedAt",
  " Project Name",
  "Customer Name",
  "Application",
];
const CustomerExcellGenerator = ({ customer }:CustomerProps) => {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: `customer-list-${new Date().toISOString().slice(0, 10)}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: customer,
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

export default CustomerExcellGenerator;
