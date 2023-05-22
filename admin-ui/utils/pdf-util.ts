import jsPDF from "jspdf";
import "jspdf-autotable";

interface DownloadProps {
  items: string[][];
  headers: string[][];
  title:string,
  fileName: string
}

const download = async ({ headers, items, title, fileName }: DownloadProps) => {
  debugger;
  const unit = "pt";
  const size = "A3"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape
  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);
  doc.setFontSize(15);
 
  let content = {
    startY: 50,
    head: headers,
    body: items,
  };
  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.save(fileName);
};

const upload = () => {};

export { download, upload };
