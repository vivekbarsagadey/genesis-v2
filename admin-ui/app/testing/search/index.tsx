import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  search: {
    border: "none",
    height: "4vh",
    width: "100%",
    // paddingLeft: "7px",
    outline: "none",
  },
  box: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    border: "1px solid #cbd5e1",
    borderRadius: "5px",
    height: "6vh",
  },
});




const TestingSearch = ({project,itemsCallBackHandler
}) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const getSearch = (event: any) => {
    setSearch(event.target.value);
  };
  const doSearch = () => {
    itemsCallBackHandler(
      project.filter((ele: any) =>
        ele.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };
  return (
    <div>
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
    </div>
  );
};
export default TestingSearch;
