import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const CompanySearchDetails = () => {
  // const getSearch = (event) => {
  //   handleCallback(event.target.value);
  // };

  return (
    <div>
      <Grid item xs={12}>
        <TextField
          label="Search"
          size="small"
          // value={projectSearchList}
          // onChange={getSearch}
          fullWidth
        />
      </Grid>
    </div>
  );
};
export default CompanySearchDetails;