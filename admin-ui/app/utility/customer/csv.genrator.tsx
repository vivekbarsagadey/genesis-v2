import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { ICustomer } from "../../customer/models";

type CustomerProps = {
  copyCompanyData: Array<ICustomer>;
};

const CustomerCsvGenerator = ({ copyCompanyData }: CustomerProps) => {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={copyCompanyData}
        filename={`customer-list-${new Date().toISOString().slice(0, 10)}`}
      >
        CSV
      </CSVLink>
    </Typography>
  );
};

export default CustomerCsvGenerator;
