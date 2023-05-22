import React, { useEffect, useState } from "react";
import IUserComponentProps from "../user.props";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {  Box } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
}
interface FilterComponentProps extends IUserComponentProps {
  filterDataClose: () => void;
  anchorEl: boolean;
  filterOpen: boolean;
  anchor: boolean;
  chipData: boolean;
  setChipData: boolean;
}

const FilterComponent = ({
  items,
  anchor,
  filterOpen,
  filterDataClose,
  chipData,
  setChipData,
  itemsCallBackHandler = () => {},
}: FilterComponentProps) => {
  items;

  const [filterDataName, setFilterDataName] = useState("");
  const [filterDataEmail, setFilterDataEmail] = useState("");

  const doFilter = () => {
    const newUsers = items?.filter((u) =>
      u.firstName.toLowerCase().includes(filterDataName.toLowerCase())
    );
    itemsCallBackHandler(newUsers);
    setChipData([...chipData, filterDataName]);
    filterDataClose();
  };
  const [chip, setChip] = React.useState("");
  useEffect(() => {
    setChipData([...chipData, chip]);
  }, [chip]);

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchor}
        open={filterOpen}
        onClose={filterDataClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <>
          <Box sx={{ minWidth: 120 }}>
            <Stack sx={{ width: 300, padding: "1rem" }}>
              <Autocomplete
                size="small"
                freeSolo
                disableClearable
                options={Array.from(new Set(items.map((data) => data.firstName)))}
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
                onChange={(event, value) => setFilterDataName(value)}
              />
            </Stack>
          </Box>
        </>
        <div>
          <Grid container mb={1} mt={2}>
            <Grid item xs={5.6}></Grid>
            <Grid item xs={3.2}>
              <Button
                variant="contained"
                size="small"
                style={{ textTransform: "capitalize" }}
                onClick={() => filterDataClose()}
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
        </div>
      </Menu>
    </div>
  );
};

export default FilterComponent;
