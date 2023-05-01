import React from 'react';
import { Typography, Grid } from '@mui/material';
import { download } from '../pdf-util';
import { IUser } from '../../user/models';

type UserProps = {
  copyUserData: Array<IUser>;
};

function UserPdfGenerator({ copyUserData }: any) {
	const exportPDF = async () => {
		const fileName = `company-list-${new Date().toISOString().slice(0, 10)}`;
		const headers = [['Company Name', 'Email', 'Contact', 'Address']];
		const pdfSendData = copyUserData?.map((elt) => [
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
  <Grid>
  <Typography variant="subtitle1" onClick={() => exportPDF()}>
  PDF
			</Typography>
		</Grid>
	);
}

export default UserPdfGenerator;
