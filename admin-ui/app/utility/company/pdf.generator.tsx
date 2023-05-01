import React from 'react';
import { Typography, Grid } from '@mui/material';
import { download } from '../pdf-util';
import { ICompany } from '../../company/models';

type CompanyProps = {
  copyCompanyData: Array<ICompany>;
};

function CompanyPdfGenerator({ copyCompanyData }: CompanyProps) {
  const exportPDF = async () => {
    const fileName = `company-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [['Company Name', 'Email', 'Contact', 'Address']];
    const pdfSendData = copyCompanyData?.map((elt) => [
      elt.name,
      elt.email,
      elt.mobile,
      elt.address,
    ]);
    await download({
      headers,
      pdfSendData,
      fileName,
    });
  };
  return (
    <Grid>
      <Typography variant="subtitle1" onClick={() => exportPDF()}>
        PDF
      </Typography>
    </Grid>
  );
}

export default CompanyPdfGenerator;
