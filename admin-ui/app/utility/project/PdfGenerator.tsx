import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";

const PdfGenerator = ({ projectData }) => {
  const exportPDF = async () => {
    const fileName = `Project ${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Project Name", "Customer Name", "Application"]];
    const pdfSendData = projectData?.map((elt) => [
      elt.name,
      elt.customerName,
      elt.application,
    ]);
    await download({
      headers,
      projectData: pdfSendData,
      fileName,
    });
  };
  return (
    <div>
      <Typography variant="subtitle1" onClick={() => exportPDF()}>PDF</Typography>
    </div>
  );
};

export default PdfGenerator;
