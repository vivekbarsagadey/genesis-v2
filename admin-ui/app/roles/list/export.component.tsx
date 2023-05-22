import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import RoleCsvGenerator from '../../utility/role/csv.genrator';
import RoleExcellGenerator from '../../utility/role/excell.generator';
import RolePdfGenerator from '../../utility/role/pdf.generator';
import { IRole } from '../models';

interface RoleExportComponentProps {
  copyRoles: Array<IRole>;
}
function ExportComponent({ copyRoles }: RoleExportComponentProps) {
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
          <RoleExcellGenerator copyRoles={copyRoles} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RolePdfGenerator copyRoles={copyRoles} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RoleCsvGenerator copyRoles={copyRoles} />
        </MenuItem>
      </Menu>
    </>
  );
}

export default ExportComponent;
