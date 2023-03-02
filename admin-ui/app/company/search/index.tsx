import { Grid, IconButton, Input } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ICompanyComponentProps from "../company.props";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { CompanyStyle as style } from "../CompanyStyle";


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
          <input
            type="text"
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
