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

const ProjectSearch = ({ newproject, setNewProject }: any) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const getSearch = (event: any) => {
    setSearch(event.target.value);
    setNewProject(
      newproject?.filter((ele: any) =>
        ele.name.toLowerCase().includes(search.toLocaleLowerCase())
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
            value={search}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Grid>
    </div>
  );
};
export default ProjectSearch;
