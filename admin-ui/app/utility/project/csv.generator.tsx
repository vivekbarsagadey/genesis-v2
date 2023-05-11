import Typography from '@mui/material/Typography';
import { CSVLink } from 'react-csv';
import { IProjects } from '../../project/models';

type ProjectProps = {
  copyProjectData: Array<IProjects>;
};
function ProjectCsvGenerator({ copyProjectData }: ProjectProps) {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyProjectData}
        filename={`projectData${'-list'}${new Date()
          .toISOString()
          .slice(0, 10)}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        CSV
      </CSVLink>
    </Typography>
  );
}

export default ProjectCsvGenerator;
