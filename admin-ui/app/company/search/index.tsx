import SearchIcon from "@mui/icons-material/Search";
import { Grid, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState } from "react";
import ICompanyComponentProps from "../company.props";
import { CompanyStyle as style } from "../companystyle";

interface SearchComponentProps extends ICompanyComponentProps {}

const SearchComponent = ({
  items,
  itemsCallBackHandler = () => {},
}: SearchComponentProps) => {
  const [search, setSearch] = useState("");

  const getSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const doSearch = () => {
    itemsCallBackHandler(
      items.filter((ele) =>
        ele.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      <Grid item xs={12}>
        <Box style={style.box}>
          <TextField
            fullWidth
            label="Search"
            id="Search"
            type="text"
            size="small"
            placeholder="Search"
            onChange={getSearch}
            style={style.search}
          />
          <IconButton onClick={doSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Grid>
    </>
  );
};

export default SearchComponent;
