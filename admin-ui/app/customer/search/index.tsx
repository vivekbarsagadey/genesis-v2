import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { ICustomer } from '../models';

interface CustomerSearchComponentProps {
  customer: Array<ICustomer>;
  onSearchHandler: (_: Array<ICustomer>) => void;
}

function CustomerSearchDetails({
  customer,
  onSearchHandler,
}: CustomerSearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterByName = (firstName: string) => (f: ICustomer): boolean => f.firstName.toLowerCase().includes(firstName.toLowerCase());
  const filterByEmail = (email: string) => (f: ICustomer): boolean => f.email.toLowerCase().includes(email.toLowerCase());
  const filterByMobile = (mobile: string) => (f: ICustomer): boolean => f.mobile.toLowerCase().includes(mobile.toLowerCase());
  const filterByAddress = (address: string) => (f: ICustomer): boolean => f.address.toLowerCase().includes(address.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler(customer);
      return;
    }
    onSearchHandler(customer.filter(filterByName(_searchValue)));
    onSearchHandler(customer.filter(filterByEmail(_searchValue)));
    onSearchHandler(customer.filter(filterByMobile(_searchValue)));
    onSearchHandler(customer.filter(filterByAddress(_searchValue)));
  };
  return (
    <Grid item xs={12}>
      <TextField
        placeholder="Search here.."
        size="small"
        value={searchStr}
        onChange={onSearch}
        fullWidth
      />
    </Grid>
  );
}
export default CustomerSearchDetails;
