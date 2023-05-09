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

  const filterByName = (value:string) => (f: ICompany): boolean => 
  f.name?.toLowerCase().includes(value.toLowerCase()) || 
  f.email.toLowerCase().includes(value.toLowerCase()) ||
  f.mobile.toLowerCase().includes(value.toLowerCase()) ||
  f.status.toLowerCase().includes(value.toLowerCase()) ||
  f?.address.toLowerCase().includes(value.toLowerCase()) ;
  
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler(companies);
      return;
    }
    onSearchHandler(companies.filter(filterByName(_searchValue)));
  };


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
