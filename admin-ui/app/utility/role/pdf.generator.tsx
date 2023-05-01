import React from 'react';
import { Typography } from '@mui/material';
import { download } from '../pdf-util';
import { IRole } from '../../roles/models';

type RoleProps = {
  copyRoles: Array<IRole>;
};

function RolePdfGenerator({ copyRoles }: RoleProps) {
	const exportPDF = async () => {
		const fileName = `role-list-${new Date().toISOString().slice(0, 10)}`;
		const headers = [['Name', 'Description', 'Code']];
		const pdfSendData = copyRoles?.map((elt) => [
			elt.name,
			elt.description,
			elt.code,
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

export default RolePdfGenerator;
