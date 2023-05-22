{% set Info_Cap = app_list['name'].capitalize() -%}
{% set Info_Sm = app_list['name'] -%}

import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import {{Info_Cap}}CsvGenerator from '../../utility/{{Info_Sm}}/csv.generator';
import {{Info_Cap}}ExcellGenerator from '../../utility/{{Info_Sm}}/excell.generator';
import {{Info_Cap}}PdfGenerator from '../../utility/{{Info_Sm}}/pdf.generator';
import { I{{Info_Cap}} } from '../models';

interface {{Info_Cap}}ExportComponentProps {
  copyCompanyData: Array<I{{Info_Cap}}>;
}
function ExportComponent({ copy{{Info_Cap}}Data }: {{Info_Cap}}ExportComponentProps) {
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
        
      >
        <MenuItem onClick={handleClose}>
          <{{Info_Cap}}ExcellGenerator copy{{Info_Cap}}Data={copy{{Info_Cap}}Data} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <{{Info_Cap}}PdfGenerator copy{{Info_Cap}}Data={copy{{Info_Cap}}Data} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <{{Info_Cap}}CsvGenerator copy{{Info_Cap}}Data={copy{{Info_Cap}}Data} />
        </MenuItem>
      </Menu>
    </>
  );
}

export default ExportComponent;
