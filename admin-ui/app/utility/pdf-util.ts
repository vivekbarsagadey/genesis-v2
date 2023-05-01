import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface DownloadProps {
  headers: string[][];
  title: string;
  fileName: string;
  pdfSendData: (_: string) => any;
}

const download = async ({ headers, pdfSendData, fileName }: DownloadProps) => {
  const unit = 'pt';
  const size = 'A3'; // Use A1, A2, A3 or A4
  const orientation = 'portrait'; // portrait or landscape
  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);
  doc.setFontSize(15);

  const content = {
    startY: 50,
    head: headers,
    body: pdfSendData,
  };
  doc.autoTable(content);
  doc.save(fileName);
};

const upload = () => {};

export { download, upload };
