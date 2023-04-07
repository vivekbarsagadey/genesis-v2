import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { ICompany } from "../../company/models";

type CompanyProps = {
  copyCompanyData: Array<ICompany>;
};

const CompanyCsvGenerator = ({ copyCompanyData }: CompanyProps) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyCompanyData}
        filename={`company-list-${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default CompanyCsvGenerator;
