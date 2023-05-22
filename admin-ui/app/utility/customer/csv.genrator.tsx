<<<<<<< HEAD
import Typography from '@mui/material/Typography';
import { CSVLink } from 'react-csv';
import { ICustomer } from '../../customer/models';
=======
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { ICustomer } from "../../customer/models";
>>>>>>> dev

type CustomerProps = {
  customer: Array<ICustomer>;
};

<<<<<<< HEAD
function CustomerCsvGenerator({ customer }: CustomerProps) {
=======
const CustomerCsvGenerator = ({ customer }: CustomerProps) => {
>>>>>>> dev
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={customer}
        filename={`customer-list-${new Date().toISOString().slice(0, 10)}`}
<<<<<<< HEAD
        style={{ textDecoration: 'none', color: 'black' }}
=======
>>>>>>> dev
      >
        CSV
      </CSVLink>
    </Typography>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> dev

export default CustomerCsvGenerator;
