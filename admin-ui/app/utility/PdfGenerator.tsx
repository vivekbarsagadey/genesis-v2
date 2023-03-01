import React from "react";
import { Typography } from "@mui/material";
import { download } from "../../utils/pdf-util";
import { ProjectHomeStyle as style} from "../project/ProjectHomeStyle";

const PdfGenerator = ({ project }: any) => {
  const exportPDF = async () => {
    const fileName = `Project ${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Project Name", "Customer Name", "Application"]];
    const pdfSendData = project?.map((elt: any) => [
      elt.name,
      elt.customerName,
      elt.application,
    ]);
    await download({
      headers,
      project: pdfSendData,
      fileName,
    });
  };
  return (
    <div>
      <Typography onClick={() => exportPDF()} style={style.menubtn}>
        PDF
      </Typography>
    </div>
  );
};

export default PdfGenerator;
