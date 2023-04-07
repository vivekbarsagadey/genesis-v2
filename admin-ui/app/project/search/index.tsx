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

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == "") {
      onSearchHandler(projects);
      return;
    }
    onSearchHandler(projects.filter(filterByName(_searchValue)));
  };

  return (
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
