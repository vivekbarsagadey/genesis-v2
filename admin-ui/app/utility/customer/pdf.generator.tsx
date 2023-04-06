import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";
import { ICompany } from "../../company/models";


type CustomerProps = {
  copyCompanyData: Array<ICompany>;
};

const CustomerPdfGenerator = ({ copyCompanyData }: CustomerProps) => {
  const exportPDF = async () => {
    const fileName = `customer-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Company Name", "Email", "Contact", "Address"]];
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
    <div>
      <Typography variant="subtitle1" onClick={() => exportPDF()}>
        PDF
      </Typography>
    </div>
  );
};

export default CustomerPdfGenerator;
