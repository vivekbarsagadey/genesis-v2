import { Typography } from '@mui/material';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import IProject from '../../project/project.model';

type ProjectProps = {
  projects: Array<IProject>;
};

function ProjectExcellGenerator({ projects }: ProjectProps) {
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
			onClick={(e) => exportToCSV(projects, fileName)}
		>
  Excel
		</Typography>
	);
}

export default ProjectExcellGenerator;
