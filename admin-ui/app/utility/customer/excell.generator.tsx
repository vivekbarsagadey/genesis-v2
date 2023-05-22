<<<<<<< HEAD
import { Typography } from '@mui/material';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ICustomer } from '../../customer/models';

type CustomerProps = {
  customer: Array<ICustomer>;
};

function CustomerExcellGenerator({ customer }: CustomerProps) {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const fileName = `customer-list-${new Date().toISOString().slice(0, 10)}`;
  const exportToCSV = (customerInfo: CustomerProps, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(customerInfo);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Typography
      variant="subtitle1"
      onClick={(e) => exportToCSV(customer, fileName)}
    >
      Excel
    </Typography>
  );
}
=======
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
>>>>>>> dev

export default CustomerExcellGenerator;
