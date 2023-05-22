import { Grid, IconButton, Input } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ICompanyComponentProps from "../company.props";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  search: {
    border: "none",
    height: "5vh",
    width: "100%",
    paddingLeft: "10px",
  },
  box: {
    display: "flex",
    alignItems: "center",
    border: "1px ridge",
  },
});

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
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Box className={classes.box}>
          <input
            type="text"
            placeholder="Search"
            onChange={getSearch}
            className={classes.search}
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
