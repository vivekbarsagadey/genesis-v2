import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { SearchStyle as style } from "./search.style";

const ProjectSearch = ({ projectSearchList, handleCallback }: any) => {
  const getSearch = (event: any) => {
    handleCallback(event.target.value);
  };

  return (
    <div>
      <Grid item xs={12}>
        <Box pl={1} style={style.box}>
          <input
            type="text"
            placeholder="Search"
            onChange={getSearch}
            style={style.search}
            value={projectSearchList}
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
