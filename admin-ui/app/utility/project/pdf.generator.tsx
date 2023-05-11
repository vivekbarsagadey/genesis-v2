import React from 'react';
import { Typography } from '@mui/material';
import { download } from '../pdf-util';
import { IProjects } from '../../project/models';


type ProjectProps = {
  copyProjectData: Array<IProjects>;
};

function ProjectPdfGenerator({ copyProjectData }: ProjectProps) {
  const exportPDF = async () => {
    const fileName = `Project${'-list'}${new Date()
      .toISOString()
      .slice(0, 10)}`;
    const headers = [['Project Name', 'Customer Name', 'Application']];
    const pdfSendData = copyProjectData?.map((elt) => [
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
    <Typography variant="subtitle1" onClick={() => exportPDF()}>
      PDF
    </Typography>
  );
}

export default ProjectPdfGenerator;
