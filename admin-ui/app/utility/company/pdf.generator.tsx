import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";
import ICompany from "../../company/company.model";


interface CompanyComponentProps {
  copyCompanyData: Array<ICompany>;
}

const CompanyPdfGenerator = ({ copyCompanyData }:CompanyComponentProps) => {
  const exportPDF = async () => {
    const fileName = `Project ${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Company Name", "Email", "Contact", "Address"]];
    const pdfSendData = copyCompanyData?.map((elt) => [
      elt.name,
      elt.email,
      elt.mobile,
      elt.address,
    ]);
    await download({
      headers,
      copyCompanyData: pdfSendData,
      fileName,
    });
  };
  return (
    <div>
      <Typography variant="subtitle1" onClick={() => exportPDF()}>
        PDF
      </Typography>
    </div>
  );
};

export default CompanyPdfGenerator;
