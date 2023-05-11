import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import ProjectCsvGenerator from '../../utility/project/csv.generator';
import ProjectExcellGenerator from '../../utility/project/excell.generator';
import ProjectPdfGenerator from '../../utility/project/pdf.generator';
import { IProjects } from '../models';

interface CompanyExportComponentProps {
  copyProjectData: Array<IProjects>;
}
function ExportComponent({ copyProjectData }: CompanyExportComponentProps) {
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
          <ProjectExcellGenerator copyProjectData={copyProjectData} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ProjectCsvGenerator copyProjectData={copyProjectData} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ProjectPdfGenerator copyProjectData={copyProjectData} />
        </MenuItem>
      </Menu>
    </>
  );
}

export default ExportComponent;
