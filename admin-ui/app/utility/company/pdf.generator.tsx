import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";

const CompanyPdfGenerator = ({ copyCompanyData }) => {
  const exportPDF = async () => {
    const fileName = `Project ${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Company Name", "Email", "Contact", "Address"]];
    const pdfSendData = copyCompanyData?.map((elt) => [
      elt.name,
      elt.customerName,
      elt.application,
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
