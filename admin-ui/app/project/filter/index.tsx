import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const ProjectFilter = ({
  project,
  anchorEl,
  open,
  handleClose,
  itemsCallBackHandler = () => {},
  filterSelected,
  setFilterSelected,
  setFilterChipType,
}: any) => {
  const [filterDataName, setFilterDataName] = useState("");
  const [filterDataEmail, setFilterDataEmail] = useState("");

  const doFilter = () => {
    setFilterChipType(true);
    const filteredData = project?.filter(
      (u) =>
        u.name.toLowerCase().includes(filterDataName.toLowerCase()) ||
        u.customerName.toLowerCase().includes(filterDataEmail.toLowerCase())
    );
    itemsCallBackHandler(filteredData);
    handleClose();
  };

  const updateProjectName = (value: any) => {
    setFilterDataName(value);
    setFilterSelected([...filterSelected, "Project Name"]);
  };

  const updateCustomerName = (value: any) => {
    setFilterDataEmail(value);
    setFilterSelected([...filterSelected, "Customer  Name"]);
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
              // onChange={(event, value) => setFilterDataName(value)}
              onChange={(event, value) => {
                updateProjectName(value);
              }}
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
              // onChange={(event, value) => setFilterDataEmail(value)}
              onChange={(event, value) => {
                updateCustomerName(value);
              }}
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
              disabled={!filterDataName || !filterDataEmail}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

export default ProjectFilter;
