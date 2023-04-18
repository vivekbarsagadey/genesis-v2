import { Typography } from "@mui/material";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { ICompany } from "../../company/models";
import { ICustomer } from "../../customer/models";

type CompanyProps = {
  copyCompanyData: Array<ICompany>;
};

const CompanyExcellGenerator = ({ copyCompanyData }: CompanyProps) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = `company-list-${new Date().toISOString().slice(0, 10)}`;
  const exportToCSV = (companyInfo: CompanyProps, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(companyInfo);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Grid>
      <Typography
        variant="subtitle1"
        onClick={(e) => exportToCSV(copyCompanyData, fileName)}
      >
        Excel
      </Typography>
    </Grid>
  );
};

export default CompanyExcellGenerator;
