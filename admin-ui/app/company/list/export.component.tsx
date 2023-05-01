import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import CompanyCsvGenerator from '../../utility/company/csv.generator';
import CompanyExcellGenerator from '../../utility/company/excell.generator';
import CompanyPdfGenerator from '../../utility/company/pdf.generator';
import { ICompany } from '../models';

interface CompanyExportComponentProps {
  copyCompanyData: Array<ICompany>;
}
function ExportComponent({ copyCompanyData }: CompanyExportComponentProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
  <>
  <Tooltip title="Export">
  <IconButton
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
				>
  <FileDownloadOutlinedIcon fontSize="small" />
				</IconButton>
			</Tooltip>
  <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
  <MenuItem onClick={handleClose}>
  <CompanyExcellGenerator copyCompanyData={copyCompanyData} />
				</MenuItem>
  <MenuItem onClick={handleClose}>
  <CompanyPdfGenerator copyCompanyData={copyCompanyData} />
				</MenuItem>
  <MenuItem onClick={handleClose}>
  <CompanyCsvGenerator copyCompanyData={copyCompanyData} />
				</MenuItem>
			</Menu>
		</>
	);
}

export default ExportComponent;
