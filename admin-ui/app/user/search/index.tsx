import IUserComponentProps from "../user.props";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper/Paper";

const useStyles = makeStyles({
  search: {
    border: "none",
    height: "4vh",
    width: "100%",
    // paddingLeft: "7px",
    outline: "none",
  },
  box: {
    backgroundColor:"#fff",
    display: "flex",
    alignItems: "center",
    // border: "1px solid #cbd5e1",
    borderRadius: "5px",

  },
});

interface SearchComponentProps extends IUserComponentProps {}


const SearchUserComponent = ({items,itemsCallBackHandler = () => {},
}: SearchComponentProps) => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
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
        <Box pl={1} className={classes.box}>
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

export default SearchUserComponent;
