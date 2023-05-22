<<<<<<< HEAD
import Typography from '@mui/material/Typography';
import { CSVLink } from 'react-csv';
import { ICompany } from '../../company/models';
=======
import React from "react";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { ICompany } from "../../company/models";
>>>>>>> dev

type CompanyProps = {
  copyCompanyData: Array<ICompany>;
};

function CompanyCsvGenerator({ copyCompanyData }: CompanyProps) {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyCompanyData}
        filename={`company-list-${new Date().toISOString().slice(0, 10)}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        CSV
      </CSVLink>
    </Typography>
  );
}

export default CompanyCsvGenerator;
