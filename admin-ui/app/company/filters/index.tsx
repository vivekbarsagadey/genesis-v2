import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const CompanyFilterComponent = ({handleClose,anchorEl,open}) => {

  // const [companyName, setCompanyName] = useState("");
  // const [companyEmail, setCompanyEmail] = useState("");

  // const doFilter = () => {
  //   if (companyName !== "" && companyEmail !== "") {
  //     const filteredData = projectData?.filter(
  //       (u) =>
  //         u.name.toLowerCase().includes(projectDataName.toLowerCase()) ||
  //         u.customerName
  //           .toLowerCase()
  //           .includes(projectCustomerName.toLowerCase())
  //     );
  //     itemsCallBackHandler(filteredData);
  //     handleClose();
  //     setFilterChipType(true);
  //   }
  // };
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
        <Stack width={300} padding={"1rem"}>
          <Autocomplete
            size="small"
            freeSolo
            disableClearable
          
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
          
          />
        </Stack>

        <Stack width={300} padding={"1rem"}>
          <Autocomplete
            size="small"
            freeSolo
            disableClearable
            // options={Array.from(new Set(projectData?.map((f) => f.name)))}
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
            // onChange={(event, value) => {
            //   updateProjectName(value);
            // }}
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
            <Button variant="contained" size="small" >
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </div>
  )
}

export default CompanyFilterComponent