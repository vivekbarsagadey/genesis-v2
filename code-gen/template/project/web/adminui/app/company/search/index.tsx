{% set app_Info_cap = appinfo['name'].capitalize() -%}
{% set app_Info_Sm = appinfo['name'] -%}

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { I{{app_Info_cap}} } from '../models/{{app_Info_Sm}}.model';

interface {{app_Info_cap}}SearchComponentProps {
   {{app_Info_Sm}} : Array<I{{app_Info_cap}}>;
  onSearchHandler: (_: Array<I{{app_Info_cap}}>) => void;
}

function {{app_Info_cap}}SearchDetails({
  {{app_Info_Sm}},
  onSearchHandler,
}: {{app_Info_cap}}SearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterByName = (name: string) => (f: I{{app_Info_cap}}): boolean => f.name.toLowerCase().includes(name.toLowerCase());
  const filterByEmail = (email: string) => (f: I{{app_Info_cap}}): boolean => f.email.toLowerCase().includes(email.toLowerCase());
  // const filterByContact = (mobile: number) =>  (f: I{{app_Info_cap}}): boolean => f.mobile.toLowerCase().includes(mobile.toLowerCase());
  const filterByAddress = (address: string) => (f: I{{app_Info_cap}}): boolean => f.address.toLowerCase().includes(address.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler({{app_Info_Sm}});
      return;
    }
    onSearchHandler({{app_Info_Sm}}.filter(filterByName(_searchValue)));
    onSearchHandler({{app_Info_Sm}}.filter(filterByEmail(_searchValue)));
    // onSearchHandler({{app_Info_Sm}}.filter(filterByContact(_searchValue)));
    onSearchHandler({{app_Info_Sm}}.filter(filterByAddress(_searchValue)));
  };

  console.log('{{app_Info_Sm}}', {{app_Info_Sm}});

  return (
    <Grid item xs={12}>
      <TextField
        placeholder="Search by {{app_Info_cap}} Name"
        size="small"
        value={searchStr}
        onChange={onSearch}
        fullWidth
      />
    </Grid>
  );
}
export default {{app_Info_cap}}SearchDetails;
