import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ICompany from "../company.model";

interface CompanySearchComponentProps {
  companies: Array<ICompany>;
  onSearchHandler: (_: Array<ICompany>) => void;
}

const CompanySearchDetails = ({
  companies,
  onSearchHandler,
}: CompanySearchComponentProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const filterByName = (name: string) =>  (f: ICompany): boolean => f.name.toLowerCase().includes(name.toLowerCase());

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _searchValue = e.target.value;
    setSearchStr(_searchValue);
    if (_searchValue == "") {
      onSearchHandler(companies);
      return;
    }
    onSearchHandler(companies.filter(filterByName(_searchValue)));
  };

  return (
    <div>
      <Grid item xs={12}>
        <TextField
          placeholder="Search by Company Name"
          size="small"
          value={searchStr}
          onChange={onSearch}
          fullWidth
        />
      </Grid>
    </div>
  );
};
export default CompanySearchDetails;
