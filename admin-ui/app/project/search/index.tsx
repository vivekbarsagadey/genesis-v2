import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IProject from '../project.model';

interface CustomerSearchComponentProps {
  projects: Array<IProject>;
  onSearchHandler: (_: Array<IProject>) => void;
}

function CustomerSearchDetails({
  projects,
  onSearchHandler,
}: CustomerSearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterByProjectName = (name: string) => (f: IProject): boolean => f.name.toLowerCase().includes(name.toLowerCase());
  // const filterByCompanyName = (customerName: string) =>  (f: IProject): boolean => f.customerName.toLowerCase().includes(customerName.toLowerCase());
  const filterByApplication = (application: string) => (f: IProject): boolean => f.application.toLowerCase().includes(application.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler(projects);
      return;
    }
    onSearchHandler(projects.filter(filterByProjectName(_searchValue)));
    // onSearchHandler(projects.filter(filterByCompanyName(_searchValue)));
    onSearchHandler(projects.filter(filterByApplication(_searchValue)));
  };
  return (
    <Grid item xs={12}>
      <TextField
        placeholder="Search by Project Name"
        size="small"
        value={searchStr}
        onChange={onSearch}
        fullWidth
      />
    </Grid>
  );
}
export default CustomerSearchDetails;
