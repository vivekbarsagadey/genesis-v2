import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ICompanyComponentProps from "../company.props";



interface SearchComponentProps extends ICompanyComponentProps {}

const CompanySearchDetails = ({
  companyData, itemsCallBackHandler = () => {},
}:SearchComponentProps) => {
  const [search, setSearch] = useState("");
  const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    itemsCallBackHandler(
      companyData?.filter((ele) =>
        ele.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <Grid item xs={12}>
        <TextField
          label="Search"
          size="small"
          value={search}
          onChange={getSearch}
          fullWidth
        />
      </Grid>
    </div>
  );
};
export default CompanySearchDetails;
