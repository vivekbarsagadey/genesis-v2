import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ICustomer } from "../models";

interface CustomerSearchComponentProps {
  customer: Array<ICustomer>;
  onSearchHandler: (_: Array<ICustomer>) => void;
}

const CustomerSearchDetails = ({
  customer,
  onSearchHandler,
}: CustomerSearchComponentProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const filterByName = (firstName: string) =>  (f: ICustomer): boolean => f.firstName.toLowerCase().includes(firstName.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == "") {
      onSearchHandler(customer);
      return;
    }
    onSearchHandler(customer.filter(filterByName(_searchValue)));
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          placeholder="Search by Customer Name"
          size="small"
          value={searchStr}
          onChange={onSearch}
          fullWidth
        />
      </Grid>
    </>
  );
};
export default CustomerSearchDetails;
