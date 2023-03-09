import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { useState } from "react";
import ICompanyComponentProps from "../company.props";

interface FilterComponentProps extends ICompanyComponentProps {
  handleClose: () => void;
  anchorEl: boolean;
  open: boolean;
}

const FilterComponent = ({
  items,
  itemsCallBackHandler = () => {},
}: FilterComponentProps) => {
  const [filterDataName, setFilterDataName] = useState("");
  const [filterDataEmail, setFilterDataEmail] = useState("");

  const doFilter = () => {
    if (filterDataName !== "" && filterDataEmail !== "") {
      const newCompany = items?.filter(
        (c) =>
          c.name.toLowerCase().includes(filterDataName.toLowerCase()) ||
          c.email.toLowerCase().includes(filterDataEmail.toLowerCase())
      );
      itemsCallBackHandler(newCompany);
    }
  };

  return (
    <div>
      <Menu >
        <Stack spacing={2}>
          <Autocomplete
            freeSolo
            disableClearable
            options={items?.map((f) => f.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Name"
                size="small"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
            onChange={(event, value) => setFilterDataName(value)}
          />
        </Stack>

        <Stack spacing={2}>
          <Autocomplete
            freeSolo
            disableClearable
            options={items?.map((id) => id.email)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Email"
                size="small"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
            onChange={(event, value) => setFilterDataEmail(value)}
          />
        </Stack>

        <Grid container mb={1}>
          <Grid item xs={5.6}></Grid>
          <Grid item xs={3.6}>
            <Button variant="outlined" size="small">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" size="small" onClick={doFilter}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

export default FilterComponent;
