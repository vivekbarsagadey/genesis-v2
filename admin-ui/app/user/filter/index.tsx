import React, { useState } from "react";
import IUserComponentProps from "../user.props";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
interface FilterComponentProps extends IUserComponentProps {
  handleClose: () => void;
  anchorEl: boolean;
  open: boolean;
}

const FilterUserComponent = ({
  items,
  anchorEl,
  open,
  handleClose,
  itemsCallBackHandler = () => {},
}: FilterComponentProps) => {
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
          <Stack>
            <Autocomplete
              size="small"
              freeSolo
              disableClearable
              options={Array.from(new Set(items?.map((f) => f.firstName)))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Name"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
        </div>

        <div>
          <Stack>
            <Autocomplete
              size="small"
              freeSolo
              disableClearable
              options={Array.from(new Set(items?.map((id) => id.email)))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Email"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
        </div>
        <Grid container mb={1} mt={2}>
          <Grid item xs={5.6}></Grid>
          <Grid item xs={3.2}>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" size="small">
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

export default FilterUserComponent;
