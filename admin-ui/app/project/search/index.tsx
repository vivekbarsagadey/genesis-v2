import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  search: {
    border: "none",
    height: "4vh",
    width: "100%",
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

const ProjectSearch = ({ listSearch, setListSearch }: any) => {
  
  const classes = useStyles();
  const getSearch = (event: any) => {
    setListSearch(event.target.value);
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
            value={listSearch}
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
