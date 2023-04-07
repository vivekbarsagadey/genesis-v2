import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";
import { ICustomer } from "../../customer/models";



type CustomerProps = {
  customer: Array<ICustomer>;
};

const CustomerPdfGenerator = ({ customer }: CustomerProps) => {
  const exportPDF = async () => {
    const fileName = `customer-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Customer Name", "Email", "Contact", "Address"]];
    const pdfSendData = customer?.map((elt) => [
      elt.firstName,
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
