import React from 'react';
import { Typography } from '@mui/material';
import { download } from '../pdf-util';
import IProject from '../../project/project.model';

type ProjectProps = {
  projects: Array<IProject>;
};

function ProjectPdfGenerator({ projects }: ProjectProps) {
	const exportPDF = async () => {
		const fileName = `Project${'-list'}${new Date()
			.toISOString()
			.slice(0, 10)}`;
		const headers = [['Project Name', 'Customer Name', 'Application']];
		const pdfSendData = projects?.map((elt) => [
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
