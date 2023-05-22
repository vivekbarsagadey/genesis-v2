<<<<<<< HEAD
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
      f.customerName.toLowerCase().includes(value.toLowerCase()) ||
      f.status.toLowerCase().includes(value.toLowerCase());
=======
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IProject from "../project.model";

interface CustomerSearchComponentProps {
  projects: Array<IProject>;
  onSearchHandler: (_: Array<IProject>) => void;
}

const CustomerSearchDetails = ({
  projects,
  onSearchHandler,
}: CustomerSearchComponentProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const filterByName = (name: string) =>  (f: IProject): boolean => f.name.toLowerCase().includes(name.toLowerCase());
>>>>>>> dev

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
<<<<<<< HEAD
    if (_searchValue == '') {
      onSearchHandler(projects);
      return;
    }
    onSearchHandler(projects.filter(filterBySearchValue(_searchValue)));
=======
    if (_searchValue == "") {
      onSearchHandler(projects);
      return;
    }
    onSearchHandler(projects.filter(filterByName(_searchValue)));
>>>>>>> dev
  };

  
  return (
<<<<<<< HEAD
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
=======
    <div>
      <Grid item xs={12}>
        <TextField
          placeholder="Search by Project Name"
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
>>>>>>> dev
