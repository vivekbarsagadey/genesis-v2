import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ICompany from "../company.model";
import ICompanyComponentProps from "../company.props";

type CompanyComponentProps = {
  companyData: Array<ICompany>;
  itemsCallBackHandler: any;
};

const CompanySearchDetails = ({
  companyData,
  itemsCallBackHandler = () => {},
}: CompanyComponentProps) => {
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
