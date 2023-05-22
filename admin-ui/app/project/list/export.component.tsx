<<<<<<< HEAD
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
=======
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import ProjectCsvGenerator from "../../utility/project/csv.generator";
import ProjectExcellGenerator from "../../utility/project/excell.generator";
import ProjectPdfGenerator from "../../utility/project/pdf.generator";
import IProject from "../project.model";


interface CompanyExportComponentProps {
  projects: Array<IProject>;
}
const ProjectExportComponent = ({ projects }: CompanyExportComponentProps) => {
>>>>>>> dev
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
<<<<<<< HEAD
=======

>>>>>>> dev
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
=======
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ProjectExcellGenerator projects={projects} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ProjectPdfGenerator projects={projects} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ProjectCsvGenerator projects={projects} />
>>>>>>> dev
        </MenuItem>
      </Menu>
    </>
  );
<<<<<<< HEAD
}

export default ExportComponent;
=======
};

export default ProjectExportComponent;
>>>>>>> dev
