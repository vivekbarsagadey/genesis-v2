import Typography from '@mui/material/Typography';
import { CSVLink } from 'react-csv';
import { ICustomer } from '../../customer/models';

type CustomerProps = {
  customer: Array<ICustomer>;
};

function CustomerCsvGenerator({ customer }: CustomerProps) {
  return (
    <Typography variant="subtitle1">
      <CSVLink
        data={customer}
        filename={`customer-list-${new Date().toISOString().slice(0, 10)}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        CSV
      </CSVLink>
    </Typography>
  );
}

export default CustomerCsvGenerator;
