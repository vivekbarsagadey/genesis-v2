import { Grid, Typography } from '@mui/material';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { IUser } from '../../user/models';
import { ICustomer } from '../../customer/models';

type UserProps = {
  copyUserData: Array<IUser>;
};

function UserExcellGenerator({ copyUserData }: any) {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const fileName = `user-list-${new Date().toISOString().slice(0, 10)}`;
  const exportToCSV = (userInfo: any, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(userInfo);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Grid>
      <Typography
        variant="subtitle1"
        onClick={(e) => exportToCSV(copyUserData, fileName)}
      >
        Excel
      </Typography>
    </Grid>
  );
}

export default UserExcellGenerator;
