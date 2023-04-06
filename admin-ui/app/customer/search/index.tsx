import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ICustomer } from "../models";

interface CompanySearchComponentProps {
  companies: Array<ICustomer>;
  onSearchHandler: (_: Array<ICustomer>) => void;
}

const CustomerSearchDetails = ({
  customer,
  onSearchHandler,
}: CompanySearchComponentProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const filterByName = (name: string) =>  (f: ICustomer): boolean => f.name.toLowerCase().includes(name.toLowerCase());

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
export default CustomerSearchDetails;
