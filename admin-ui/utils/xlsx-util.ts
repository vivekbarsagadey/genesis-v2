// import * as FileSaver from "file-savesr";
// import * as XLSX from "xlsx";

// interface xlsxProps {
//   items: any[];
//   fileName: string;
// }
// const fileType =
//   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
// const fileExtension = ".xlsx";

// const xlsxDownload = async ({ items, fileName }: xlsxProps) => {
//   const ws = XLSX.utils.json_to_sheet(items);
//   const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//   const data = new Blob([excelBuffer], { type: fileType });
//   FileSaver.saveAs(data, fileName + fileExtension);
// };

// export { xlsxDownload };
