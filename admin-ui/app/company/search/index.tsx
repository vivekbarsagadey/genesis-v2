import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

type CompanyComponentProps = {
  getSearchedCompanyName: any;
};

const CompanySearchDetails = ({
  getSearchedCompanyName = () => {},
}: CompanyComponentProps) => {
  const [searchCompany, setSearchCompany] = useState("");
  const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCompany(e.target.value);
    getSearchedCompanyName(e.target.value);
  };

  return (
    <div>
      <Grid item xs={12}>
        <TextField
          label="Search by Company Name"
          size="small"
          value={searchCompany}
          onChange={getSearch}
          fullWidth
        />
      </Grid>
    </div>
  );
};
export default CompanySearchDetails;
