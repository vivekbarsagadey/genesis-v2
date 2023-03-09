import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

interface xlsxProps {
  project: any[];
  fileName: string;
}
const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

const xlsxDownload = async ({ project, fileName }: xlsxProps) => {
  const ws = XLSX.utils.json_to_sheet(project);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

export { xlsxDownload };
