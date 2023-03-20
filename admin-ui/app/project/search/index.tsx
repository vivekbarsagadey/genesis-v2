import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const ProjectSearch = ({ projectSearchList, handleCallback }) => {
  const getSearch = (e:React.ChangeEvent<HTMLInputElement>
    ) => {
    handleCallback(e.target.value);
  };

  return (
    <div>
      <Grid item xs={12}>
        <TextField
          label="Search"
          size="small"
          value={projectSearchList}
          onChange={getSearch}
          fullWidth
        />
      </Grid>
    </div>
  );
};
export default ProjectSearch;
