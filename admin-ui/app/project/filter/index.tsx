import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const ProjectFilter = ({
  projectData,
  anchorEl,
  open,
  handleClose,
  itemsCallBackHandler = () => {},
  filterSelected,
  setFilterSelected,
  setFilterChipType,
}) => {
  const [projectDataName, setProjectDataName] = useState("");
  const [projectCustomerName, setProjectCustomerName] = useState("");

  const doFilter = () => {
    if (projectDataName !== "" && projectCustomerName !== "") {
      const filteredData = projectData?.filter(
        (u) =>
          u.name.toLowerCase().includes(projectDataName.toLowerCase()) ||
          u.customerName
            .toLowerCase()
            .includes(projectCustomerName.toLowerCase())
      );
      itemsCallBackHandler(filteredData);
      handleClose();
      setFilterChipType(true);
    }
  };

  const updateProjectName = (value) => {
    setProjectDataName(value);
    setFilterSelected([...filterSelected, "Project Name"]);
  };

  const updateCustomerName = (value) => {
    setProjectCustomerName(value);
    setFilterSelected([...filterSelected, "Customer  Name"]);
  };
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack width={300} padding={"1rem"}>
          <Autocomplete
            size="small"
            freeSolo
            disableClearable
            options={Array.from(new Set(projectData?.map((f) => f.name)))}
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
            onChange={(event, value) => {
              updateProjectName(value);
            }}
          />
        </Stack>

        <Stack width={300} padding={"1rem"}>
          <Autocomplete
            size="small"
            freeSolo
            disableClearable
            options={Array.from(
              new Set(projectData?.map((id) => id.customerName))
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
            onChange={(event, value) => {
              updateCustomerName(value);
            }}
          />
        </Stack>

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
            <Button variant="contained" size="small" onClick={doFilter}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};

export default ProjectFilter;
