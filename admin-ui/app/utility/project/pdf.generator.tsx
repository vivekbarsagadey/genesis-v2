import React from "react";
import { Typography } from "@mui/material";
import { download } from "../pdf-util";

type ProjectProps = {
  projectData: Array<IProject>;
};

const PdfGenerator = ({ projectData }: ProjectProps) => {
  const exportPDF = async () => {
    const fileName = `Project${"-list"}${new Date()
      .toISOString()
      .slice(0, 10)}`;
    const headers = [["Project Name", "Customer Name", "Application"]];
    const pdfSendData = projectData?.map((elt) => [
      elt.name,
      elt.customerName,
      elt.application,
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

export default PdfGenerator;
