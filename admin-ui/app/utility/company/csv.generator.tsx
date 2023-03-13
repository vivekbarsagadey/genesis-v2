import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";

const CompanyCsvGenerator = ({ copyCompanyData }:any) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyCompanyData}
        filename={`CompanyData ${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default CompanyCsvGenerator;
