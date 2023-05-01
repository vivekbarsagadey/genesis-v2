import { Typography } from '@mui/material';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { IRole } from '../../roles/models';

type RoleProps = {
  copyRoles: Array<IRole>;
};

function RoleExcellGenerator({ copyRoles }: RoleProps) {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const fileName = `roles-list-${new Date().toISOString().slice(0, 10)}`;
  const exportToCSV = (roleInfo: RoleProps, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(roleInfo);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Typography
      variant="subtitle1"
      onClick={(e) => exportToCSV(copyRoles, fileName)}
    >
      Excel
    </Typography>
  );
}

export default RoleExcellGenerator;
