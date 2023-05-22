<<<<<<< HEAD
import React from 'react';
import { Typography } from '@mui/material';
import { download } from '../pdf-util';
import { ICustomer } from '../../customer/models';
=======
import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";
import { ICustomer } from "../../customer/models";


>>>>>>> dev

type CustomerProps = {
  customer: Array<ICustomer>;
};

<<<<<<< HEAD
function CustomerPdfGenerator({ customer }: CustomerProps) {
  const exportPDF = async () => {
    const fileName = `customer-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [['Customer Name', 'Email', 'Contact', 'Address']];
=======
const CustomerPdfGenerator = ({ customer }: CustomerProps) => {
  const exportPDF = async () => {
    const fileName = `customer-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Customer Name", "Email", "Contact", "Address"]];
>>>>>>> dev
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
<<<<<<< HEAD
    <Typography variant="subtitle1" onClick={() => exportPDF()}>
      PDF
    </Typography>
  );
}
=======
    <div>
      <Typography variant="subtitle1" onClick={() => exportPDF()}>
        PDF
      </Typography>
    </div>
  );
};
>>>>>>> dev

export default CustomerPdfGenerator;
