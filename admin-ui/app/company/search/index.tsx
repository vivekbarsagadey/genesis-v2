import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { ICompany } from '../models/company.model';

interface CompanySearchComponentProps {
  companies: Array<ICompany>;
  onSearchHandler: (_: Array<ICompany>) => void;
}

function CompanySearchDetails({
  companies,
  onSearchHandler,
}: CompanySearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterByName =
    (name: string) =>
    (f: ICompany): boolean =>
      f.name.toLowerCase().includes(name.toLowerCase());
  const filterByEmail =
    (email: string) =>
    (f: ICompany): boolean =>
      f.email.toLowerCase().includes(email.toLowerCase());
  // const filterByContact = (mobile: number) =>  (f: ICompany): boolean => f.mobile.toLowerCase().includes(mobile.toLowerCase());
  const filterByAddress =
    (address: string) =>
    (f: ICompany): boolean =>
      f.address.toLowerCase().includes(address.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler(companies);
      return;
    }
    onSearchHandler(companies.filter(filterByName(_searchValue)));
    onSearchHandler(companies.filter(filterByEmail(_searchValue)));
    // onSearchHandler(companies.filter(filterByContact(_searchValue)));
    onSearchHandler(companies.filter(filterByAddress(_searchValue)));
  };

  console.log('companies', companies);

  return (
    <Grid item xs={12}>
      <TextField
        placeholder="Search by Company Name"
        size="small"
        value={searchStr}
        onChange={onSearch}
        fullWidth
      />
    </Grid>
  );
}
export default CompanySearchDetails;
