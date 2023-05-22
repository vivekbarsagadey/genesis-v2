import { Typography } from '@mui/material';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { IProjects } from '../../project/models';

<<<<<<< HEAD

type ProjectProps = {
  copyProjectData: Array<IProjects>;
};

function ProjectExcellGenerator({ copyProjectData }: ProjectProps) {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const fileName = `project-list-${new Date().toISOString().slice(0, 10)}`;
  const exportToCSV = (projectInfo: ProjectProps, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(projectInfo);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Typography
      variant="subtitle1"
      onClick={(e) => exportToCSV(copyProjectData, fileName)}
    >
      Excel
    </Typography>
  );
}

=======
type ProjectProps={
  projects: Array<IProject>
}

const header = [
  "Id",
  "createdAt",
  "updatedAt",
  " Project Name",
  "Customer Name",
  "Application",
];
const ProjectExcellGenerator = ({ projects }:ProjectProps) => {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: `Project${"-list"}${new Date().toISOString().slice(0, 10)}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: projects,
      },
    });
  }
  return (
    <div>
      <Typography variant="subtitle1" onClick={handleDownloadExcel}>
        Excel
      </Typography>
    </div>
  );
}; 

>>>>>>> dev
export default ProjectExcellGenerator;
