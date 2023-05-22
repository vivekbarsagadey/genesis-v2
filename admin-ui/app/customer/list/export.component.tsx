<<<<<<< HEAD
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import CustomerCsvGenerator from '../../utility/customer/csv.genrator';
import CustomerExcellGenerator from '../../utility/customer/excell.generator';
import CustomerPdfGenerator from '../../utility/customer/pdf.generator';
import { ICustomer } from '../models';
=======
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import CustomerCsvGenerator from "../../utility/customer/csv.genrator";
import CustomerExcellGenerator from "../../utility/customer/excell.generator";
import CustomerPdfGenerator from "../../utility/customer/pdf.generator";
import { ICustomer } from "../models";
>>>>>>> dev

interface CompanyExportComponentProps {
  customer: Array<ICustomer>;
}
<<<<<<< HEAD
function ExportComponent({ customer }: CompanyExportComponentProps) {
=======
const ExportComponent = ({ customer }: CompanyExportComponentProps) => {
>>>>>>> dev
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
<<<<<<< HEAD
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
=======
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
>>>>>>> dev
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
<<<<<<< HEAD
          'aria-labelledby': 'basic-button',
=======
          "aria-labelledby": "basic-button",
>>>>>>> dev
        }}
      >
        <MenuItem onClick={handleClose}>
          <CustomerExcellGenerator customer={customer} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CustomerPdfGenerator customer={customer} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CustomerCsvGenerator customer={customer} />
        </MenuItem>
      </Menu>
    </>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> dev

export default ExportComponent;
