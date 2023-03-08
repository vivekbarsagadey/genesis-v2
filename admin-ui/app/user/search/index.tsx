import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import IUserComponentProps from "../user.props";

interface SearchComponentProps extends IUserComponentProps {}

const SearchUserComponent = ({
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
        ele.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      <Grid item xs={12}>
        <Box pl={1}>
          <input type="text" placeholder="Search" onChange={getSearch} />
          <IconButton onClick={doSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Grid>
    </>
  );
};

export default SearchUserComponent;
