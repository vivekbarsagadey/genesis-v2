import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import UserCsvGenerator from '../../utility/user/csv.generator';
import UserExcellGenerator from '../../utility/user/excell.generator';
import UserPdfGenerator from '../../utility/user/pdf.generator';
import { IUser } from '../models';

interface UserExportComponentProps {
  user: any;
}
function ExportComponent({ user }: UserExportComponentProps) {
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
          <UserExcellGenerator user={user} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UserPdfGenerator user={user} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UserCsvGenerator user={user} />
        </MenuItem>
      </Menu>
    </>
  );
}
export default ExportComponent;
