import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ICompanyComponentProps from "../company.props";
import { Stack } from "@mui/system";
import { CompanyStyle as style } from "../CompanyStyle";

interface FilterComponentProps extends ICompanyComponentProps {
  handleClose: () => void;
  anchorEl: boolean;
  open: boolean;
}

const FilterComponent = ({
  items,
  anchorEl,
  open,
  handleClose,
  itemsCallBackHandler = () => {},
}: FilterComponentProps) => {
  const [filterDataName, setFilterDataName] = useState("");
  const [filterDataEmail, setFilterDataEmail] = useState("");

  const doFilter = () => {
    const newCompany = items?.filter(
      (c) =>
        c.name.toLowerCase().includes(filterDataName.toLowerCase()) ||
        c.email.toLowerCase().includes(filterDataEmail.toLowerCase())
    );
    itemsCallBackHandler(newCompany);
    handleClose();
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          <Stack spacing={2} style={style.stack}>
            <Autocomplete
              freeSolo
              disableClearable
              options={items.map((f) => f.name)}
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
        </div>

        <div>
          <Stack spacing={2} style={style.stack}>
            <Autocomplete
              freeSolo
              disableClearable
              options={items.map((id) => id.email)}
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
        </div>

        <Grid container mb={1}>
          <Grid item xs={5.6}></Grid>
          <Grid item xs={3.6}>
            <Button
              variant="outlined"
              size="small"
              style={style.filterbtn}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              size="small"
              style={style.filterbtn}
              onClick={doFilter}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

export default FilterComponent;
