import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const TestingFilter = ({
  project,
  anchorEl,
  open,
  handleClose,
  itemsCallBackHandler = () => {},
}) => {
  const [filterDataName, setFilterDataName] = useState("");
  const [filterDataEmail, setFilterDataEmail] = useState("");

  const doFilter = () => {
    const newUsers = project?.filter(
      (u) =>
        u.name.toLowerCase().includes(filterDataName.toLowerCase()) ||
        u.customerName.toLowerCase().includes(filterDataEmail.toLowerCase())
    );
    itemsCallBackHandler(newUsers);
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
          <Stack sx={{ width: 300, padding: "1rem" }}>
            <Autocomplete
              size="small"
              freeSolo
              disableClearable
              options={Array.from(new Set(project?.map((f) => f.name)))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Project Name"
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
          <Stack sx={{ width: 300, padding: "1rem" }}>
            <Autocomplete
              size="small"
              freeSolo
              disableClearable
              options={Array.from(
                new Set(project.map((id) => id.customerName))
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Customer Name"
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
        <Grid container mb={1} mt={2}>
          <Grid item xs={5.6}></Grid>
          <Grid item xs={3.2}>
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize" }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize" }}
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

export default TestingFilter;
