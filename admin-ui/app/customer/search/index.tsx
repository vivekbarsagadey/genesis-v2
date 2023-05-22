<<<<<<< HEAD
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { ICustomer } from '../models';
=======
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ICustomer } from "../models";
>>>>>>> dev

interface CustomerSearchComponentProps {
  customer: Array<ICustomer>;
  onSearchHandler: (_: Array<ICustomer>) => void;
}

<<<<<<< HEAD
function CustomerSearchDetails({
  customer,
  onSearchHandler,
}: CustomerSearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterByName = (firstName: string) => (f: ICustomer): boolean => f.firstName.toLowerCase().includes(firstName.toLowerCase());
  const filterByEmail = (email: string) => (f: ICustomer): boolean => f.email.toLowerCase().includes(email.toLowerCase());
  const filterByMobile = (mobile: string) => (f: ICustomer): boolean => f.mobile.toLowerCase().includes(mobile.toLowerCase());
  const filterByAddress = (address: string) => (f: ICustomer): boolean => f.address.toLowerCase().includes(address.toLowerCase());
=======
const CustomerSearchDetails = ({
  customer,
  onSearchHandler,
}: CustomerSearchComponentProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const filterByName = (firstName: string) =>  (f: ICustomer): boolean => f.firstName.toLowerCase().includes(firstName.toLowerCase());
>>>>>>> dev

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
<<<<<<< HEAD
    if (_searchValue == '') {
=======
    if (_searchValue == "") {
>>>>>>> dev
      onSearchHandler(customer);
      return;
    }
    onSearchHandler(customer.filter(filterByName(_searchValue)));
<<<<<<< HEAD
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
=======
  };

  return (
    <div>
      <Grid item xs={12}>
        <TextField
          placeholder="Search by Customer Name"
          size="small"
          value={searchStr}
          onChange={onSearch}
          fullWidth
        />
      </Grid>
    </div>
  );
};
>>>>>>> dev
export default CustomerSearchDetails;
