import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IRole } from '../models';

interface RoleSearchComponentProps {
  roles: Array<IRole>;
  onSearchHandler: (_: Array<IRole>) => void;
}

function RolesSearchDetails({
  roles,
  onSearchHandler,
}: RoleSearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterByName = (name: string) => (f: IRole): boolean => f.name.toLowerCase().includes(name.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler(roles);
      return;
    }
    onSearchHandler(roles.filter(filterByName(_searchValue)));
  };

  console.log('roles', roles);

  return (
    <Grid item xs={12}>
      <TextField
        placeholder="Search by Name"
        size="small"
        value={searchStr}
        onChange={onSearch}
        fullWidth
      />
    </Grid>
  );
}
export default RolesSearchDetails;
