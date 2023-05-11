import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IProjects } from '../models';

interface ProjectSearchComponentProps {
  projects: Array<IProjects>;
  onSearchHandler: (_: Array<IProjects>) => void;
}

function ProjectsSearchDetails({
  projects,
  onSearchHandler,
}: ProjectSearchComponentProps) {
  const [searchStr, setSearchStr] = useState<string>('');

  const filterBySearchValue =
    (value: string) =>
    (f: IProjects): boolean =>
      f.name?.toLowerCase().includes(value.toLowerCase()) ||
      f.email.toLowerCase().includes(value.toLowerCase()) ||
      f.mobile.toLowerCase().includes(value.toLowerCase()) ||
      f.status.toLowerCase().includes(value.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == '') {
      onSearchHandler(projects);
      return;
    }
    onSearchHandler(projects.filter(filterBySearchValue(_searchValue)));
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
export default ProjectsSearchDetails;
